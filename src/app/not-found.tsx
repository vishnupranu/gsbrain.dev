import { notFound } from 'next/navigation';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-400 mb-4">404</h1>
        <p className="text-xl text-[var(--muted)] mb-8">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
