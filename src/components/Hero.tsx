"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/f6bddd7b66ac9c238f5553845ef3790fbbbb9ea1.jpg",
    "/90ea62186a0eff1fe5d44afcff210a43325facf7.jpg",
    "/516b381e39bf97d9f56921135ecf1d4c7363c59f.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Ambiente spa ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full blur-sm animate-bounce opacity-20"
          style={{ backgroundColor: "#EFE4D8" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 rounded-full blur-sm animate-pulse opacity-15"
          style={{ backgroundColor: "#D2BF9E" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-12 h-12 rounded-full blur-sm animate-bounce opacity-20"
          style={{
            backgroundColor: "#EFE4D8",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-morphism">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#D2BF9E" }}
          ></div>
          <span className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
            Experiência Premium
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-white mb-6 leading-tight">
          <span className="block">Experiências</span>
          <span
            className="block bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #EFE4D8 0%, #D2BF9E 100%)",
            }}
          >
            sensoriais exclusivas
          </span>
          <span className="block text-white/90">para quem valoriza</span>
          <span className="block italic">o autocuidado</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Proporcionar uma experiência completa de relaxamento, cuidado e
          renovação. Do toque delicado das terapias ao aroma suave dos óleos
          essenciais.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
          <a
            href="#sobre"
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#897979",
            }}
          >
            <span>Conheça nossa história</span>
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
          <a
            href="#servicos"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-medium border backdrop-blur-sm transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              backgroundColor: "rgba(239, 228, 216, 0.1)",
              borderColor: "rgba(239, 228, 216, 0.3)",
              color: "#FFFFFF",
            }}
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span>Ver Serviços</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              500+
            </div>
            <div className="text-white/80 text-xs sm:text-sm">
              Clientes Satisfeitos
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              5
            </div>
            <div className="text-white/80 text-xs sm:text-sm">
              Profissionais Expert
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
              4.8
            </div>
            <div className="text-white/80 text-xs sm:text-sm flex items-center justify-center gap-1">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                viewBox="0 0 20 20"
                style={{ color: "#D2BF9E" }}
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              Avaliação Média
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "opacity-100"
                : "opacity-30 hover:opacity-50"
            }`}
            style={{
              backgroundColor:
                index === currentImageIndex ? "#EFE4D8" : "#FFFFFF",
            }}
          />
        ))}
      </div>
    </section>
  );
}
