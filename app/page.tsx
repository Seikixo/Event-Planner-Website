"use client";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChevronRight } from "lucide-react";
import React, { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      // =============================
      // HERO ANIMATION (cinematic intro)
      // =============================
      gsap.from(".hero-content span, .hero-content h1, .hero-content p", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
      });

      gsap.from(".hero-bg", {
        scale: 1.1,
        duration: 2,
        ease: "power2.out",
      });

      // =============================
      // IMAGE PARALLAX (soft depth)
      // =============================
      gsap.to(".img-top", {
        y: -40,
        scrollTrigger: {
          trigger: ".image-section",
          scrub: true,
        },
      });

      gsap.to(".img-bottom", {
        y: 30,
        scrollTrigger: {
          trigger: ".image-section",
          scrub: true,
        },
      });

      // =============================
      // SECTION REVEALS
      // =============================
      gsap.utils.toArray<HTMLElement>(".fade-section").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // =============================
      // CARDS STAGGER (editorial feel)
      // =============================
      gsap.from(".card-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".cards-grid",
          start: "top 85%",
        },
      });

      // =============================
      // SIGNATURE FADE
      // =============================
      gsap.from(".signature", {
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
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
    <>
      <div ref={container}>
        {/* HERO */}
        <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0 hero-bg">
            <img
              alt="Wedding Scene"
              className="w-full h-full object-cover opacity-90"
              src="/images/image_11.jpg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/40 to-transparent"></div>
          </div>

          <div className="hero-content relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
            <span className="block font-label text-sm tracking-[0.2em] uppercase mb-6 text-white/80">
              BeYOUtiful Life Events
            </span>

            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-md text-white">
              Creating Beautiful <br /> Life Moments
            </h1>

            <p className="font-body text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed text-white/90">
              Curating intimate gatherings and grand celebrations with
              intentional design, transforming your most cherished milestones
              into timeless memories.
            </p>

            <Button href="#book" variant="primary">
              Book Your Event
            </Button>
          </div>
        </header>

        {/* IMAGE + TEXT SECTION */}
        <section className="fade-section image-section py-32 px-6 md:px-12 bg-surface-container-low relative">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative h-[600px] lg:h-[800px] w-full">
              <div className="img-top absolute top-0 right-10 w-3/4 h-3/4 z-10 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/image_8.jpg"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="img-bottom absolute bottom-0 left-0 w-2/3 h-1/2 z-20 rounded-lg overflow-hidden shadow-lg border-4 border-surface-container-lowest">
                <img
                  src="/images/image_5.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:pl-12">
              <h2 className="font-headline text-4xl md:text-5xl mb-8">
                The Art of <br /> Intentional Celebration
              </h2>

              <div className="space-y-6 font-body text-on-surface-variant font-light leading-relaxed">
                <p>
                  We believe that a truly beautiful event is more than just
                  visual perfection; it is a sensory experience crafted with
                  intention. At BeYOUtiful Life Events, we approach every
                  celebration as a blank canvas, ready to be painted with your
                  unique story.
                </p>
                <p>
                  Our philosophy is rooted in romantic minimalism—where every
                  detail is purposefully chosen, and white space is celebrated.
                  We strip away the unnecessary to reveal the emotional core of
                  your gathering, ensuring that you and your guests feel the
                  warmth and intimacy of the moment.
                </p>
              </div>

              <img
                src="/images/signature.png"
                className="signature h-12 opacity-60 mt-8"
              />
            </div>
          </div>
        </section>

        <section className="fade-section py-32 px-6 md:px-12 bg-surface">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-20">
              <span className="block font-label text-sm tracking-[0.2em] text-primary uppercase mb-4">
                Our Expertise
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface">
                Curated Experiences
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-item">
                <Card imageSrc="/images/image_4.jpg" imageAlt="Weddings">
                  <div className="mb-4 text-primary">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="favorite"
                    >
                      Favorite
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl text-on-surface mb-3">
                    Bespoke Weddings
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Tailored matrimonial experiences that reflect your personal
                    narrative, designed with effortless elegance and emotional
                    depth.
                  </p>
                  <a
                    className="inline-flex items-center text-primary font-body text-sm font-medium hover:text-primary-container transition-colors"
                    href="#"
                  >
                    Explore Weddings{" "}
                    <span
                      className="material-symbols-outlined ml-2 text-sm"
                      data-icon="arrow_forward"
                    >
                      <ChevronRight />
                    </span>
                  </a>
                </Card>
              </div>

              <div className="card-item">
                <Card
                  className="lg:-translate-y-12"
                  imageSrc="/images/image_17.jpg"
                  imageAlt="Milestones"
                >
                  <div className="mb-4 text-primary">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="celebration"
                    >
                      Celebration
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl text-on-surface mb-3">
                    Life Milestones
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    From anniversaries to intimate birthdays, we craft
                    meaningful gatherings that honor the passage of time with
                    grace.
                  </p>
                  <a
                    className="inline-flex items-center text-primary font-body text-sm font-medium hover:text-primary-container transition-colors"
                    href="#"
                  >
                    View Milestones{" "}
                    <span
                      className="material-symbols-outlined ml-2 text-sm"
                      data-icon="arrow_forward"
                    >
                      <ChevronRight />
                    </span>
                  </a>
                </Card>
              </div>

              <div className="card-item">
                <Card imageSrc="/images/image_12.jpg" imageAlt="Corporate">
                  <div className="mb-4 text-primary">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="domain"
                    >
                      Domain
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl text-on-surface mb-3">
                    Corporate Galas
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Elevating professional events with a refined, residential
                    feel, moving beyond traditional corporate aesthetics into
                    elevated hospitality.
                  </p>
                  <a
                    className="inline-flex items-center text-primary font-body text-sm font-medium hover:text-primary-container transition-colors"
                    href="#"
                  >
                    Explore Corporate{" "}
                    <span
                      className="material-symbols-outlined ml-2 text-sm"
                      data-icon="arrow_forward"
                    >
                      <ChevronRight />
                    </span>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
