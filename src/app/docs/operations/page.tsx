import Link from 'next/link';

export default function OperationsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">Operations & Recovery</h1>
        <p className="text-[var(--muted)] mb-8">Monitoring, backup/restore, incident response and resource lifecycle.</p>
        <div className="space-y-6 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Metrics</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>API latency/error rate</li>
              <li>Model latency/timeouts and usage</li>
              <li>Queue depth and job age</li>
              <li>Build duration/failure rate</li>
              <li>Preview startup and active environments</li>
              <li>Deployment success and rollback rate</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Incident Response</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Detect and classify</li>
              <li>Contain affected jobs/credentials</li>
              <li>Preserve evidence without exposing secrets</li>
              <li>Restore safe service or roll back</li>
              <li>Verify critical journeys</li>
              <li>Communicate impact</li>
              <li>Record root cause and preventive actions</li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
