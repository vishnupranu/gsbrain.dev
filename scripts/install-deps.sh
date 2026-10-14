#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "Run inside a Git repository." >&2; exit 1; }
cd "$ROOT"

if [[ -f pnpm-lock.yaml ]]; then
  command -v pnpm >/dev/null 2>&1 || { echo "pnpm is required by pnpm-lock.yaml. Enable/install the repository-approved pnpm version first." >&2; exit 1; }
  echo "Installing Node dependencies from pnpm lockfile..."
  pnpm install --frozen-lockfile
elif [[ -f package-lock.json ]]; then
  command -v npm >/dev/null 2>&1 || { echo "npm is not installed." >&2; exit 1; }
  echo "Installing Node dependencies from package-lock.json..."
  npm ci
elif [[ -f yarn.lock ]]; then
  command -v yarn >/dev/null 2>&1 || { echo "Yarn is required by yarn.lock." >&2; exit 1; }
  echo "Installing Node dependencies from yarn.lock..."
  yarn install --immutable 2>/dev/null || yarn install --frozen-lockfile
elif [[ -f package.json ]]; then
  echo "ERROR: package.json exists but no recognized lockfile was found. Create and review a lockfile first." >&2
  exit 1
else
  echo "No root Node package manifest found; skipping Node dependency installation."
fi

if [[ -f pyproject.toml ]]; then
  echo "Python project detected. No Python package manager was selected automatically."
  echo "Use the repository's documented tool (uv, Poetry, pip) and its lockfile."
elif [[ -f requirements.txt ]]; then
  echo "requirements.txt found. Python dependencies were not installed automatically to avoid changing the active environment."
  echo "Use an isolated virtual environment and the documented Python version."
fi

echo "Dependency installation step complete. No migrations, deployments, or package publishing were run."
