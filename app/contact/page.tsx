import {
  Bookmark,
  Camera,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto w-full">
      <section className="mb-24 relative rounded-xl overflow-hidden min-h-[409px] flex items-center justify-center p-8">
        <div className="absolute inset-0 z-0">
          <img
            alt="Background floral texture"
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
            src="/images/image_9.jpg"
          />
          <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto bg-surface/70 backdrop-blur-md p-12 rounded-xl shadow-[0_20px_50px_rgba(27,28,26,0.04)]">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
            Let&apos;s Create
            <br />
            <span className="italic text-primary-container">Together</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant tracking-wide max-w-lg mx-auto">
            We invite you to share your vision. Whether a grand celebration or
            an intimate gathering, let us craft an experience uniquely yours.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-10 md:p-14 shadow-[0_20px_50px_rgba(27,28,26,0.04)] relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          <h2 className="font-headline text-3xl text-primary mb-8">Inquire</h2>
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label
                  className="font-label text-sm text-on-surface-variant tracking-widest uppercase mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="bg-surface-container-high border-transparent rounded-lg px-4 py-3 text-on-surface focus:border-outline-variant/15 focus:ring-0 transition-colors w-full"
                  id="firstName"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-label text-sm text-on-surface-variant tracking-widest uppercase mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="bg-surface-container-high border-transparent rounded-lg px-4 py-3 text-on-surface focus:border-outline-variant/15 focus:ring-0 transition-colors w-full"
                  id="lastName"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className="font-label text-sm text-on-surface-variant tracking-widest uppercase mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="bg-surface-container-high border-transparent rounded-lg px-4 py-3 text-on-surface focus:border-outline-variant/15 focus:ring-0 transition-colors w-full"
                id="email"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-label text-sm text-on-surface-variant tracking-widest uppercase mb-2"
                htmlFor="eventDate"
              >
                Anticipated Date
              </label>
              <input
                className="bg-surface-container-high border-transparent rounded-lg px-4 py-3 text-on-surface focus:border-outline-variant/15 focus:ring-0 transition-colors w-full text-on-surface-variant"
                id="eventDate"
                type="date"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-label text-sm text-on-surface-variant tracking-widest uppercase mb-2"
                htmlFor="message"
              >
                Your Vision
              </label>
              <textarea
                className="bg-surface-container-high border-transparent rounded-lg px-4 py-3 text-on-surface focus:border-outline-variant/15 focus:ring-0 transition-colors w-full resize-none"
                id="message"
                rows={5}
              ></textarea>
            </div>
            <button
              className="w-full md:w-auto px-10 py-4 rounded-lg bg-linear-to-r from-primary to-primary-container text-on-primary font-label text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              type="button"
            >
              Send Inquiry
              <ChevronRight />
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-16 lg:mt-12">
          <div className="bg-surface-container-lowest rounded-xl p-10 shadow-[0_20px_50px_rgba(27,28,26,0.04)]">
            <h3 className="font-headline text-2xl text-primary mb-6">
              Direct Connect
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail />
                <div>
                  <p className="font-label text-xs text-on-surface-variant tracking-[0.1em] uppercase mb-1">
                    Email
                  </p>
                  <a
                    className="font-body text-primary hover:text-primary-container transition-colors"
                    href="mailto:hello@beyoutiful.com"
                  >
                    hello@beyoutiful.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone />
                <div>
                  <p className="font-label text-xs text-on-surface-variant tracking-[0.1em] uppercase mb-1">
                    Phone
                  </p>
                  <a
                    className="font-body text-primary hover:text-primary-container transition-colors"
                    href="tel:+15551234567"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin />
                <div>
                  <p className="font-label text-xs text-on-surface-variant tracking-[0.1em] uppercase mb-1">
                    Studio
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    17-1 Mc Arthur Highway, Ulas, , Davao City, Philippines,
                    8001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-xl text-primary mb-6 italic">
              Follow the Journey
            </h3>
            <div className="flex gap-4">
              <a
                className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-secondary-container transition-colors"
                href="#"
              >
                <Camera />
              </a>
              <a
                className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-secondary-container transition-colors"
                href="#"
              >
                <Share2 />
              </a>
              <a
                className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-secondary-container transition-colors"
                href="#"
              >
                <Bookmark />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
