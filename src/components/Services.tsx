"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    number: "1",
    title: "Estética e cuidados pessoais",
    description:
      "Nossos serviços de estética e cuidados pessoais foram pensados para valorizar sua beleza natural, com suavidade, técnica e atenção total ao seu bem-estar. Da ponta dos pés ao brilho do olhar, oferecemos um espaço onde o cuidado vai além da aparência.",
    image: "/7ce3af1b43cad7871c856e8c16e5f90109e67483.jpg",
    bullets: [
      "Manicure e pedicure spa",
      "Depilação com cera ou linha",
      "Design de sobrancelhas e coloração",
      "Tratamentos para mãos e pés ressecados",
      "Hidratação corporal intensiva",
    ],
  },
  {
    number: "2",
    title: "Banhos de Vapor e Sauna",
    description:
      "Sinta o calor envolver o corpo, abrindo seus poros, acalmando seus músculos e pensamentos e libertando toxinas. Nossos banhos de vapor são mais do que momentos de relaxamento — são rituais de purificação.",
    image: "/a702b436411a8385809d9c3f653e509f782ea1a8.jpg",
    bullets: [
      "Desintoxicar o organismo",
      "Reduzir o estresse físico e emocional",
      "Melhorar a respiração e a pele",
      "Estimular o sistema imunológico",
      "Desacelerar e renovar as energias",
    ],
  },
  {
    number: "3",
    title: "Tratamentos Faciais",
    description:
      "Nossos tratamentos faciais vão além da estética: são momentos de pausa, renovação e bem-estar. Utilizamos técnicas avançadas aliadas a produtos naturais e de alta performance, respeitando o seu tipo de pele e as suas necessidades.",
    image: "/dbf53286af49ee570519db0f31fe5ebe9e5c0f59.png",
    bullets: [
      "Limpeza profunda da pele e desobstrução dos poros",
      "Hidratação intensiva e duradoura",
      "Estímulo à produção de colágeno e elastina",
      "Redução de manchas, acne e oleosidade",
      "Suavização de linhas de expressão",
    ],
  },
  {
    number: "4",
    title: "Terapias Corporais",
    description:
      "As terapias corporais de nosso spa são verdadeiros convites à reconexão com o corpo e à serenidade da mente. Através de técnicas milenares e modernas, oferecemos alívio, equilíbrio e relaxamento profundo. Cada sessão é pensada para respeitar o seu ritmo e restaurar o fluxo natural de bem-estar.",
    image: "/a7be5849e4aabc45a98237cf7cb5e50cb8b2ff38.png",
    bullets: [
      "Massagem relaxante",
      "Massagem terapêutica",
      "Drenagem linfática manual",
      "Massagem com pedras quentes",
      "Reflexologia podal",
    ],
  },
];

const CheckIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative"
      style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}
    >
      {/* Background Decorations */}
      <div
        className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: "linear-gradient(135deg, #EFE4D8 0%, #D2BF9E 100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
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
            Nossos Especialidades
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 leading-tight"
            style={{ color: "#897979" }}
          >
            Nossos{" "}
            <span className="italic" style={{ color: "#D2BF9E" }}>
              serviços
            </span>
          </h2>

          <div
            className="w-24 h-1 rounded-full mx-auto mb-8"
            style={{
              background: "linear-gradient(135deg, #D2BF9E, #EFE4D8)",
            }}
          ></div>

          <p
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#897979", opacity: 0.8 }}
          >
            Oferecemos uma variedade de serviços pensados para promover
            bem-estar, relaxamento e equilíbrio em todas as fases da sua rotina.
            Cada atendimento é realizado com atenção personalizada, ambiente
            acolhedor e técnicas profissionais que respeitam as necessidades do
            seu corpo e da sua pele.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`service-card grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Content Side */}
              <div
                className={`space-y-6 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                {/* Service Number Badge */}
                <div className="relative">
                  <div
                    className="absolute -top-4 -left-4 text-6xl sm:text-8xl font-serif opacity-5 pointer-events-none"
                    style={{ color: "#D2BF9E" }}
                  >
                    {service.number}
                  </div>
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl text-white font-bold text-base sm:text-lg shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #D2BF9E, #897979)",
                    }}
                  >
                    {service.number}
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-4">
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight"
                    style={{ color: "#897979" }}
                  >
                    {service.title}
                  </h3>
                  <div
                    className="w-16 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #D2BF9E, #EFE4D8)",
                    }}
                  ></div>
                </div>

                {/* Description */}
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: "#897979", opacity: 0.8 }}
                >
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-4">
                  <h4
                    className="text-lg sm:text-xl font-semibold mb-4"
                    style={{ color: "#897979" }}
                  >
                    Benefícios:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-3 p-3 rounded-lg border hover:shadow-md transition-all duration-300 group"
                        style={{
                          backgroundColor: "#F5F5F5",
                          borderColor: "#EFE4D8",
                          animationDelay: `${index * 200 + bulletIndex * 100}ms`,
                        }}
                      >
                        <div
                          className="flex-shrink-0 w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform"
                          style={{ color: "#D2BF9E" }}
                        >
                          <CheckIcon />
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#897979" }}
                        >
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() =>
                      setActiveService(activeService === index ? null : index)
                    }
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-2xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    style={{
                      background: "linear-gradient(135deg, #D2BF9E, #897979)",
                    }}
                  >
                    <span>Saiba mais</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${activeService === index ? "rotate-180" : "group-hover:translate-x-1"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {activeService === index ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div
                className={`relative ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="group relative">
                  {/* Decorative Background */}
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #EFE4D8, #D2BF9E)",
                    }}
                  ></div>

                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Image Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Floating Service Number */}
                    <div
                      className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderColor: "#EFE4D8",
                      }}
                    >
                      <span
                        className="text-lg sm:text-2xl font-bold"
                        style={{ color: "#897979" }}
                      >
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Floating Stats */}
                  <div
                    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg border"
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
                        {service.bullets.length}
                      </div>
                      <div
                        className="text-xs sm:text-sm"
                        style={{ color: "#897979", opacity: 0.8 }}
                      >
                        Benefícios
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              <div
                className={`lg:col-span-2 overflow-hidden transition-all duration-500 ${
                  activeService === index
                    ? "max-h-96 opacity-100 mt-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="p-6 sm:p-8 rounded-2xl border"
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderColor: "#EFE4D8",
                  }}
                >
                  <h4
                    className="text-lg sm:text-xl font-semibold mb-4"
                    style={{ color: "#897979" }}
                  >
                    Detalhes do Serviço
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{ color: "#897979", opacity: 0.8 }}
                  >
                    Este serviço inclui consulta personalizada, ambiente
                    climatizado e relaxante, produtos premium, e acompanhamento
                    pós-tratamento. Nossa equipe especializada garantirá que
                    você tenha a melhor experiência possível.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <div className="text-center">
                      <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: "#897979" }}
                      >
                        60min
                      </div>
                      <div
                        className="text-xs sm:text-sm"
                        style={{ color: "#897979", opacity: 0.8 }}
                      >
                        Duração média
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: "#897979" }}
                      >
                        Premium
                      </div>
                      <div
                        className="text-xs sm:text-sm"
                        style={{ color: "#897979", opacity: 0.8 }}
                      >
                        Produtos
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: "#897979" }}
                      >
                        Expert
                      </div>
                      <div
                        className="text-xs sm:text-sm"
                        style={{ color: "#897979", opacity: 0.8 }}
                      >
                        Profissionais
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div
            className="backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border max-w-2xl mx-auto"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderColor: "#EFE4D8",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-serif mb-4"
              style={{ color: "#897979" }}
            >
              Pronto para sua experiência de bem-estar?
            </h3>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: "#897979", opacity: 0.8 }}
            >
              Entre em contato conosco e descubra como podemos cuidar de você.
            </p>
            <a
              href="#planos"
              className="btn-elegant inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <span>Ver Planos e Preços</span>
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
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
