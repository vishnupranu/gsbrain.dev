#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "Run inside a Git repository." >&2; exit 1; }
cd "$ROOT"

failed=0
run_check() {
  local label="$1"; shift
  echo
  echo "==> $label"
  if "$@"; then
    echo "PASS: $label"
  else
    echo "FAIL: $label" >&2
    failed=1
  fi
}

if [[ -f package.json ]]; then
  if command -v npm >/dev/null 2>&1; then
    for script in lint typecheck test build; do
      if node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts['$script'] ? 0 : 1)"; then
        run_check "npm run $script" npm run "$script"
      else
        echo "NOT RUN: package.json has no '$script' script."
      fi
    done
  else
    echo "Node manifest found, but npm is unavailable." >&2
    failed=1
  fi
else
  echo "No root package.json. Adapt this script to the repository's actual workspace."
fi

if command -v docker >/dev/null 2>&1 && docker compose version >/dev/null 2>&1; then
  if [[ -f compose.yaml ]]; then
    run_check "Docker Compose config" docker compose -f compose.yaml config --quiet
  elif [[ -f docker-compose.yml ]]; then
    run_check "Docker Compose config" docker compose -f docker-compose.yml config --quiet
  else
    echo "NOT RUN: no root compose.yaml or docker-compose.yml."
  fi
else
  echo "NOT RUN: Docker Compose unavailable."
fi

if [[ "$failed" -ne 0 ]]; then
  echo
  echo "One or more available checks failed. Do not deploy."
  exit 1
fi

echo
echo "Available checks completed. This is not proof of production readiness."
