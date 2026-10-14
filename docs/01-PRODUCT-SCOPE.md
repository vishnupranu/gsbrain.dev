# Product Scope — GSBrain.dev

## Product definition
GSBrain.dev is a multi-tenant AI software-building platform that turns natural-language requests into structured requirements, an approved plan, real source changes, isolated builds, a live preview, verified tests and optionally an approved deployment.

## Core workflow
1. User authenticates and creates a project.
2. User describes a desired application.
3. System extracts requirements and asks essential clarifying questions.
4. System produces an editable, versioned specification and dependency-aware plan.
5. User approves the plan.
6. Orchestrator schedules bounded tasks and invokes permissioned tools.
7. Workers modify source in an isolated workspace.
8. Build and tests execute; real logs and exit codes are persisted.
9. A preview points to the actual running process.
10. User requests a change; the system produces a diff, tests it and updates the preview.
11. A release candidate is created from an immutable revision.
12. An authorized person explicitly approves production deployment.

## Out of scope until separately approved
- Automatic production deployment without confirmation.
- Arbitrary shell access on the host.
- Unrestricted internet access from generated code.
- Claims that every app type or framework is supported.
- Automatic destructive database migration.
- Package publishing from pull-request workflows.
- Fake usage metrics, fake agent activity or simulated build success.

## Product requirements
Use the 100 functional requirements previously defined in the GSBrain.dev specification as the initial baseline. Assign each a stable ID, implementation owner, priority, acceptance test and status. Mark unimplemented requirements as `NOT_IMPLEMENTED`, not complete.
