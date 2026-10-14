import Link from 'next/link';

export default function AISecurityPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">AI, LLM & Security</h1>
        <p className="text-[var(--muted)] mb-8">Provider adapter, pipeline, tool registry and threat controls.</p>
        <div className="space-y-6 text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Pipeline</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Authenticate and authorize request</li>
              <li>Classify intent and project type</li>
              <li>Retrieve approved specifications and relevant files</li>
              <li>Build bounded context with reserved output budget</li>
              <li>Select model by capability and policy</li>
              <li>Produce structured answer or tool request</li>
              <li>Validate tool arguments against schema</li>
              <li>Check tool permission and required approval</li>
              <li>Execute in correct isolated environment</li>
              <li>Persist result, exit status and redacted logs</li>
              <li>Update task state and evaluate acceptance criteria</li>
              <li>Run required tests and report verified status</li>
            </ol>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Threat Controls</h2>
            <p>Prompt injection, SSRF, path traversal, malicious dependencies, secret leakage, cross-tenant access, resource exhaustion, unsafe deserialization, privilege escalation and unapproved deployment — all must be explicitly tested.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
