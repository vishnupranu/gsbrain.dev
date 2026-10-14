#!/usr/bin/env bash
# ==============================================================================
# GSBrain.dev — Production Deployment Script
# Target: coolify.guideitsol.in
# This script runs all preflight checks, builds the application,
# and prepares for production deployment to Coolify.
# ==============================================================================
set -Eeuo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "ERROR: Not in a Git repo" >&2; exit 1; }
cd "$ROOT"

step() { printf "\n${BLUE}════════════════════════════════════════${NC}\n"; printf "${BLUE}  %s${NC}\n" "$1"; printf "${BLUE}════════════════════════════════════════${NC}\n\n"; }
pass() { printf "${GREEN}✓ PASS:${NC} %s\n" "$1"; }
warn() { printf "${YELLOW}⚠ WARN:${NC} %s\n" "$1"; }
fail() { printf "${RED}✗ FAIL:${NC} %s\n" "$1" >&2; }
info() { printf "  %s\n" "$1"; }

ERRORS=0

# ==============================================================================
# PHASE 1: PREFLIGHT SCAN
# ==============================================================================
step "PHASE 1: Preflight Scan"

info "Repository: $ROOT"
info "Branch: $(git branch --show-current 2>/dev/null || echo unknown)"
info "Commit: $(git rev-parse --short HEAD)"
info "Date: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"

# Check required tools
for cmd in node npm; do
  if command -v "$cmd" >/dev/null 2>&1; then
    pass "$cmd $(command "$cmd" --version 2>&1 | head -1)"
  else
    fail "Missing required command: $cmd"
    ERRORS=$((ERRORS + 1))
  fi
done

# Check for optional tools
for cmd in pnpm yarn docker; do
  if command -v "$cmd" >/dev/null 2>&1; then
    info "$cmd available"
  else
    warn "$cmd not installed (optional)"
  fi
done

# ==============================================================================
# PHASE 2: DEPENDENCY INSTALLATION
# ==============================================================================
step "PHASE 2: Dependency Installation"

if [[ -f package.json ]]; then
  if [[ -f pnpm-lock.yaml ]] && command -v pnpm >/dev/null 2>&1; then
    info "Installing via pnpm..."
    pnpm install --frozen-lockfile && pass "Dependencies installed via pnpm"
  elif [[ -f package-lock.json ]]; then
    info "Installing via npm ci..."
    npm ci && pass "Dependencies installed via npm ci"
  elif [[ -f yarn.lock ]] && command -v yarn >/dev/null 2>&1; then
    info "Installing via yarn..."
    yarn install --frozen-lockfile && pass "Dependencies installed via yarn"
  else
    info "Installing via npm install..."
    npm install && pass "Dependencies installed via npm"
  fi
else
  fail "No package.json found"
  ERRORS=$((ERRORS + 1))
fi

# ==============================================================================
# PHASE 3: LINT & TYPECHECK
# ==============================================================================
step "PHASE 3: Code Quality Checks"

if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts['lint'] ? 0 : 1)" 2>/dev/null; then
  info "Running lint..."
  if npm run lint 2>&1; then
    pass "Lint passed"
  else
    warn "Lint reported issues (non-blocking)"
  fi
else
  warn "No lint script configured"
fi

if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts['typecheck'] ? 0 : 1)" 2>/dev/null; then
  info "Running typecheck..."
  if npm run typecheck 2>&1; then
    pass "Typecheck passed"
  else
    fail "Typecheck failed"
    ERRORS=$((ERRORS + 1))
  fi
else
  warn "No typecheck script configured"
fi

# ==============================================================================
# PHASE 4: PRODUCTION BUILD
# ==============================================================================
step "PHASE 4: Production Build"

info "Building Next.js application (standalone output)..."
if npm run build 2>&1; then
  pass "Production build succeeded"
else
  fail "Production build failed"
  ERRORS=$((ERRORS + 1))
fi

# Verify standalone output exists
if [[ -d ".next/standalone" ]]; then
  pass "Standalone output generated"
  info "Size: $(du -sh .next/standalone 2>/dev/null | cut -f1)"
else
  fail "Standalone output not found"
  ERRORS=$((ERRORS + 1))
fi

# ==============================================================================
# PHASE 5: DOCKER VALIDATION
# ==============================================================================
step "PHASE 5: Docker & Compose Validation"

if command -v docker >/dev/null 2>&1; then
  # Validate Dockerfile
  if [[ -f Dockerfile ]]; then
    info "Dockerfile found"
    pass "Dockerfile present"
  else
    fail "Dockerfile missing"
    ERRORS=$((ERRORS + 1))
  fi

  # Validate docker-compose
  if [[ -f docker-compose.yml ]] || [[ -f compose.yaml ]]; then
    info "Compose file found"
    if docker compose config --quiet 2>/dev/null; then
      pass "Compose configuration valid"
    else
      warn "Compose validation skipped (may need running Docker daemon)"
    fi
  else
    fail "No compose file found"
    ERRORS=$((ERRORS + 1))
  fi
else
  warn "Docker not installed locally — build will happen on Coolify server"
  if [[ -f Dockerfile ]]; then pass "Dockerfile present for remote build"; fi
  if [[ -f docker-compose.yml ]]; then pass "docker-compose.yml present for remote deployment"; fi
fi

# ==============================================================================
# PHASE 6: SECURITY CHECKS
# ==============================================================================
step "PHASE 6: Security Checks"

# Check for no secrets in source
if grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
  -i "password\s*=\s*['\"][^'\"]" src/ 2>/dev/null | grep -v "node_modules" | head -5; then
  fail "Potential hardcoded credentials found in source"
  ERRORS=$((ERRORS + 1))
else
  pass "No hardcoded credentials in source"
fi

# Check .gitignore covers .env
if grep -q "\.env" .gitignore 2>/dev/null; then
  pass ".env files excluded from git"
else
  fail ".env not in .gitignore"
  ERRORS=$((ERRORS + 1))
fi

# Check for .dockerignore
if [[ -f .dockerignore ]]; then
  pass ".dockerignore present"
else
  warn ".dockerignore missing"
fi

# ==============================================================================
# PHASE 7: DEPLOYMENT SUMMARY
# ==============================================================================
step "PHASE 7: Deployment Summary"

echo ""
info "┌──────────────────────────────────────────────────┐"
info "│         GSBrain.dev — Production Ready           │"
info "├──────────────────────────────────────────────────┤"
info "│  Target:    coolify.guideitsol.in                │"
info "│  Branch:    $(git branch --show-current 2>/dev/null | head -c 30)            │"
info "│  Commit:    $(git rev-parse --short HEAD)                               │"
info "│  Node:      $(node --version 2>/dev/null | head -c 10)                          │"
info "│  Errors:    ${ERRORS}                                        │"
info "└──────────────────────────────────────────────────┘"
echo ""

if [[ "$ERRORS" -eq 0 ]]; then
  pass "All production checks passed!"
  echo ""
  info "To deploy on Coolify:"
  info "  1. Push this branch to GitHub"
  info "  2. Coolify auto-deploys from docker-compose.yml"
  info "  3. Configure domain: coolify.guideitsol.in"
  info "  4. Set environment variables in Coolify dashboard"
  info "  5. Health check: GET /api/health"
  echo ""
  exit 0
else
  fail "$ERRORS error(s) found. Fix before deploying."
  exit 1
fi
