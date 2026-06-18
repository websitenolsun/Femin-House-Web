import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { canonicalLink, pageStructuredData } from "@/lib/seo";
import { ContactSection, Footer } from "@/routes/index";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | Fem'n House" },
      {
        name: "description",
        content:
          "Fem'n House Beylikdüzü iletişim, randevu, WhatsApp, Instagram ve yol tarifi bilgileri.",
      },
    ],
    links: [canonicalLink("/iletisim")],
    scripts: pageStructuredData({
      path: "/iletisim",
      name: "İletişim | Fem'n House",
      description:
        "Fem'n House Beylikdüzü iletişim, randevu, WhatsApp, Instagram ve yol tarifi bilgileri.",
      breadcrumbs: [
        { name: "Ana Sayfa", path: "/" },
        { name: "İletişim", path: "/iletisim" },
      ],
    }),
  }),
  component: IletisimPage,
});

function IletisimPage() {
  return (
    <main className="bg-[var(--cream)] text-[oklch(0.28_0.045_35)]">
      <SiteHeader />
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--cream),oklch(0.94_0.026_62))] px-6 pb-14 pt-32 text-center lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[var(--terracotta)]/60" />
            <span className="text-[0.68rem] font-semibold tracking-[0.34em] text-[var(--terracotta)]">
              RANDEVU & YOL TARİFİ
            </span>
            <span className="h-px w-12 bg-[var(--terracotta)]/60" />
          </div>
          <h1
            className="text-6xl leading-[0.95] text-[oklch(0.28_0.045_35)] sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            İletişim
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[oklch(0.42_0.04_35)] sm:text-lg">
            Randevu, konum ve seans planlaması için Fem'n House'a kolayca ulaşabilirsiniz.
          </p>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
