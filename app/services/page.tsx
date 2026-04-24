"use client";

import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Full-Service Event Planning",
    description:
      "From defining the initial concept to the final send-off, we handle every intricate detail so you can enjoy your special day completely stress-free. We meticulously curate vendors, manage complex timelines, and ensure a flawless execution.",
    features: ["Vendor Curation", "Timeline Management", "Budget Tracking"],
    image: "/images/image_11.jpg",
  },
  {
    title: "Design & Styling",
    description:
      "Transform your chosen venue into a breathtaking and immersive space. Our design team focuses on aesthetic harmony, leveraging lighting, florals, and custom installations to bring your unique vision to life.",
    features: ["Custom Florals", "Lighting Design", "Tablescape Styling"],
    image: "/images/image_16.jpg",
  },
  {
    title: "Intimate Gatherings",
    description:
      "Perfect for milestones, anniversaries, and small celebrations. We create highly personalized experiences for you and your closest guests with the same meticulous attention to detail as our grand events.",
    features: ["Personalized Touches", "Boutique Catering", "Intimate Venues"],
    image: "/images/image_14.jpg",
  },
  {
    title: "Corporate Galas & Retreats",
    description:
      "Elevate your brand with professionally managed corporate events. We ensure seamless logistics, engaging environments, and a polished presentation that leaves a lasting impression on your team or clients.",
    features: [
      "Logistics Strategy",
      "Brand Integration",
      "Executive Experience",
    ],
    image: "/images/image_12.jpg",
  },
];

export default function ServicesPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Hero Animation
      gsap.from(".hero-text h1, .hero-text p", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
      });

      // Services Animation
      gsap.utils.toArray<HTMLElement>(".service-row").forEach((row, i) => {
        const isOdd = i % 2 !== 0;
        const textContent = row.querySelector(".service-text");
        const imageContent = row.querySelector(".service-image");

        // Text fade in from left or right
        gsap.from(textContent, {
          opacity: 0,
          x: isOdd ? -60 : 60,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });

        // Image subtle scale/fade
        gsap.from(imageContent, {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });

      // CTA Section Reveal
      gsap.from(".cta-content", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 90%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="pt-32 pb-24 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-text px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto text-center mb-24 lg:mb-32">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-on-surface mb-6 tracking-tight drop-shadow-sm">
          Our Services
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Tailored experiences designed to make your most cherished moments
          unforgettable. Discover how we beautifully bring your vision to
          reality.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto overflow-hidden">
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-row flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 md:gap-12 lg:gap-16 items-center group`}
            >
              {/* Image Container */}
              <div className="service-image w-full lg:w-1/2 md:aspect-video lg:aspect-4/3 aspect-square relative rounded-2xl overflow-hidden bg-surface-variant shadow-lg flex items-center justify-center border border-outline-variant transition-transform duration-500 ease-in-out group-hover:scale-[1.02]">
                <img
                  alt="Elegant outdoor wedding reception table setting with floral centerpieces"
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  src={service.image}
                />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-overlay"></div>
              </div>

              {/* Text Content */}
              <div className="service-text w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <span className="font-serif italic text-xl">
                      0{index + 1}
                    </span>
                    <div className="h-px bg-primary w-12"></div>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-on-surface">
                    {service.title}
                  </h2>
                </div>

                <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>

                <ul className="pt-4 space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-on-surface-variant"
                    >
                      <CheckCircle />
                      <span className="font-body text-sm md:text-base tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 border border-outline hover:border-primary text-on-surface hover:text-primary font-body text-sm tracking-widest uppercase transition-colors duration-300"
                  >
                    Inquire Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Wrapper */}
      <section className="mt-32 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
        <div className="cta-content bg-surface-container py-16 md:py-24 px-8 rounded-4xl border border-outline-variant text-center relative overflow-hidden flex flex-col items-center justify-center">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-6 relative z-10 drop-shadow-sm">
            Ready to begin?
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-10 max-w-xl mx-auto relative z-10">
            Let's collaborate to craft an unforgettable experience. Reach out to
            schedule a complimentary consultation and share your vision with us.
          </p>
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-body text-sm tracking-widest uppercase hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Contact Us</span>
            <ChevronRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
