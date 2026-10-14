import Link from 'next/link';

export default function ApiDataPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">Backend, API & Data</h1>
        <p className="text-[var(--muted)] mb-8">API standards and data model specification.</p>
        <div className="space-y-6 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">API Standards</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Version prefix: <code className="text-brand-400">/api/v1</code></li>
              <li>Validate request and response schemas</li>
              <li>Stable error codes, request IDs and structured logs</li>
              <li>Paginate unbounded collections</li>
              <li>Optimistic concurrency for conflicting edits</li>
              <li>Idempotency keys for retried operations</li>
              <li>Authorize every protected resource</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Core Entities</h2>
            <p>Users, organizations, memberships, projects, conversations, messages, attachments, specification versions, requirements, plans, tasks, agent runs, tool executions, workspace revisions, environments, builds, test runs, secret references, releases, deployments, audit events and usage events.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
