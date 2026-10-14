#!/usr/bin/env bash
set -Eeuo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed." >&2; exit 1
fi
if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose plugin is not available." >&2; exit 1
fi

file=""
for candidate in compose.yaml compose.yml docker-compose.yml docker-compose.yaml; do
  if [[ -f "$candidate" ]]; then file="$candidate"; break; fi
done
if [[ -z "$file" ]]; then
  echo "No root Compose file found. No containers were started."
  exit 2
fi

echo "Validating $file without starting containers..."
docker compose -f "$file" config --quiet
echo "Compose configuration is syntactically valid. Images, health, security and runtime were not tested."
