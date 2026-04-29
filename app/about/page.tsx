"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Hero Content Animation
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
      });

      // Hero Image Animation
      gsap.from(".hero-image", {
        opacity: 0,
        scale: 1.05,
        duration: 1.5,
        ease: "power2.out",
      });

      // Section Reveals
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const text = section.querySelector(".reveal-text");
        const image = section.querySelector(".reveal-image");

        if (text) {
          gsap.from(text, {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          });
        }

        if (image) {
          gsap.from(image, {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          });
        }
      });

      // Signature Animation
      gsap.from(".signature", {
        opacity: 0,
        x: -20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".signature",
          start: "top 90%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 mb-32 relative pt-32 pb-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[716px] mb-32">
          <div className="lg:col-span-5 z-10 lg:pr-12 hero-content">
            <span className="font-body text-label-md tracking-widest text-primary uppercase mb-6 block">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-on-surface leading-tight mb-8">
              Curating the <br />
              <i className="text-primary-container">unforgettable.</i>
            </h1>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
              Event Planner was born from a desire to transcend traditional
              planning, creating sanctuaries of celebration that reflect the
              deepest, most authentic essence of our clients.
            </p>
          </div>
          <div className="lg:col-span-7 relative h-[614px] lg:h-[819px] w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(27,28,26,0.04)] hero-image">
            <img
              alt="Elegant table setting with soft blush florals and fine crystal"
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/image_7.jpg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface/40 to-transparent"></div>
          </div>
        </div>

        <div className="reveal-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-container-low py-24 px-12 rounded-3xl">
          <div className="reveal-image order-2 lg:order-1 relative">
            <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(27,28,26,0.04)] max-w-md mx-auto lg:ml-auto">
              <img
                alt="Eleanor Vance, Founder"
                className="w-full h-full object-cover"
                src="/images/image_6.jpg"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-surface-container-lowest/70 backdrop-blur-md rounded-full items-center justify-center p-8 shadow-[0_20px_50px_rgba(27,28,26,0.04)] hidden md:flex">
              <p className="font-serif italic text-primary text-center leading-snug">
                &quot;Every detail speaks.&quot;
              </p>
            </div>
          </div>
          <div className="reveal-text order-1 lg:order-2">
            <h2 className="font-serif text-4xl text-on-surface mb-6">
              Meet The <i className="text-primary">Founder.</i>
            </h2>
            <h3 className="font-body text-lg text-primary mb-8 tracking-wide">
              FOUNDER &amp; CREATIVE DIRECTOR
            </h3>
            <div className="space-y-6 text-on-surface-variant font-body leading-relaxed">
              <p>
                With over a decade of experience designing luxury experiences
                across the globe, The Founder founded Event Planner to bring a
                deeply personal, editorial eye to life&apos;s most meaningful
                milestones.
              </p>
              <p>
                Her approach is rooted in the belief that true luxury isn&apos;t
                about excess; it&apos;s about intentionality. It&apos;s the
                thoughtful curation of textures, the precise selection of a
                singular bloom, and the invisible choreography that makes an
                event feel effortless and intimately yours.
              </p>
            </div>
            <img
              alt="Eleanor Vance Signature"
              className="signature h-12 mt-10 opacity-60"
              src="/images/image_13.jpg"
              style={{ filter: "sepia(1) hue-rotate(-50deg) saturate(0.5)" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
