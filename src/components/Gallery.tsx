"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/f6bddd7b66ac9c238f5553845ef3790fbbbb9ea1.jpg",
    alt: "Ambiente relaxante com decoração zen",
    category: "Ambiente",
    title: "Sala de Relaxamento"
  },
  {
    id: 2,
    src: "/90ea62186a0eff1fe5d44afcff210a43325facf7.jpg",
    alt: "Tratamento facial premium",
    category: "Tratamentos",
    title: "Cuidados Faciais"
  },
  {
    id: 3,
    src: "/516b381e39bf97d9f56921135ecf1d4c7363c59f.jpg",
    alt: "Espaço de massagem terapêutica",
    category: "Massagens",
    title: "Terapias Corporais"
  },
  {
    id: 4,
    src: "/5a54e08f268d058db741a3f0cace5a8e262b9cc6.jpg",
    alt: "Sala de tratamentos estéticos",
    category: "Estética",
    title: "Cuidados Estéticos"
  },
  {
    id: 5,
    src: "/7ce3af1b43cad7871c856e8c16e5f90109e67483.jpg",
    alt: "Ambiente de bem-estar e relaxamento",
    category: "Ambiente",
    title: "Zona de Bem-estar"
  },
  {
    id: 6,
    src: "/a702b436411a8385809d9c3f653e509f782ea1a8.jpg",
    alt: "Sauna e banhos de vapor",
    category: "Sauna",
    title: "Banhos Terapêuticos"
  },
  {
    id: 7,
    src: "/a7be5849e4aabc45a98237cf7cb5e50cb8b2ff38.png",
    alt: "Produtos naturais e orgânicos",
    category: "Produtos",
    title: "Produtos Premium"
  },
  {
    id: 8,
    src: "/dbf53286af49ee570519db0f31fe5ebe9e5c0f59.png",
    alt: "Tratamentos faciais especializados",
    category: "Tratamentos",
    title: "Rejuvenescimento"
  }
];

const categories = ["Todos", "Ambiente", "Tratamentos", "Massagens", "Estética", "Sauna", "Produtos"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("galeria");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            Nossa Galeria
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-6 leading-tight">
            Explore nossos{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              espaços únicos
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-8"></div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Descubra os ambientes cuidadosamente projetados para proporcionar máximo conforto e bem-estar.
            Cada espaço foi pensado para criar uma experiência sensorial única.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-scale' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
              onClick={() => openModal(image)}
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {image.category}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-white mb-4">
              Venha conhecer nossos espaços pessoalmente
            </h3>
            <p className="text-gray-300 mb-6">
              Agende uma visita e experimente a atmosfera única do nosso spa.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <span>Agendar Visita</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-modal-in">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-full"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
        }

        .animate-modal-in {
          animation: modal-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
