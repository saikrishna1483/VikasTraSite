'use client';

import { useEffect, useState } from 'react';

const profiles = [
  {
    id: 'screen-reader',
    title: 'Screen Reader',
    icon: '🔊',
  },
  {
    id: 'sign-language',
    title: 'Sign Language',
    icon: '🤟',
  },
  {
    id: 'bigger-text',
    title: 'Bigger Text',
    icon: 'A+',
  },
  {
    id: 'highlight-links',
    title: 'Highlight Links',
    icon: '🔗',
  },
  {
    id: 'hide-images',
    title: 'Hide Images',
    icon: '🖼️',
  },
  {
    id: 'text-spacing',
    title: 'Text Spacing',
    icon: '↔️',
  },
];

const profileClasses: Record<string, string> = {
  'screen-reader': 'accessibility-screen-reader',
  'sign-language': 'accessibility-sign-language',
  'bigger-text': 'accessibility-bigger-text',
  'highlight-links': 'accessibility-highlight-links',
  'hide-images': 'accessibility-hide-images',
  'text-spacing': 'accessibility-text-spacing',
};

export function FloatingAccessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    Object.values(profileClasses).forEach((className) => root.classList.remove(className));

    if (activeProfile && profileClasses[activeProfile]) {
      root.classList.add(profileClasses[activeProfile]);
      root.dataset.accessibilityProfile = activeProfile;
    } else {
      root.dataset.accessibilityProfile = '';
    }
  }, [activeProfile]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-xl text-white shadow-lg transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        aria-label="Accessibility settings"
      >
        ♿
      </button>

      {/* Floating Panel */}
      {isOpen && (
        <div className="fixed right-6 bottom-24 z-40 w-80 rounded-3xl border border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur-xl">
          <div className="border-b border-slate-800 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Accessibility</h3>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="rounded-full p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-400">Select a profile to enhance your experience</p>
          </div>

          <div className="max-h-96 overflow-y-auto p-4 space-y-2">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                type="button"
                onClick={() => {
                  setActiveProfile(activeProfile === profile.id ? '' : profile.id);
                }}
                className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                  activeProfile === profile.id
                    ? 'border-sky-400 bg-sky-500/20 text-sky-100'
                    : 'border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-600 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{profile.icon}</span>
                  <span className="font-medium">{profile.title}</span>
                </div>
              </button>
            ))}
          </div>

          {activeProfile && (
            <div className="border-t border-slate-800 p-4">
              <button
                onClick={() => setActiveProfile('')}
                type="button"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
              >
                Clear all settings
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
