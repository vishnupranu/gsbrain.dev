# Architecture & Service Boundaries

## Planes
### Control plane
Owns identity integration, authorization, organizations, projects, conversations, specifications, orchestration metadata, usage, audit records and release approvals.

### Execution plane
Owns isolated project workspaces, generated-code processes, dependency installation, build/test execution, preview routing and worker cleanup.

The API/control-plane process must never execute untrusted generated source directly.

## Logical modules
- Web workspace
- API and authorization
- Project/specification service
- Conversation and event service
- Provider/model adapter
- Orchestrator and durable queue
- Permissioned tool registry
- Isolated execution workers
- Preview router
- Release/deployment adapter
- Metering, audit and observability

## Architecture rules
- One owner per data domain; avoid duplicate services with overlapping responsibilities.
- Use versioned API contracts and typed event schemas.
- Every long-running job has persistent state, bounded retries, cancellation semantics and correlation IDs.
- Use idempotency keys for retriable create/deploy operations.
- Store secrets in a dedicated secret manager or encrypted server-side store, never in prompts, source files or logs.
- Apply resource-level authorization on every API and worker operation.
- Treat model output, repository content, uploaded files and generated code as untrusted.
- Store source in version control and releases as immutable artifacts.
- Separate preview data/credentials from production data/credentials.

## Required architecture decisions
Record decisions for API framework, queue, provider SDK, agent orchestration, vector retrieval (if needed), storage, worker isolation, preview routing, observability and deployment. Include alternatives rejected and evidence.
