import { ServiceSlider } from '../../components/ServiceSlider';

export default function Services() {
  return (
    <section className="space-y-10 py-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Services</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">VikasTra technology services and partner solutions.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          AI Services, Microsoft integration, BizTalk orchestration, SWAG WebMethods workflows, and trusted technology partners to accelerate your digital transformation.
        </p>
      </div>
      
      <ServiceSlider />
      
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Technology Partners</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            'Microsoft Azure',
            'BizTalk Server',
            'SWAG WebMethods',
            'AI Platform Integrations',
            'Enterprise API Management',
          ].map((partner) => (
            <div key={partner} className="rounded-3xl bg-slate-950 p-6 ring-1 ring-slate-800">
              <h3 className="text-xl font-semibold text-white">{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
