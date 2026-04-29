"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const container = useRef(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from(".hero-text h1, .hero-text p", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.2,
    });
  });

  return (
    <div
      ref={container}
      className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto w-full"
    >
      <section className="hero-text mb-24 text-center max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl text-primary mb-6 italic tracking-tight">
          Curated Memories
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed tracking-wide">
          A visual anthology of intimate gatherings and meticulously crafted
          moments by Event Planner.
        </p>
      </section>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        <article className="break-inside-avoid mb-8 group relative cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_30px_60px_rgba(27,28,26,0.05)] transition-all duration-700 ease-in-out group-hover:shadow-[0_40px_80px_rgba(27,28,26,0.08)]">
            <img
              alt="Elegant outdoor wedding reception table setting with floral centerpieces"
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              src="/images/image_14.jpg"
            />
            <div className="absolute inset-0 from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
              <h2 className="font-headline text-2xl text-white mb-2 tracking-wide">
                The Botanical Gala
              </h2>
              <p className="font-body text-sm text-white/80 uppercase tracking-widest">
                Summer Solstice
              </p>
            </div>
          </div>
        </article>

        <article className="break-inside-avoid mb-8 group relative cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_30px_60px_rgba(27,28,26,0.05)] transition-all duration-700 ease-in-out group-hover:shadow-[0_40px_80px_rgba(27,28,26,0.08)]">
            <img
              alt="Close up of a romantic bridal bouquet with blush peonies"
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              src="/images/image_1.jpg"
            />
            <div className="absolute inset-0 from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
              <h2 className="font-headline text-2xl text-white mb-2 tracking-wide">
                Blush &amp; Silk
              </h2>
              <p className="font-body text-sm text-white/80 uppercase tracking-widest">
                Intimate Elopement
              </p>
            </div>
          </div>
        </article>

        <article className="break-inside-avoid mb-8 group relative cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_30px_60px_rgba(27,28,26,0.05)] transition-all duration-700 ease-in-out group-hover:shadow-[0_40px_80px_rgba(27,28,26,0.08)]">
            <img
              alt="Elegant table setting with crystal glasses and candlelight"
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              src="/images/image_3.jpg"
            />
            <div className="absolute inset-0 from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
              <h2 className="font-headline text-2xl text-white mb-2 tracking-wide">
                Amber Twilight
              </h2>
              <p className="font-body text-sm text-white/80 uppercase tracking-widest">
                Autumn Reception
              </p>
            </div>
          </div>
        </article>

        <article className="break-inside-avoid mb-8 group relative cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_30px_60px_rgba(27,28,26,0.05)] transition-all duration-700 ease-in-out group-hover:shadow-[0_40px_80px_rgba(27,28,26,0.08)]">
            <img
              alt="Couple walking through a field at golden hour"
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              src="/images/image_10.jpg"
            />
            <div className="absolute inset-0 from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
              <h2 className="font-headline text-2xl text-white mb-2 tracking-wide">
                Golden Fields
              </h2>
              <p className="font-body text-sm text-white/80 uppercase tracking-widest">
                Engagement Session
              </p>
            </div>
          </div>
        </article>

        <article className="break-inside-avoid mb-8 group relative cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_30px_60px_rgba(27,28,26,0.05)] transition-all duration-700 ease-in-out group-hover:shadow-[0_40px_80px_rgba(27,28,26,0.08)]">
            <img
              alt="Detail shot of an elegant wedding cake with fresh flowers"
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              src="/images/image_16.jpg"
            />
            <div className="absolute inset-0 from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
              <h2 className="font-headline text-2xl text-white mb-2 tracking-wide">
                Sweet Artistry
              </h2>
              <p className="font-body text-sm text-white/80 uppercase tracking-widest">
                Culinary Details
              </p>
            </div>
          </div>
        </article>

        <article className="break-inside-avoid mb-8 group relative cursor-pointer">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_30px_60px_rgba(27,28,26,0.05)] transition-all duration-700 ease-in-out group-hover:shadow-[0_40px_80px_rgba(27,28,26,0.08)]">
            <img
              alt="Vintage typography on heavy cardstock wedding invitation"
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              src="/images/image_2.jpg"
            />
            <div className="absolute inset-0  from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
              <h2 className="font-headline text-2xl text-white mb-2 tracking-wide">
                The Ephemera
              </h2>
              <p className="font-body text-sm text-white/80 uppercase tracking-widest">
                Stationery Suite
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-20 flex justify-center">
        <button className="bg-linear-to-r from-primary to-primary-container text-on-primary rounded-full px-8 py-3 font-label text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-[0_10px_30px_rgba(122,86,68,0.2)]">
          Inquire for Curation
        </button>
      </div>
    </div>
  );
}
