# Dependency-Ordered Implementation Plan

## P0 — Audit and freeze
- Audit repository, branches, working tree and deployment target.
- Inventory routes, design tokens, APIs, schemas, providers and tests.
- Record architecture decisions and risks.
- Define requirement-to-test traceability.

## P1 — Foundation
- Package manager and lockfile.
- Environment validation and secret policy.
- CI quality gates.
- Database migrations and identity integration.
- Design system and workspace shell.

## P2 — Core product
- Projects and conversations.
- Chat streaming and persistent state.
- Versioned specifications and plan approval.
- Task queue and progress events.

## P3 — Execution
- Provider adapter and capability registry.
- Context retrieval and token budgets.
- Tool registry and permissions.
- Git workspace, isolated worker, build and preview.
- Tests, repair and recovery.

## P4 — Developer ecosystem
- OpenAPI contract.
- TypeScript SDK.
- Python SDK.
- Examples, package tests and protected publishing workflows.

## P5 — Production controls
- Admin and audit.
- Usage quotas and metering.
- Release artifacts and deployment approvals.
- Monitoring, backup, restore and rollback.

## P6 — Release acceptance
- End-to-end tests.
- Security and tenant-isolation tests.
- Performance/load tests.
- Staging smoke tests.
- Production readiness review and signed-off evidence.

Every task must include: ID, owner, dependencies, priority, scope, files/services affected, acceptance criteria, tests, rollback plan and status. Do not mark a task done based only on generated code.
