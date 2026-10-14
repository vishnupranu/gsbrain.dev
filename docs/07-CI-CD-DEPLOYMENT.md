# CI/CD & Deployment Runbook

## Pull request gates
- Install from lockfile.
- Format/lint.
- Typecheck.
- Unit tests.
- API contract and integration tests.
- Database migration validation.
- Accessibility/component tests.
- Dependency and container scanning.
- Production build.
- Relevant end-to-end tests.

Required checks must block merge when failing.

## Release stages
Development -> integration -> staging -> approval -> production -> health verification.

Build immutable artifacts once and promote the same artifact. Do not rebuild a different artifact during production promotion.

## Production requirements
- Environment-specific secrets.
- Protected release branch and deployment environment.
- Explicit production approval.
- Database migration preflight and recovery plan.
- Health/readiness checks.
- Smoke tests for critical flows.
- Deployment audit record.
- Rollback procedure and previous known-good artifact.
- Backup and restore verification.
- Alerting and on-call ownership.

## Rollback caution
Application rollback does not automatically reverse database migrations. Use backward-compatible migrations and documented forward-fix or restore plans.

## Never
- Print secrets in logs.
- Deploy from an untrusted pull request.
- Publish packages with production credentials available to tests.
- Run destructive migrations without a reviewed recovery plan.
- Claim DNS/TLS or deployment succeeded without checking actual provider state.
