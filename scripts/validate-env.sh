#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "Run inside a Git repository." >&2; exit 1; }
cd "$ROOT"

ENV_FILE="${1:-.env}"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "No env file found at '$ENV_FILE'. Nothing was read or changed."
  echo "Use config/.env.example as a names-only template; create secrets via your secret manager."
  exit 2
fi

echo "Checking required variable names in $ENV_FILE without printing values."
# These are baseline names; tailor them to actual implemented services.
required=(DATABASE_URL SESSION_SECRET)
missing=0
for name in "${required[@]}"; do
  if grep -Eq "^[[:space:]]*${name}=" "$ENV_FILE"; then
    # Confirm value is not empty without printing it.
    if grep -Eq "^[[:space:]]*${name}=[[:space:]]*['\"]?['\"]?[[:space:]]*(#.*)?$" "$ENV_FILE"; then
      echo "EMPTY: $name"
      missing=1
    else
      echo "PRESENT: $name (value hidden)"
    fi
  else
    echo "MISSING: $name"
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  echo "Environment validation failed. Configure missing values securely."
  exit 1
fi
echo "Required variable names are present. Connectivity and validity were not tested."
