"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Galeria", href: "#galeria" },
    { name: "Profissionais", href: "#profissionais" },
    { name: "Planos", href: "#planos" },
    { name: "FAQ's", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg border-b" : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "transparent",
        borderBottomColor: isScrolled
          ? "rgba(239, 228, 216, 0.3)"
          : "transparent",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <div className="relative">
                <Image
                  src="/Logo.svg"
                  alt="Meu Spa"
                  width={100}
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-105 sm:w-[120px] sm:h-[60px]"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group"
                style={{
                  color: isScrolled ? "#897979" : "#FFFFFF",
                }}
                onMouseEnter={(e) => {
                  if (isScrolled) {
                    e.currentTarget.style.backgroundColor =
                      "rgba(239, 228, 216, 0.5)";
                    e.currentTarget.style.color = "#897979";
                  } else {
                    e.currentTarget.style.backgroundColor =
                      "rgba(239, 228, 216, 0.2)";
                    e.currentTarget.style.color = "#FFFFFF";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = isScrolled
                    ? "#897979"
                    : "#FFFFFF";
                }}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Contact Button - Desktop */}
            <Link
              href="#newsletter"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 group hover:scale-105 shadow-lg"
              style={{
                backgroundColor: isScrolled
                  ? "#897979"
                  : "rgba(239, 228, 216, 0.2)",
                color: isScrolled ? "#FFFFFF" : "#FFFFFF",
                border: isScrolled
                  ? "none"
                  : "1px solid rgba(239, 228, 216, 0.3)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                if (isScrolled) {
                  e.currentTarget.style.backgroundColor = "#D2BF9E";
                } else {
                  e.currentTarget.style.backgroundColor = "#EFE4D8";
                  e.currentTarget.style.color = "#897979";
                }
              }}
              onMouseLeave={(e) => {
                if (isScrolled) {
                  e.currentTarget.style.backgroundColor = "#897979";
                } else {
                  e.currentTarget.style.backgroundColor =
                    "rgba(239, 228, 216, 0.2)";
                  e.currentTarget.style.color = "#FFFFFF";
                }
              }}
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contacte-nos
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full transition-all duration-300"
              style={{
                color: isScrolled ? "#897979" : "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled
                  ? "rgba(239, 228, 216, 0.5)"
                  : "rgba(239, 228, 216, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="backdrop-blur-md border-b shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            borderBottomColor: "rgba(239, 228, 216, 0.3)",
          }}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                  style={{ color: "#897979" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(239, 228, 216, 0.5)";
                    e.currentTarget.style.color = "#897979";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#897979";
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200/50">
                <Link
                  href="#newsletter"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-2xl font-medium transition-all duration-300"
                  style={{
                    backgroundColor: "#897979",
                    color: "#FFFFFF",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#D2BF9E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#897979";
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contacte-nos
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(137, 121, 121, 0.2)" }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
