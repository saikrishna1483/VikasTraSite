import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '../components/Navigation';
import { FloatingAccessibility } from '../components/FloatingAccessibility';

export const metadata: Metadata = {
  title: 'Modern Responsive Website',
  description: 'A modern responsive website built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <Navigation />
          <main className="flex-1 pb-10">{children}</main>
          <footer className="mt-6 border-t border-slate-200/80 dark:border-slate-700 pt-6 text-sm text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Modern Responsive Website. Built for clean UX.</p>
          </footer>
        </div>
        <FloatingAccessibility />
      </body>
    </html>
  );
}
