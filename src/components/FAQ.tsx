"use client";
import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "Preciso agendar com antecedência para ser atendido?",
    answer:
      "Sim, recomendamos que agende seu horário com antecedência para garantir a disponibilidade de nossos profissionais e um atendimento exclusivo. No entanto, se houver disponibilidade, teremos prazer em atendê-lo sem hora marcada.",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    question: "Vocês atendem casais ou grupos?",
    answer:
      "Sim, oferecemos pacotes especiais para casais e grupos. É uma ótima maneira de celebrar uma ocasião especial ou simplesmente relaxar com amigos e familiares. Entre em contato para saber mais sobre nossas opções.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito e débito, transferência bancária e pagamento em dinheiro. Também oferecemos vouchers de presente, que podem ser adquiridos em nosso spa ou online.",
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
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  },
  {
    question: "Os produtos utilizados são naturais ou hipoalergênicos?",
    answer:
      "Priorizamos o uso de produtos naturais, orgânicos e hipoalergênicos em nossos tratamentos. Se você tiver alguma alergia ou sensibilidade específica, por favor, informe-nos no momento do agendamento para que possamos personalizar sua experiência.",
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "A duração de cada sessão varia de acordo com o tratamento escolhido. Em geral, as sessões podem durar de 30 minutos a 2 horas. Você pode encontrar a duração de cada serviço em nossa página de tratamentos.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    question: "Quais cuidados devo ter após uma massagem ou tratamento?",
    answer:
      "Após a maioria dos tratamentos, recomendamos que você beba bastante água para ajudar a eliminar as toxinas do corpo. Evite atividades físicas intensas e refeições pesadas logo após a sessão. Nossos terapeutas fornecerão instruções específicas de acordo com o tratamento realizado.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const ChevronDownIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            Dúvidas Frequentes
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-6 leading-tight">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              mais frequentes
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-8"></div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Reunimos aqui as perguntas mais comuns para ajudar você a entender
            melhor nossos serviços, agendamentos, políticas e tudo o que precisa
            para aproveitar sua experiência no spa com total tranquilidade.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 ${
                isVisible ? "animate-fade-in-scale" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full p-6 flex items-start gap-4 text-left"
                onClick={() => toggleItem(index)}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {faq.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-blue-200 transition-colors">
                    {faq.question}
                  </h3>

                  {/* Answer - Expandable */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openItems.includes(index)
                        ? "max-h-96 opacity-100 mb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <div className="flex-shrink-0">
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white ${
                      openItems.includes(index)
                        ? "rotate-180 text-blue-400"
                        : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expand indicator */}
              <div
                className={`h-1 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                  openItems.includes(index)
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está sempre disponível para esclarecer qualquer
              questão e ajudá-lo a ter a melhor experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
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
                <span>Entre em Contato</span>
              </a>
              <button
                onClick={() =>
                  setOpenItems(
                    openItems.length === faqs.length
                      ? []
                      : faqs.map((_, i) => i),
                  )
                }
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span>
                  {openItems.length === faqs.length
                    ? "Fechar Todas"
                    : "Expandir Todas"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "1000ms" }}
        >
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">24h</div>
            <div className="text-gray-300 text-sm">Tempo de Resposta</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300 text-sm">Satisfação do Cliente</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Suporte Online</div>
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
            transform: scale(0.95) translateY(20px);
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
