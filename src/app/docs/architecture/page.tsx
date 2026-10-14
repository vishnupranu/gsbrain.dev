import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Architecture</h1>
        <p className="text-[var(--muted)] mb-8">Two-plane architecture with strict separation of concerns.</p>
        <div className="space-y-6 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Control Plane</h2>
            <p>Owns identity integration, authorization, organizations, projects, conversations, specifications, orchestration metadata, usage, audit records and release approvals.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Execution Plane</h2>
            <p>Owns isolated project workspaces, generated-code processes, dependency installation, build/test execution, preview routing and worker cleanup.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Architecture Rules</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>One owner per data domain</li>
              <li>Versioned API contracts and typed event schemas</li>
              <li>Bounded retries, cancellation and correlation IDs</li>
              <li>Idempotency keys for retriable operations</li>
              <li>Secrets in dedicated store, never in source or logs</li>
              <li>Resource-level authorization on every operation</li>
              <li>Model output and generated code treated as untrusted</li>
              <li>Separate preview and production credentials</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
