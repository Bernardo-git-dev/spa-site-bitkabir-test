"use client";
import { useState, useEffect, useRef } from "react";

type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  benefits: string[];
  highlight?: boolean;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Básico",
    price: "38.000 Kz",
    period: "/mês",
    description:
      "Perfeito para quem está começando sua jornada de autocuidado.",
    benefits: [
      "1 sessão de massagem relaxante",
      "Limpeza de pele básica",
      "Acesso ao banho de vapor (45min)",
      "Ambiente climatizado",
      "Consulta inicial gratuita",
    ],
  },
  {
    name: "Premium",
    price: "130.000 Kz",
    originalPrice: "160.000 Kz",
    period: "/mês",
    description: "A experiência completa de bem-estar com atendimento VIP.",
    highlight: true,
    popular: true,
    benefits: [
      "Sessões ilimitadas de massagem",
      "2 tratamentos faciais personalizados",
      "Drenagem linfática completa",
      "Acesso total à sauna e vapor",
      "Atendimento prioritário",
      "Produtos premium inclusos",
      "Acompanhamento personalizado",
    ],
  },
  {
    name: "Profissional",
    price: "60.000 Kz",
    period: "/mês",
    description: "O equilíbrio ideal entre qualidade e acessibilidade.",
    benefits: [
      "2 sessões de massagem",
      "Tratamento facial mensal",
      "Drenagem linfática",
      "Acesso livre ao vapor",
      "Esfoliação corporal",
      "Kit de produtos básicos",
    ],
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function Pricing() {
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

  return (
    <section
      id="planos"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative"
      style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}
    >
      {/* Subtle Background Decoration */}
      <div
        className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: "linear-gradient(135deg, #EFE4D8 0%, #D2BF9E 100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "#EFE4D8",
              color: "#897979",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#D2BF9E" }}
            ></div>
            Nossos Planos
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight mb-6"
            style={{ color: "#897979" }}
          >
            Escolha seu{" "}
            <span className="italic" style={{ color: "#D2BF9E" }}>
              plano ideal
            </span>
          </h2>

          <div
            className="w-24 h-1 rounded-full mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, #D2BF9E, #EFE4D8)",
            }}
          ></div>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "#897979", opacity: 0.8 }}
          >
            Planos pensados para diferentes estilos de vida, com serviços que
            equilibram relaxamento, beleza e bem-estar.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group transition-all duration-500 ${
                plan.highlight ? "md:scale-105" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className="px-4 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #D2BF9E, #897979)",
                    }}
                  >
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-3xl transition-all duration-300 group-hover:shadow-2xl ${
                  plan.highlight ? "shadow-xl" : "shadow-lg"
                }`}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: plan.highlight
                    ? "2px solid #D2BF9E"
                    : "1px solid #EFE4D8",
                }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h3
                    className="text-2xl font-serif mb-3"
                    style={{ color: "#897979" }}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span
                          className="text-sm line-through opacity-60"
                          style={{ color: "#897979" }}
                        >
                          {plan.originalPrice}
                        </span>
                        <span
                          className="text-xs px-2 py-1 rounded-full text-white"
                          style={{ backgroundColor: "#D2BF9E" }}
                        >
                          -19%
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: "#897979" }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-lg opacity-60"
                        style={{ color: "#897979" }}
                      >
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#897979", opacity: 0.8 }}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 mt-0.5 p-1 rounded-full"
                          style={{
                            backgroundColor: "#EFE4D8",
                            color: "#897979",
                          }}
                        >
                          <CheckIcon />
                        </div>
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "#897979" }}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                    plan.highlight ? "shadow-xl" : ""
                  }`}
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(135deg, #D2BF9E, #897979)"
                      : "linear-gradient(135deg, #EFE4D8, #D2BF9E)",
                    color: plan.highlight ? "#FFFFFF" : "#897979",
                  }}
                >
                  Escolher {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}
        >
          <div
            className="max-w-2xl mx-auto p-8 rounded-3xl border shadow-lg"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EFE4D8",
            }}
          >
            <h3
              className="text-2xl font-serif mb-4"
              style={{ color: "#897979" }}
            >
              Precisa de ajuda para escolher?
            </h3>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: "#897979", opacity: 0.8 }}
            >
              Nossa equipe está disponível para uma consulta gratuita e
              personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#newsletter"
                className="btn-elegant inline-flex items-center gap-2 px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Consulta Gratuita</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          {[
            { icon: "✓", text: "30 dias de garantia" },
            { icon: "🔒", text: "Pagamento seguro" },
            { icon: "💫", text: "Sem compromisso" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 text-sm"
            >
              <span className="text-lg">{item.icon}</span>
              <span style={{ color: "#897979", opacity: 0.8 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
