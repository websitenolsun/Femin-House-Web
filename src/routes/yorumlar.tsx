import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { canonicalLink, pageStructuredData } from "@/lib/seo";
import { Footer, ReviewsSection } from "@/routes/index";

export const Route = createFileRoute("/yorumlar")({
  head: () => ({
    meta: [
      { title: "Yorumlar | Fem'n House" },
      {
        name: "description",
        content: "Fem'n House Google yorumları, danışan deneyimleri ve 5.0 işletme puanı.",
      },
    ],
    links: [canonicalLink("/yorumlar")],
    scripts: pageStructuredData({
      path: "/yorumlar",
      name: "Yorumlar | Fem'n House",
      description: "Fem'n House Google yorumlari, danisan deneyimleri ve 5.0 isletme puani.",
      breadcrumbs: [
        { name: "Ana Sayfa", path: "/" },
        { name: "Yorumlar", path: "/yorumlar" },
      ],
    }),
  }),
  component: YorumlarPage,
});

function YorumlarPage() {
  return (
    <main className="bg-[var(--cream)] text-[oklch(0.28_0.045_35)]">
      <SiteHeader />
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--cream),oklch(0.98_0.016_78))] px-6 pb-14 pt-32 text-center lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[var(--terracotta)]/60" />
            <span className="text-[0.68rem] font-semibold tracking-[0.34em] text-[var(--terracotta)]">
              DANIŞAN DENEYİMLERİ
            </span>
            <span className="h-px w-12 bg-[var(--terracotta)]/60" />
          </div>
          <h1
            className="text-6xl leading-[0.95] text-[oklch(0.28_0.045_35)] sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Yorumlar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[oklch(0.42_0.04_35)] sm:text-lg">
            Fem'n House'ta seans deneyimini, güven hissini ve düzenli ilerlemeyi anlatan gerçek geri
            bildirimler.
          </p>
        </div>
      </section>
      <ReviewsSection />
      <Footer />
    </main>
  );
}
