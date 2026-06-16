'use client';

import { FormEvent, useState } from 'react';

interface ContactFormState {
  name: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>({ name: '', message: '' });
  const [status, setStatus] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Submitting...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus('Message submitted successfully.');
      setForm({ name: '', message: '' });
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="space-y-10 py-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Contact Us</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Send us a message.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Use the form below to share your name and message. Submissions are saved locally in a JSON file for review.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Submit
            </button>
            <p className="text-sm text-slate-400">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
