'use client';

import { useEffect, useState } from 'react';

const THEME_KEY = 'theme-preference';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-700 dark:border-slate-300 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-300"
    >
      {theme === 'dark' ? 'Switch to Day' : 'Switch to Night'}
    </button>
  );
}
