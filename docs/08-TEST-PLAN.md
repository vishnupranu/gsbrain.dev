# Test Plan & Acceptance Criteria

## Test layers
- Unit: domain logic, token budgets, policy evaluation, state transitions.
- Contract: OpenAPI, SDK schemas and event payloads.
- Integration: database, queue, provider adapter, storage and preview service.
- End-to-end: sign in -> create project -> chat -> spec -> approve -> build -> preview -> modify -> test.
- Security: tenant isolation, authorization bypass, secrets, SSRF, path traversal and sandbox escape controls.
- Resilience: worker restart, provider timeout, queue retry, cancellation and partial failure.
- Accessibility: keyboard, focus, labels, contrast and reduced motion.
- Performance: API p95, large message histories, editor loading, queue saturation and preview startup.
- Recovery: backup restore, revision restore and deployment rollback.

## Minimum acceptance scenario
A real user creates a project from natural language, reviews a persisted specification, approves a plan, causes actual source files to be generated, builds and runs them in an isolated environment, opens the real preview, requests a change, observes a source diff, and verifies tests against the changed application.

## Evidence
For each test record ID, environment, commit, command, exit code, actual result, evidence location and known limitations. Untested requirements remain `NOT_VERIFIED`.

## No false positives
A page rendering is not proof of a working backend. A model response saying “done” is not proof of tool execution. A successful compile is not proof of authorization, isolation, runtime health or production readiness.
