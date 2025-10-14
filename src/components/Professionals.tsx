"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const professionals = [
  {
    name: "Dr. Melinda Agostinho",
    title: "Profissional de estética",
    image: "/Frame 157.png",
    rating: 4.8,
    specialty: "Tratamentos Faciais",
    experience: "8+ anos",
    description:
      "Especialista em rejuvenescimento facial e cuidados anti-aging com técnicas avançadas.",
    certifications: [
      "Dermatologia Estética",
      "Microagulhamento",
      "Peeling Químico",
    ],
  },
  {
    name: "Dr. João Silva",
    title: "Massoterapeuta",
    image: "/Frame 158.png",
    rating: 4.9,
    specialty: "Massoterapia",
    experience: "12+ anos",
    description:
      "Expert em massagens terapêuticas e relaxantes, com foco em bem-estar integral.",
    certifications: ["Massagem Sueca", "Drenagem Linfática", "Reflexologia"],
  },
  {
    name: "Dra. Ana Pereira",
    title: "Fisioterapeuta",
    image: "/Frame 159.png",
    rating: 4.7,
    specialty: "Fisioterapia Estética",
    experience: "10+ anos",
    description:
      "Especializada em tratamentos corporais e reabilitação com abordagem holística.",
    certifications: ["Fisioterapia Dermatofuncional", "RPG", "Pilates Clínico"],
  },
  {
    name: "Dr. Carlos Santos",
    title: "Esteticista",
    image: "/Frame 160.png",
    rating: 4.8,
    specialty: "Estética Corporal",
    experience: "15+ anos",
    description:
      "Pioneiro em tratamentos corporais avançados e técnicas de modelagem corporal.",
    certifications: ["Criolipólise", "Radiofrequência", "Ultrassom Estético"],
  },
  {
    name: "Dra. Sofia Costa",
    title: "Naturopata",
    image: "/Frame 161.png",
    rating: 4.9,
    specialty: "Medicina Natural",
    experience: "7+ anos",
    description:
      "Especialista em terapias naturais e tratamentos holísticos para equilíbrio integral.",
    certifications: ["Aromaterapia", "Fitoterapia", "Terapia Floral"],
  },
];

const StarIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

export default function Professionals() {
  const [selectedProfessional, setSelectedProfessional] = useState<
    number | null
  >(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="profissionais"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div
          className={`text-center max-w-4xl mx-auto mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Nossa Equipe Expert
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6 leading-tight">
            Conheça os nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              profissionais
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-8"></div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Na vanguarda do nosso spa está a dedicação de uma equipe altamente
            qualificada, formada por profissionais que aliam conhecimento
            técnico, sensibilidade e paixão pelo que fazem.
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {professionals.map((professional, index) => (
            <div
              key={professional.name}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 ${
                isVisible ? "animate-fade-in-scale" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={professional.image}
                  alt={professional.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">
                    {professional.rating}
                  </span>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {professional.experience}
                </div>

                {/* Professional Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-xl mb-1">
                    {professional.name}
                  </h3>
                  <p className="text-blue-200 text-sm mb-2">
                    {professional.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium">
                      {professional.specialty}
                    </span>
                  </div>
                </div>

                {/* Hover Expand Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <button
                    onClick={() =>
                      setSelectedProfessional(
                        selectedProfessional === index ? null : index,
                      )
                    }
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                  >
                    <span>Ver Detalhes</span>
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expandable Details */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedProfessional === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {professional.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Certificações:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {professional.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm">
                      Agendar com {professional.name.split(" ")[1]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600 text-sm">
              Anos Experiência Combinada
            </div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600 text-sm">Clientes Atendidos</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              Avaliação Média
            </div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600 text-sm">Certificações</div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "1000ms" }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">
              Pronto para começar sua jornada de bem-estar?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está preparada para oferecer o melhor cuidado
              personalizado para você.
            </p>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <span>Conheça Nossos Planos</span>
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
