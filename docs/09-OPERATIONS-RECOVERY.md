# Operations, Monitoring & Recovery

## Metrics
API latency/error rate; model latency/timeouts and usage; queue depth and job age; build duration/failure rate; preview startup and active environments; deployment success and rollback; resource saturation; authorization denials and quota rejections.

## Logs and traces
Use structured logs with correlation IDs across request, conversation, agent run, tool execution, build and deployment. Redact prompts or source where they may contain personal data or secrets. Apply access control and retention limits.

## Alerts
Define thresholds, severity, owner, runbook and escalation path. Alerts must be actionable, not merely noisy.

## Backup/restore
Document backup frequency, retention, encryption, restore owner, RPO and RTO for platform metadata, source workspaces, object assets and configured application data. Test restore regularly and record results.

## Incident response
1. Detect and classify.
2. Contain affected jobs/credentials.
3. Preserve relevant evidence without exposing secrets.
4. Restore safe service or roll back.
5. Verify critical journeys.
6. Communicate impact.
7. Record root cause and preventive actions.

## Resource lifecycle
Enforce quotas and expiry for preview environments. Stop runaway jobs. Clean ephemeral resources only after confirming persistent user data is outside the cleanup target.
