# GSBrain.dev Production Documentation & Safe Command Pack

**Purpose:** A repository-ready documentation baseline and conservative shell scripts for a real GSBrain.dev implementation.

**Important:** This pack is not the GSBrain.dev application, does not prove the application is production-ready, and does not install every service automatically. It gives engineers repeatable checks and implementation contracts without pretending unfinished work exists.

## Start safely

1. Extract this directory into the root of the existing GSBrain.dev repository, or review it separately first.
2. Read `docs/00-REPOSITORY-AUDIT.md`.
3. Run `bash scripts/preflight.sh`.
4. Review `docs/IMPLEMENTATION-PLAN.md` and map every requirement to a real ticket.
5. Run `bash scripts/verify.sh` only after confirming the repository's existing commands are safe.
6. Do not run production migrations, publish SDKs, delete data, or deploy without reviewing the corresponding runbook.

## Scripts

- `scripts/preflight.sh`: read-only prerequisite and repository checks.
- `scripts/install-deps.sh`: installs dependencies based on detected lockfiles; does not install OS packages or run database migrations.
- `scripts/verify.sh`: runs available checks only when the matching package scripts exist; reports missing checks.
- `scripts/validate-env.sh`: validates required environment variable names without printing secret values.
- `scripts/docker-compose-validate.sh`: validates Compose configuration if Docker Compose and a compose file exist.

Scripts are deliberately conservative. They do not guess project structure, create credentials, expose secrets, run migrations, deploy, or publish packages.

## Suggested architecture baseline

Use the stack already established by the repository where viable. If starting from an empty repository, make and record explicit decisions for:
- Web: Next.js + React + TypeScript.
- API: NestJS/TypeScript or another single documented backend framework.
- Data: PostgreSQL + migrations + tenant-aware authorization.
- AI: provider adapter supporting local Ollama and optional compatible remote APIs.
- Orchestration: durable state machine/queue.
- Execution: isolated workers for generated code; never run generated code in the API process.
- SDKs: TypeScript package for npm and Python package for PyPI, both backed by a versioned API contract.
- Delivery: CI quality gates, immutable artifacts, staging, approval, production health checks and rollback.

Do not add all suggested technologies blindly. Resolve overlaps and test compatibility first.

## Definition of real completion

A feature is complete only when its implementation exists, its acceptance criteria are tested, and evidence is recorded. A generated screen, passing typecheck, or successful container build alone does not prove a complete app-builder workflow.
