import Link from 'next/link';

export default function TestPlanPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">Test Plan</h1>
        <p className="text-[var(--muted)] mb-8">Test layers and acceptance criteria for production readiness.</p>
        <div className="space-y-6 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Test Layers</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Unit:</strong> domain logic, token budgets, policy evaluation, state transitions</li>
              <li><strong>Contract:</strong> OpenAPI, SDK schemas and event payloads</li>
              <li><strong>Integration:</strong> database, queue, provider adapter, storage and preview</li>
              <li><strong>E2E:</strong> sign in → create project → chat → spec → approve → build → preview → modify → test</li>
              <li><strong>Security:</strong> tenant isolation, authorization bypass, secrets, SSRF, path traversal</li>
              <li><strong>Resilience:</strong> worker restart, provider timeout, queue retry, cancellation</li>
              <li><strong>Accessibility:</strong> keyboard, focus, labels, contrast, reduced motion</li>
              <li><strong>Performance:</strong> API p95, large histories, editor loading, queue saturation</li>
              <li><strong>Recovery:</strong> backup restore, revision restore, deployment rollback</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
