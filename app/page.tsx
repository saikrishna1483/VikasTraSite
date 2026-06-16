import Link from 'next/link';

export default function Home() {
  return (
    <section className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 ring-1 ring-slate-700">
          <span className="font-semibold text-sky-300">It Solutions</span>
          <span>for enterprise growth</span>
        </div>
        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            VikasTra delivers AI services and enterprise integration expertise.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 sm:text-xl">
            Trusted technology services for Microsoft, BizTalk, SWAG WebMethods, and strategic technology partners across every stage of implementation.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
            Contact Us
          </Link>
          <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-900 dark:text-slate-200 hover:border-slate-500 hover:text-white">
            See services
          </a>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">What we do</p>
            <h2 className="mt-3 text-2xl font-semibold text-white dark:text-white">AI, integration, and technology partnership services</h2>
            <p className="mt-4 text-slate-400">VikasTra specializes in AI Services, Microsoft and BizTalk integrations, SWAG WebMethods workflows, and partner-led digital transformation.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-5 ring-1 ring-slate-800">
              <h3 className="text-lg font-semibold text-white">AI Services</h3>
              <p className="mt-2 text-slate-400">From automation to intelligent analytics, AI drives smarter business outcomes.</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-5 ring-1 ring-slate-800">
              <h3 className="text-lg font-semibold text-white">Microsoft & BizTalk</h3>
              <p className="mt-2 text-slate-400">Enterprise integration and cloud delivery using Microsoft platforms and BizTalk solutions.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 ring-1 ring-slate-800">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { title: 'AI Services', description: 'Custom models, automation, and AI strategy for business impact.' },
            { title: 'Microsoft Technologies', description: 'Cloud, business apps, and integration solutions tailored to enterprise needs.' },
            { title: 'SWAG WebMethods', description: 'Connected application workflows and API-led integration with WebMethods expertise.' },
          ].map((card) => (
            <article key={card.title} className="rounded-3xl bg-slate-900 p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-slate-400">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
