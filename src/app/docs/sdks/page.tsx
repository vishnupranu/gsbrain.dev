import Link from 'next/link';

export default function SDKsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">SDK Specification</h1>
        <p className="text-[var(--muted)] mb-8">TypeScript and Python SDKs with typed clients.</p>
        <div className="space-y-6 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">TypeScript: <code className="text-brand-400">@gsbrain/sdk</code></h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Typed client with project/spec operations</li>
              <li>Chat streaming and persistent state</li>
              <li>Build status, file/revision operations</li>
              <li>Pagination, cancellation, retries, typed errors</li>
              <li>Webhook signature verification</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Python: <code className="text-brand-400">gsbrain</code></h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Typed sync/async client</li>
              <li>Project and specification operations</li>
              <li>Chat/events, build/test status</li>
              <li>Authorized deployment operations</li>
              <li>Timeouts, retries, typed exceptions</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
