import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";

const whatsappUrl = "https://wa.me/905302250997";

export const Hero = () => {
  return (
    <section className="relative min-h-[94svh] w-full overflow-hidden bg-[oklch(0.96_0.02_75)]">
      <div className="absolute inset-0 lg:hidden">
        <video
          src="/hero-pilates.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/optimized/hero-pilates.webp"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.04_35)]/65 via-[oklch(0.27_0.05_35)]/45 to-[oklch(0.16_0.04_35)]/75" />
        <div className="absolute inset-0 bg-[oklch(0.67_0.1_35)]/10 mix-blend-soft-light" />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-br from-[oklch(0.98_0.015_78)] via-[oklch(0.95_0.025_62)] to-[oklch(0.9_0.045_42)] lg:block" />

      <SiteHeader overlay />

      <div className="relative z-10 mx-auto grid min-h-[calc(94svh-100px)] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-20">
        <div className="flex flex-col text-center lg:text-left">
          <div className="mx-auto mb-6 flex items-center gap-4 lg:mx-0">
            <span className="h-px w-12 bg-[var(--terracotta)]" />
            <span className="text-[0.7rem] font-medium tracking-[0.4em] text-[var(--terracotta)]">
              PILATES & WELLNESS
            </span>
          </div>

          <h1
            className="text-[3.5rem] leading-[0.95] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] lg:text-[oklch(0.3_0.05_35)] lg:drop-shadow-none xl:text-[9rem]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "0",
            }}
          >
            Fem'n
            <br />
            <span className="text-[var(--rosegold)] lg:text-[var(--terracotta)]">House</span>
          </h1>

          <p className="mt-6 text-sm font-light tracking-[0.2em] text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-base lg:text-[oklch(0.4_0.04_35)] lg:drop-shadow-none">
            Beylikdüzü Fizyoterapi ve Klinik Pilates Merkezi
          </p>

          <p
            className="mt-4 text-xl italic text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-2xl lg:text-[oklch(0.45_0.05_35)] lg:drop-shadow-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Derin bir nefes al, harekete geç...
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-[var(--terracotta)] px-10 text-sm font-semibold tracking-[0.2em] text-white shadow-[0_15px_40px_-10px_oklch(0.62_0.13_35/0.6)] transition-all hover:scale-105 hover:bg-[oklch(0.55_0.14_35)]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                HEMEN RANDEVU AL
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-white/40 bg-white/10 px-8 text-sm font-medium tracking-[0.2em] text-white backdrop-blur-md hover:bg-white/20 hover:text-white lg:border-[oklch(0.35_0.04_35)]/30 lg:bg-transparent lg:text-[oklch(0.3_0.05_35)] lg:backdrop-blur-none lg:hover:bg-white/50"
            >
              <a href="/fizyoterapist">DAHA FAZLA</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 lg:justify-start">
            <span className="h-1 w-8 rounded-full bg-[var(--terracotta)]" />
            <span className="h-1 w-3 rounded-full bg-white/40 lg:bg-[oklch(0.35_0.04_35)]/30" />
            <span className="h-1 w-3 rounded-full bg-white/40 lg:bg-[oklch(0.35_0.04_35)]/30" />
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[340px] sm:max-w-[380px] lg:block lg:max-w-[360px] xl:max-w-[390px]">
          <div className="absolute -inset-3 rounded-[2rem] border border-[var(--terracotta)]/40" />
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] bg-black shadow-[0_30px_80px_-20px_rgba(80,40,20,0.45)] ring-1 ring-white/40">
            <video
              src="/hero-pilates.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/optimized/hero-pilates.webp"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.3_0.05_35)]/30 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-[var(--terracotta)]">
                  CANLI STÜDYO
                </p>
                <p
                  className="text-base text-[oklch(0.3_0.05_35)]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  Reformer Pilates
                </p>
              </div>
              <span className="flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-[var(--terracotta)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--terracotta)]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
