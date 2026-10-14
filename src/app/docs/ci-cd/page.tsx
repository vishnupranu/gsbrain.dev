import Link from 'next/link';

export default function CICDPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">CI/CD & Deployment</h1>
        <p className="text-[var(--muted)] mb-8">Pull request gates, release stages and production requirements.</p>
        <div className="space-y-6 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Pull Request Gates</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Install from lockfile</li>
              <li>Format/lint and typecheck</li>
              <li>Unit and integration tests</li>
              <li>Database migration validation</li>
              <li>Accessibility/component tests</li>
              <li>Dependency and container scanning</li>
              <li>Production build verification</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Release Stages</h2>
            <p>Development → Integration → Staging → Approval → Production → Health Verification</p>
            <p className="mt-2">Build immutable artifacts once and promote the same artifact throughout all stages.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Production Requirements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Environment-specific secrets</li>
              <li>Protected release branch and deployment environment</li>
              <li>Explicit production approval</li>
              <li>Health/readiness checks and smoke tests</li>
              <li>Rollback procedure with previous known-good artifact</li>
              <li>Alerting and on-call ownership</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
