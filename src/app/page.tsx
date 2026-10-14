export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GS</span>
            </div>
            <span className="font-bold text-lg tracking-tight">GSBrain.dev</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Live
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6">
              <span>🚀</span> Multi-Tenant AI Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Turn ideas into
              <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent"> production software</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-8 max-w-2xl">
              GSBrain.dev transforms natural-language requests into structured requirements,
              approved plans, real source changes, isolated builds, live previews, verified tests,
              and production deployments.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#platform"
                className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors"
              >
                Explore Platform
              </a>
              <a
                href="#docs"
                className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Platform Capabilities</h2>
          <p className="text-[var(--muted)] mb-12 max-w-2xl">
            A complete AI-powered software development lifecycle, from requirements to deployment.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💬',
                title: 'Natural Language Input',
                desc: 'Describe your application in plain English. GSBrain extracts structured requirements and asks clarifying questions.',
              },
              {
                icon: '📋',
                title: 'Versioned Specifications',
                desc: 'Every change is tracked. Review, edit, and approve specifications before any code is generated.',
              },
              {
                icon: '🔒',
                title: 'Isolated Workspaces',
                desc: 'Each project builds in a sandboxed environment with full resource isolation and security boundaries.',
              },
              {
                icon: '🧪',
                title: 'Automated Testing',
                desc: 'Build and tests execute automatically. Real logs and exit codes persist for full transparency.',
              },
              {
                icon: '👁️',
                title: 'Live Preview',
                desc: 'Every change generates a real, running preview. Request modifications and watch them appear instantly.',
              },
              {
                icon: '🚀',
                title: 'Production Deployment',
                desc: 'Approved releases deploy to production with immutable artifacts, rollback, and health verification.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/10 bg-[var(--surface)] hover:border-brand-500/30 transition-colors"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Architecture</h2>
          <p className="text-[var(--muted)] mb-12 max-w-2xl">
            Two-plane architecture separating control logic from execution for maximum security and scalability.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-brand-950/50 to-transparent">
              <h3 className="text-xl font-bold mb-4 text-brand-400">Control Plane</h3>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Identity & authorization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Organizations, projects & conversations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Specifications & orchestration metadata
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Usage metering & audit records
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Release approvals
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-brand-950/50 to-transparent">
              <h3 className="text-xl font-bold mb-4 text-brand-400">Execution Plane</h3>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Isolated project workspaces
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Generated-code processes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Build & test execution
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Preview routing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  Worker lifecycle management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
          <p className="text-[var(--muted)] mb-12 max-w-2xl">
            Phased delivery from foundation to production acceptance.
          </p>
          <div className="space-y-4">
            {[
              { phase: 'P0', title: 'Audit & Freeze', status: 'In Progress', color: 'yellow' },
              { phase: 'P1', title: 'Foundation — Packages, CI, DB, Design System', status: 'Planned', color: 'blue' },
              { phase: 'P2', title: 'Core Product — Projects, Chat, Specs, Plans', status: 'Planned', color: 'gray' },
              { phase: 'P3', title: 'Execution — Providers, Tools, Workers, Preview', status: 'Planned', color: 'gray' },
              { phase: 'P4', title: 'Developer Ecosystem — SDKs, OpenAPI, Examples', status: 'Planned', color: 'gray' },
              { phase: 'P5', title: 'Production Controls — Admin, Metering, Releases', status: 'Planned', color: 'gray' },
              { phase: 'P6', title: 'Release Acceptance — E2E, Security, Performance', status: 'Planned', color: 'gray' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-[var(--surface)]"
              >
                <span className="font-mono text-sm font-bold text-brand-400 w-8">{item.phase}</span>
                <span className="flex-1 font-medium">{item.title}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    item.color === 'yellow'
                      ? 'bg-yellow-500/10 text-yellow-400'
                      : item.color === 'blue'
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-gray-500/10 text-gray-400'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="docs" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">API & Documentation</h2>
          <p className="text-[var(--muted)] mb-8 max-w-2xl">
            Versioned REST API with typed SDKs for TypeScript and Python.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Product Scope', href: '/docs/product-scope' },
              { title: 'Architecture', href: '/docs/architecture' },
              { title: 'API Spec', href: '/docs/api-data' },
              { title: 'AI & Security', href: '/docs/ai-security' },
              { title: 'Test Plan', href: '/docs/test-plan' },
              { title: 'SDK Specs', href: '/docs/sdks' },
              { title: 'CI/CD', href: '/docs/ci-cd' },
              { title: 'Operations', href: '/docs/operations' },
            ].map((doc, i) => (
              <a
                key={i}
                href={doc.href}
                className="p-4 rounded-lg border border-white/10 hover:border-brand-500/30 bg-[var(--surface)] transition-colors group"
              >
                <div className="font-medium text-sm group-hover:text-brand-400 transition-colors">
                  {doc.title}
                </div>
                <div className="text-xs text-[var(--muted)] mt-1">View document →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">GS</span>
            </div>
            <span className="text-sm text-[var(--muted)]">
              © 2024 GSBrain.dev — AI-Powered Software Platform
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
            <span>Multi-Tenant</span>
            <span>•</span>
            <span>Isolated Execution</span>
            <span>•</span>
            <span>Production Ready</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
