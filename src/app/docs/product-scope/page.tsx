import Link from 'next/link';

interface DocPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function DocPage({ title, description, children }: DocPageProps) {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors mb-8"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-[var(--muted)] mb-8">{description}</p>
        <div className="prose prose-invert max-w-none">{children}</div>
      </div>
    </main>
  );
}

export default function ProductScopePage() {
  return (
    <DocPage
      title="Product Scope"
      description="GSBrain.dev is a multi-tenant AI software-building platform."
    >
      <div className="space-y-4 text-[var(--muted)]">
        <p>
          GSBrain.dev turns natural-language requests into structured requirements, an approved plan,
          real source changes, isolated builds, a live preview, verified tests and optionally an
          approved deployment.
        </p>
        <h2 className="text-xl font-semibold text-white mt-8">Core Workflow</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>User authenticates and creates a project.</li>
          <li>User describes a desired application.</li>
          <li>System extracts requirements and asks clarifying questions.</li>
          <li>System produces an editable, versioned specification and plan.</li>
          <li>User approves the plan.</li>
          <li>Orchestrator schedules bounded tasks and invokes permissioned tools.</li>
          <li>Workers modify source in an isolated workspace.</li>
          <li>Build and tests execute; real logs and exit codes persist.</li>
          <li>A preview points to the actual running process.</li>
          <li>User requests a change; system produces a diff and updates preview.</li>
          <li>A release candidate is created from an immutable revision.</li>
          <li>An authorized person explicitly approves production deployment.</li>
        </ol>
      </div>
    </DocPage>
  );
}
