# SDK Specification — npm & Python

## TypeScript package
Proposed package: `@gsbrain/sdk`.

Required capabilities: typed client, project/specification operations, chat streaming, build status, file/revision operations, test results, deployment operations, pagination, cancellation, retries, typed errors, request IDs and webhook signature verification.

Separate browser-safe operations from server-privileged operations. Never ship secret API keys in browser bundles.

## Python package
Proposed distribution: `gsbrain`.

Required capabilities: typed sync/async client, project and specification operations, chat/events, build/test status, authorized deployment operations, timeouts, retries, typed exceptions and environment-based configuration.

## Contract source
OpenAPI and shared event schemas are the source of truth. Generate types/clients where practical. Do not hand-maintain conflicting schemas in frontend, backend and SDKs.

## Release process
1. Validate API contract compatibility.
2. Build packages from a clean checkout.
3. Run unit and contract tests.
4. Build distributable artifacts.
5. Inspect package contents for secrets and unwanted files.
6. Publish only from a protected release workflow.
7. Use dedicated, short-lived publishing credentials where supported.
8. Verify the published version and provenance.
9. Publish changelog, examples and migration notes.

Never publish packages from untrusted pull requests. Define semantic versioning and a deprecation policy before the first public release.
