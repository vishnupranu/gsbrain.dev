# AI, LLM, Token, Tool & Security Specification

## Provider adapter
Support configurable local Ollama and optional compatible remote providers. Track per-model capabilities: context size, streaming, tool calls, structured outputs, image input and embedding support. Do not assume capabilities from a model name.

## Pipeline
1. Authenticate and authorize request.
2. Classify intent and project type.
3. Retrieve approved specifications and relevant files.
4. Build a bounded context with reserved output budget.
5. Select a model by capability and policy.
6. Produce a structured answer or tool request.
7. Validate tool arguments against a schema.
8. Check tool permission and required approval.
9. Execute in the correct isolated environment.
10. Persist result, exit status and redacted logs.
11. Update task state and evaluate acceptance criteria.
12. Run required tests and report verified status.

## Tool registry
Tools include read/list/search file, write/apply patch, build, test, read logs, inspect preview, manage dependencies, create revision, restore revision, provision database and request deployment. Every tool needs a schema, authorization rule, timeout, resource budget, audit record and output-redaction policy.

Do not expose unrestricted host shell access or the host Docker socket to generated projects.

## Token and usage accounting
Track input/output tokens, cached tokens when available, embeddings, tool calls, elapsed time, CPU/memory, build minutes and storage. Label estimates as estimates. Enforce per-user and per-organization quotas. Reconcile estimates with provider-reported usage.

## Memory and retrieval
Separate approved project facts, design decisions, requirements, implementation state and user-scoped preferences. Filter all retrieval by project permissions. Do not let repository content or retrieved documents override trusted system policy.

## Repair loop
Capture real exit codes and diagnostics, classify failures, propose a minimal patch, validate it, rerun checks and stop at bounded limits. Never remove tests, weaken security or alter acceptance criteria merely to get a green build.

## Threat controls
Prompt injection, SSRF, path traversal, malicious dependencies, secret leakage, cross-tenant access, resource exhaustion, unsafe deserialization, privilege escalation and unapproved deployment must be explicitly tested.
