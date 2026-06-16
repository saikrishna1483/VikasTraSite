import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navigation() {
  return (
    <header className="mb-8 rounded-3xl border border-slate-800 bg-slate-950/85 p-5 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-white">
            VikasTra
          </Link>
          <p className="text-sm text-slate-400">It Solutions.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav aria-label="Primary" className="flex flex-wrap gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
