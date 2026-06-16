'use client';

import { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    title: 'AI Services',
    description: 'Build intelligent workflows, automation, and data-driven solutions with advanced AI capabilities.',
    gradient: 'from-purple-600 to-blue-600',
    bgGradient: 'bg-gradient-to-br from-purple-500 via-blue-500 to-purple-700',
    details: 'Custom machine learning models, automated workflows, and intelligent analytics.',
    altText: 'AI Technology Visualization',
  },
  {
    id: 2,
    title: 'Microsoft Technologies',
    description: 'Deliver cloud, business applications, and Azure integration to support enterprise growth.',
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-700',
    details: 'Azure cloud services, Office 365 integration, and Microsoft Dynamics solutions.',
    altText: 'Microsoft Cloud Services',
  },
  {
    id: 3,
    title: 'BizTalk & WebMethods',
    description: 'Design and manage enterprise integration with BizTalk and SWAG WebMethods expertise.',
    gradient: 'from-green-600 to-emerald-600',
    bgGradient: 'bg-gradient-to-br from-green-500 via-emerald-500 to-green-700',
    details: 'API-led integration, message orchestration, and workflow automation.',
    altText: 'Integration Platform',
  },
  {
    id: 4,
    title: 'Enterprise Solutions',
    description: 'End-to-end enterprise solutions tailored to your business needs.',
    gradient: 'from-orange-600 to-red-600',
    bgGradient: 'bg-gradient-to-br from-orange-500 via-red-500 to-orange-700',
    details: 'Custom development, system integration, and digital transformation.',
    altText: 'Enterprise Business Solutions',
  },
  {
    id: 5,
    title: 'Security & Compliance',
    description: 'Secure infrastructure and compliance-ready implementations.',
    gradient: 'from-red-600 to-pink-600',
    bgGradient: 'bg-gradient-to-br from-red-500 via-pink-500 to-red-700',
    details: 'Data security, compliance frameworks, and audit-ready systems.',
    altText: 'Security & Compliance Framework',
  },
];

export function ServiceSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 10000); // Auto-advance every 10 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentService = services[currentSlide];

  return (
    <div className="space-y-8">
      {/* Main Slider */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-soft overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* 3D Image Section */}
          <div className="flex flex-col items-center justify-center perspective">
            <div className={`relative h-80 w-full rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl ${currentService.bgGradient}`}>
              {/* Gradient Background with Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
              </div>

              {/* 3D Text Effect */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-4 text-6xl font-bold opacity-90">{currentService.id}</div>
                  <p className="text-2xl font-bold">{currentService.altText}</p>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>

            {/* Quality Indicator & Auto-advance Progress */}
            <div className="mt-6 w-full space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>High Resolution 3D</span>
                <span>{currentSlide + 1} / {services.length}</span>
              </div>
              <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" style={{ animation: 'width 10s linear infinite' }}></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Featured Service</p>
              <h2 className="mt-3 text-3xl font-bold text-white">{currentService.title}</h2>
              <p className="mt-4 text-lg text-slate-300">{currentService.description}</p>
              <p className="mt-4 text-slate-400">{currentService.details}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={prevSlide}
                type="button"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-white transition hover:border-sky-400 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                ← Previous
              </button>
              <button
                onClick={nextSlide}
                type="button"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-white transition hover:border-sky-400 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            type="button"
            className={`h-3 rounded-full transition ${
              currentSlide === index
                ? 'w-8 bg-sky-400'
                : 'w-3 bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Services Grid */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft">
        <h3 className="text-2xl font-bold text-white">All Services</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => goToSlide(service.id - 1)}
              type="button"
              className={`rounded-3xl border overflow-hidden text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                currentSlide === service.id - 1
                  ? 'border-sky-400 bg-sky-500/10'
                  : 'border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              {/* 3D Image Thumbnail */}
              <div className={`relative h-32 w-full overflow-hidden ${service.bgGradient} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold opacity-80">{service.id}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 text-sm font-bold text-white">
                    {service.id}
                  </span>
                  <span className="text-xs bg-sky-500/20 text-sky-300 px-2 py-1 rounded-full">3D</span>
                </div>
                <h4 className="font-semibold text-white">{service.title}</h4>
                <p className="text-xs text-slate-400 mt-1">Premium 3D Imagery</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
