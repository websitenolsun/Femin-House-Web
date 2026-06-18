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
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--cream),oklch(0.98_0.016_78))] px-6 pb-14 pt-32 text-center lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[var(--terracotta)]/60" />
            <span className="text-[0.68rem] font-semibold tracking-[0.34em] text-[var(--terracotta)]">
              STÜDYO ATMOSFERİ
            </span>
            <span className="h-px w-12 bg-[var(--terracotta)]/60" />
          </div>
          <h1
            className="text-6xl leading-[0.95] text-[oklch(0.28_0.045_35)] sm:text-7xl lg:text-8xl"
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
