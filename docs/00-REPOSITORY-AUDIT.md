# Repository Audit — Mandatory Before Changes

## Objective
Establish facts about the existing repository before any coding agent or engineer modifies it.

## Capture
- Repository URL, branch, commit SHA, working-tree status.
- Runtime versions and package manager.
- Apps, packages, services, entry points and deployment targets.
- Existing design tokens, component libraries and route inventory.
- Existing identity provider, session model and authorization enforcement.
- Database schema, migrations, backup process and tenant boundaries.
- AI providers, model capabilities, prompt storage and tool execution paths.
- Worker isolation, preview routing and resource cleanup.
- CI/CD workflows, deployment secrets and rollback method.
- Tests, known failures, TODOs, placeholders and mocked integrations.

## Required commands
Run from the repository root and retain outputs in a private engineering record:
```bash
git status --short
git branch --show-current
git rev-parse HEAD
find . -maxdepth 3 -type f \
  \( -name 'package.json' -o -name 'pnpm-lock.yaml' -o -name 'package-lock.json' \
  -o -name 'yarn.lock' -o -name 'pyproject.toml' -o -name 'Dockerfile' \
  -o -name 'compose.yaml' -o -name 'docker-compose.yml' \) -print
```

## Stop conditions
Do not proceed with broad refactoring if:
- the working tree contains uncommitted user work that has not been reviewed;
- the deployment target or current framework is unknown;
- credentials are present in source control;
- production data or infrastructure could be changed by the proposed command;
- the coding agent cannot explain the current architecture and planned file changes.

## Audit output
Create `docs/REPOSITORY-AUDIT-RESULT.md` with facts, evidence, risks, unknowns and the next small milestone. Do not claim checks passed unless they were run.
