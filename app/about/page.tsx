export default function About() {
  return (
    <section className="space-y-10 py-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">About us</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">We craft responsive digital experiences.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Built with semantic markup, modern CSS utilities, and a mobile-first approach. This site is designed to scale across new sections and maintain a clear structure.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
          <h2 className="text-2xl font-semibold text-white">Our approach</h2>
          <p className="mt-4 text-slate-400">We combine accessibility, performance, and modern design principles to deliver a website that feels polished on desktop and effortless on mobile.</p>
        </article>
        <article className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
          <h2 className="text-2xl font-semibold text-white">Why it works</h2>
          <p className="mt-4 text-slate-400">Using reusable components and consistent spacing helps keep the site maintainable while supporting future growth and browser compatibility.</p>
        </article>
      </div>
    </section>
  );
}
