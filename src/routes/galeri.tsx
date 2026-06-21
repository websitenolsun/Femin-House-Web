import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { canonicalLink, pageStructuredData } from "@/lib/seo";
import { Footer, GallerySection } from "@/routes/index";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Foto Galeri | Fem'n House" },
      {
        name: "description",
        content: "Fem'n House stüdyo, reformer pilates, manuel terapi ve seans görselleri.",
      },
    ],
    links: [canonicalLink("/galeri")],
    scripts: pageStructuredData({
      path: "/galeri",
      name: "Foto Galeri | Fem'n House",
      description: "Fem'n House studyo, reformer pilates, manuel terapi ve seans gorselleri.",
      breadcrumbs: [
        { name: "Ana Sayfa", path: "/" },
        { name: "Foto Galeri", path: "/galeri" },
      ],
    }),
  }),
  component: GaleriPage,
});

function GaleriPage() {
  return (
    <main className="bg-[var(--cream)] text-[oklch(0.28_0.045_35)]">
      <SiteHeader />
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--cream),oklch(0.98_0.016_78))] px-6 pb-14 pt-20 text-center sm:pt-24 lg:px-20 lg:pt-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 bg-[var(--terracotta)]/60 sm:w-12" />
            <span className="text-[0.64rem] font-semibold tracking-[0.24em] text-[var(--terracotta)] sm:text-[0.68rem] sm:tracking-[0.34em]">
              STÜDYO ATMOSFERİ
            </span>
            <span className="h-px w-10 bg-[var(--terracotta)]/60 sm:w-12" />
          </div>
          <h1
            className="text-5xl leading-[1.05] text-[oklch(0.28_0.045_35)] sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Foto Galeri
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[oklch(0.42_0.04_35)] sm:text-lg">
            Reformer, terapi ve Fem'n House'un gündelik ritminden seçilen sıcak kareler.
          </p>
        </div>
      </section>
      <GallerySection />
      <Footer />
    </main>
  );
}
