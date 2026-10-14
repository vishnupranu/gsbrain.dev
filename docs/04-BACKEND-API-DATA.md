# Backend, API & Data Specification

## API standards
- Version prefix: `/api/v1`.
- Validate request and response schemas.
- Use stable error codes, request IDs and structured logs.
- Paginate unbounded collections.
- Use transactions for related state changes.
- Use optimistic concurrency/version checks for conflicting edits.
- Use idempotency keys for retried build, release and deployment requests.
- Authorize every protected resource on the server.

## Core entities
Users, organizations, memberships, projects, project memberships, conversations, messages, attachments, specification versions, requirements, plans, tasks, agent runs, tool executions, workspace revisions, environments, builds, test runs, secret references, releases, deployments, audit events and usage events.

## Suggested API surface
- `POST /api/v1/projects`
- `GET /api/v1/projects`
- `GET /api/v1/projects/{id}`
- `PATCH /api/v1/projects/{id}`
- `POST /api/v1/projects/{id}/conversations`
- `GET /api/v1/conversations/{id}/messages`
- `POST /api/v1/conversations/{id}/messages`
- `GET /api/v1/runs/{id}/events`
- `POST /api/v1/projects/{id}/plans`
- `POST /api/v1/plans/{id}/approve`
- `GET /api/v1/projects/{id}/specifications`
- `POST /api/v1/projects/{id}/builds`
- `GET /api/v1/builds/{id}`
- `POST /api/v1/projects/{id}/tests`
- `POST /api/v1/projects/{id}/releases`
- `POST /api/v1/releases/{id}/deployments`
- `POST /api/v1/deployments/{id}/rollback`

These are proposed contracts; implement and publish an OpenAPI document before generating SDKs.

## Authorization
- Deny by default.
- Check identity, organization membership, project membership, resource ownership and action permissions.
- Never trust a client-provided tenant ID or role.
- Test cross-tenant read/write denial.
- Apply authorization to background jobs and preview routes, not only HTTP handlers.

## Database
Use foreign keys, unique constraints, appropriate indexes, explicit deletion policies and migrations. Enforce unique membership pairs and revision numbers. Store timestamps in UTC. Consider row-level security as an additional control, not a replacement for application authorization.

## Secrets
Never log secret values. Store references and inject credentials only into authorized execution environments. Separate preview and production credentials.
