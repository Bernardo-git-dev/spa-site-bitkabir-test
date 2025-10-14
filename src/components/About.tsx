"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Cuidado Personalizado",
      description: "Atendimentos únicos e adaptados às suas necessidades",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Bem-estar Integral",
      description: "Cuidamos do corpo, mente e emoções em harmonia",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
        </svg>
      ),
      title: "Produtos Naturais",
      description: "Utilizamos ingredientes naturais de alta qualidade",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Profissionais Qualificados",
      description: "Equipe experiente e apaixonada pelo bem-estar",
    },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-white relative"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Decorations */}
      <div
        className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "linear-gradient(135deg, #EFE4D8 0%, #D2BF9E 100%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: "linear-gradient(135deg, #F5F5F5 0%, #EFE4D8 100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Content Side */}
          <div
            className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {/* Section Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "#EFE4D8",
                color: "#897979",
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#D2BF9E" }}
              ></div>
              Nossa História
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight"
                style={{ color: "#897979" }}
              >
                Sobre{" "}
                <span className="italic" style={{ color: "#D2BF9E" }}>
                  Nós
                </span>
              </h2>
              <div
                className="w-24 h-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #D2BF9E, #EFE4D8)",
                }}
              ></div>
            </div>

            {/* Description */}
            <div className="space-y-6" style={{ color: "#897979" }}>
              <p className="text-lg leading-relaxed">
                Somos um espaço dedicado ao{" "}
                <strong style={{ color: "#897979" }}>bem-estar integral</strong>{" "}
                do corpo, da mente e das emoções. Nosso propósito é oferecer
                momentos de pausa na rotina, onde cada pessoa possa se
                reconectar consigo mesma, através do toque, da escuta, dos
                aromas e da tranquilidade.
              </p>
              <p className="leading-relaxed">
                Desde a nossa fundação, acreditamos que o autocuidado é um ato
                de amor próprio e por isso, reunimos uma equipe de profissionais
                qualificados, apaixonados pelo que fazem, comprometidos em
                oferecer atendimentos personalizados, seguros e acolhedores.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#EFE4D8",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 p-2 rounded-lg transition-colors"
                      style={{
                        backgroundColor: "#EFE4D8",
                        color: "#897979",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3
                        className="font-semibold mb-1"
                        style={{ color: "#897979" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#897979", opacity: 0.8 }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#servicos"
                className="btn-elegant inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <span>Conheça nossos serviços</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`relative ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            {/* Main Image */}
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-3xl blur-xl transition-all duration-500 opacity-20"
                style={{
                  background: "linear-gradient(135deg, #D2BF9E, #EFE4D8)",
                }}
              ></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-shadow duration-500">
                <Image
                  src="/5a54e08f268d058db741a3f0cace5a8e262b9cc6.jpg"
                  alt="Ambiente relaxante do nosso spa"
                  width={600}
                  height={600}
                  className="object-cover w-full h-[500px] sm:h-[600px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 backdrop-blur-sm rounded-2xl p-4 shadow-lg border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "#EFE4D8",
              }}
            >
              <div className="text-center">
                <div
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: "#897979" }}
                >
                  10+
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: "#897979", opacity: 0.8 }}
                >
                  Anos de Experiência
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 backdrop-blur-sm rounded-2xl p-4 shadow-lg border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "#EFE4D8",
              }}
            >
              <div className="text-center">
                <div
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: "#897979" }}
                >
                  100%
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: "#897979", opacity: 0.8 }}
                >
                  Satisfação
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
