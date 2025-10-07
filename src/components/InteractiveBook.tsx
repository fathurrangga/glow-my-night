import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import lenteraImg from "@/assets/lentera.png";
import coverBg from "@/assets/cover-bg.png";

const InteractiveBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalPages = 5;

  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
          },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            bubble: { distance: 100, size: 6, duration: 2, opacity: 1 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1);
      } else if (swipeDistance < 0 && currentPage > 0) {
        setCurrentPage((prev) => prev - 1);
      }
    }
  };

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0 z-0" />

      {/* Book Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-8">
        <div
          ref={bookRef}
          className="relative"
          style={{
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
        >
          {/* The Book */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isOpen
                ? "md:translate-x-8"
                : "transform rotate-y-[-15deg] rotate-x-[5deg]"
            }`}
            style={{
              transformStyle: "preserve-3d",
              transform: isOpen
                ? "none"
                : "rotateY(-15deg) rotateX(5deg) scale(0.95)",
            }}
          >
            {/* Cover Page */}
            {!isOpen && (
              <div
                className="relative h-[600px] w-[400px] cursor-pointer overflow-hidden rounded-r-lg md:h-[700px] md:w-[500px]"
                style={{
                  backgroundImage: `url(${coverBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "var(--shadow-book)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-night-deep/50" />
                <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center p-8 text-center">
                  <p className="animate-pulse font-poppins text-sm text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] md:text-base">
                    Geser untuk membuka
                  </p>
                </div>
              </div>
            )}

            {/* Open Book */}
            {isOpen && (
              <div className="flex flex-col md:flex-row">
                {/* Left Page (Desktop Only) */}
                <div className="hidden md:block">
                  {currentPage > 0 && (
                    <BookPage
                      pageNumber={currentPage - 1}
                      side="left"
                      onPrevPage={prevPage}
                    />
                  )}
                </div>

                {/* Spine (Desktop Only) */}
                <div className="hidden h-[700px] w-8 bg-night-medium md:block" />

                {/* Right Page */}
                <BookPage
                  pageNumber={currentPage}
                  side="right"
                  onNextPage={nextPage}
                  onPrevPage={prevPage}
                  isLastPage={currentPage === totalPages - 1}
                />
              </div>
            )}
          </div>

          {/* Navigation Arrows (Desktop) */}
          {isOpen && (
            <div className="hidden md:block">
              {currentPage > 0 && (
                <button
                  onClick={prevPage}
                  className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-4xl text-gold transition-all hover:scale-110"
                >
                  ←
                </button>
              )}
              {currentPage < totalPages - 1 && (
                <button
                  onClick={nextPage}
                  className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-4xl text-gold transition-all hover:scale-110"
                >
                  →
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Page Indicator */}
      {isOpen && (
        <div className="fixed bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === currentPage ? "w-8 bg-gold" : "bg-gold/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const BookPage = ({
  pageNumber,
  side,
  onNextPage,
  onPrevPage,
  isLastPage,
}: {
  pageNumber: number;
  side: "left" | "right";
  onNextPage?: () => void;
  onPrevPage?: () => void;
  isLastPage?: boolean;
}) => {
  const pageContent = [
    // Page 0: Pengakuan
    <div className="flex h-full flex-col justify-center p-8 md:flex-row md:items-center md:gap-8 md:p-12">
      <div className="flex-1">
        <h2 className="mb-6 font-playfair text-3xl font-bold text-night-deep md:text-4xl">
          Pengakuan.
        </h2>
        <p className="font-poppins text-base leading-relaxed text-night-medium md:text-lg">
          Di halaman ini, aku mengakui segalanya. Jarum jamku berhenti malam
          itu. Aku tertidur. Maafkan aku karena membiarkanmu sendirian dalam
          sunyi. Tidak ada pembenaran untuk itu, dan itu sepenuhnya salahku.
        </p>
      </div>
      <div className="mt-6 flex-1 md:mt-0">
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/pasangan.jpeg"
            alt="Foto Bersama"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>,

    // Page 1: Kenangan Senyuman
    <div className="flex h-full flex-col justify-center p-8 md:flex-row md:items-center md:gap-8 md:p-12">
      <div className="order-2 mt-6 flex-1 md:order-1 md:mt-0">
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/kenangan1.jpeg"
            alt="Kenangan Senyuman"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="order-1 flex-1 md:order-2">
        <p className="font-poppins text-lg italic leading-relaxed text-night-medium md:text-xl">
          "Dunia menjadi lebih terang saat kamu tersenyum. Aku minta maaf telah
          meredupkan cahaya seindah ini."
        </p>
      </div>
    </div>,

    // Page 2: Kenangan Video
    <div className="flex h-full flex-col justify-center p-8 md:flex-row md:items-center md:gap-8 md:p-12">
      <div className="flex-1">
        <p className="font-poppins text-lg leading-relaxed text-night-medium md:text-xl">
          "Melihatmu seceria ini adalah hal terbaik di duniaku. Kamu terlalu
          berharga untuk dibuat sedih. Maafkan aku, ya?"
        </p>
      </div>
      <div className="mt-6 flex-1 md:mt-0">
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
          <video
            src="/images/keimutan.mp4"
            className="h-full w-full object-cover"
            controls
            muted
            loop
          />
        </div>
      </div>
    </div>,

    // Page 3: Janjiku
    <div className="flex h-full flex-col items-center justify-center p-8 text-center md:p-12">
      <h2 className="mb-6 font-playfair text-3xl font-bold text-night-deep md:text-4xl">
        Janjiku.
      </h2>
      <p className="mb-8 font-poppins text-xl text-night-medium md:text-2xl">
        Bantu aku menyalakannya kembali.
      </p>
      <div className="h-48 w-48 animate-float md:h-64 md:w-64">
        <img
          src={lenteraImg}
          alt="Lentera"
          className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]"
        />
      </div>
    </div>,

    // Page 4: Kesempatan Baru
    <div className="flex h-full flex-col items-center justify-center p-8 text-center md:p-12">
      <h2 className="mb-6 font-playfair text-3xl font-bold text-night-deep md:text-4xl">
        Kesempatan Baru.
      </h2>
      <p className="mb-8 font-poppins text-xl text-night-medium md:text-2xl">
        Maukah kita menulis halaman selanjutnya bersama?
      </p>
      <Button
        size="lg"
        onClick={() => {
          alert("Terima kasih telah membaca cerita ini. Mari kita tulis cerita baru yang lebih indah bersama! ❤️");
        }}
        className="animate-glow bg-gradient-to-r from-gold to-gold-light font-poppins text-lg font-semibold text-night-deep shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_40px_hsl(43,74%,49%/0.5)]"
      >
        Tentu, kita tulis cerita baru
      </Button>
    </div>,
  ];

  return (
    <div
      className={`relative h-[600px] w-[90vw] max-w-[400px] overflow-hidden bg-paper-cream shadow-lg md:h-[700px] md:w-[500px] ${
        side === "left" ? "rounded-l-lg" : "rounded-r-lg"
      }`}
      style={{
        background: "var(--gradient-page)",
        boxShadow: "var(--shadow-page)",
      }}
    >
      {/* Page Content */}
      <div className="relative z-10 h-full">{pageContent[pageNumber]}</div>

      {/* Page Stack Effect (Right side only) */}
      {side === "right" && (
        <div
          className="absolute right-0 top-0 h-full w-2 bg-paper-warm"
          style={{
            boxShadow: "inset -2px 0 8px rgba(0,0,0,0.1)",
          }}
        />
      )}

      {/* Page Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence baseFrequency=\"0.9\" numOctaves=\"3\" /%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.03\" /%3E%3C/svg%3E')",
        }}
      />
    </div>
  );
};

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default InteractiveBook;
