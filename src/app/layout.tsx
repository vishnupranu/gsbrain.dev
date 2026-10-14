import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GSBrain.dev — AI-Powered Software Platform',
  description:
    'Multi-tenant AI software-building platform that turns natural language into production applications.',
  keywords: ['AI', 'software platform', 'code generation', 'multi-tenant', 'GSBrain'],
  openGraph: {
    title: 'GSBrain.dev',
    description: 'AI-Powered Software Building Platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
