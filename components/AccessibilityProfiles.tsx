'use client';

import { useEffect, useState } from 'react';

const profiles = [
  {
    id: 'screen-reader',
    title: 'Screen Reader',
    description: 'Enable a screen-reader friendly experience with highlighted focus states and clear labels.',
    icon: '🔊',
  },
  {
    id: 'sign-language',
    title: 'Sign Language',
    description: 'Show sign-language support prompts and visual guidance for accessible interactions.',
    icon: '🤟',
  },
  {
    id: 'bigger-text',
    title: 'Bigger Text',
    description: 'Increase font sizes across the page for easier reading and better visibility.',
    icon: 'A+',
  },
  {
    id: 'highlight-links',
    title: 'Highlight Links',
    description: 'Draw attention to links and interactive elements with strong outlines.',
    icon: '🔗',
  },
  {
    id: 'hide-images',
    title: 'Hide Images',
    description: 'Hide decorative images and reduce visual clutter for screen-reader first use.',
    icon: '🖼️',
  },
  {
    id: 'text-spacing',
    title: 'Text Spacing',
    description: 'Add extra spacing between text lines and paragraphs for readability.',
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

export function AccessibilityProfiles() {
  const [activeProfile, setActiveProfile] = useState<string>('bigger-text');

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
    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-soft">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Accessibility Profiles</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Choose a profile for the experience you need.</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Select any profile to activate accessibility enhancements and highlight the matching feature set.
          </p>
        </div>
        <div className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-200">
          Active: <span className="font-semibold text-white">{activeProfile.replace('-', ' ')}</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            type="button"
            onClick={() => setActiveProfile(profile.id)}
            className={`group flex flex-col gap-3 rounded-3xl border px-5 py-6 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
              activeProfile === profile.id
                ? 'border-sky-400 bg-sky-500/10 text-white'
                : 'border-slate-800 bg-slate-900 text-slate-200 hover:border-slate-600 hover:bg-slate-900/90'
            }`}
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-sky-300 shadow-soft">
              {profile.icon}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{profile.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{profile.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
