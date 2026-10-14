#!/usr/bin/env bash
set -Eeuo pipefail

say() { printf '%s\n' "$*"; }
warn() { printf 'WARN: %s\n' "$*" >&2; }
fail() { printf 'ERROR: %s\n' "$*" >&2; exit 1; }

ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || fail "Run inside a Git repository."
cd "$ROOT"

say "GSBrain.dev read-only preflight"
say "Repository: $ROOT"
say "Branch: $(git branch --show-current 2>/dev/null || echo unknown)"
say "Commit: $(git rev-parse --short HEAD)"
if [[ -n "$(git status --porcelain)" ]]; then
  warn "Working tree is not clean. Review changes before any automated modifications."
else
  say "Working tree: clean"
fi

for cmd in git bash; do
  command -v "$cmd" >/dev/null 2>&1 || fail "Missing required command: $cmd"
done

for cmd in node npm pnpm yarn python3 docker; do
  if command -v "$cmd" >/dev/null 2>&1; then
    case "$cmd" in
      node) say "node: $(node --version)" ;;
      npm) say "npm: $(npm --version)" ;;
      pnpm) say "pnpm: $(pnpm --version)" ;;
      yarn) say "yarn: $(yarn --version)" ;;
      python3) say "python: $(python3 --version)" ;;
      docker) say "docker: $(docker --version)" ;;
    esac
  else
    say "$cmd: not installed (may be optional for this repository)"
  fi
done

say ""
say "Project manifests found:"
find . -path '*/node_modules' -prune -o -path '*/.git' -prune -o -type f \
  \( -name package.json -o -name pnpm-lock.yaml -o -name package-lock.json \
     -o -name yarn.lock -o -name pyproject.toml -o -name requirements.txt \
     -o -name compose.yaml -o -name docker-compose.yml -o -name Dockerfile \) \
  -print | sort | head -200

say ""
say "Preflight complete. This script made no changes."
