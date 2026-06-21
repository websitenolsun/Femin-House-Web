import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { canonicalLink, pageStructuredData } from "@/lib/seo";
import { BlogSection, Footer } from "@/routes/index";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Fem'n House" },
      {
        name: "description",
        content:
          "Fem'n House blog: klinik pilates, manuel terapi, postür, hamile pilatesi ve fizyoterapi notları.",
      },
    ],
    links: [canonicalLink("/blog")],
    scripts: pageStructuredData({
      path: "/blog",
      name: "Blog | Fem'n House",
      description:
        "Fem'n House blog: klinik pilates, manuel terapi, postur, hamile pilatesi ve fizyoterapi notlari.",
      breadcrumbs: [
        { name: "Ana Sayfa", path: "/" },
        { name: "Blog", path: "/blog" },
      ],
    }),
  }),
  component: BlogPage,
});

function BlogPage() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isBlogIndex = pathname === "/blog";

  return (
    <main className="bg-[var(--cream)] text-[oklch(0.28_0.045_35)]">
      <SiteHeader />
      {isBlogIndex ? (
        <>
          <PageHeading
            title="Blog"
            subtitle="Fizyoterapi, klinik pilates ve beden farkındalığı üzerine sakin, anlaşılır notlar."
          />
          <BlogSection />
        </>
      ) : (
        <Outlet />
      )}
      <Footer />
    </main>
  );
}

function PageHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--cream),oklch(0.94_0.026_62))] px-6 pb-14 pt-32 text-center lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[var(--terracotta)]/60" />
          <span className="text-[0.68rem] font-semibold tracking-[0.34em] text-[var(--terracotta)]">
            FEM'N HOUSE
          </span>
          <span className="h-px w-12 bg-[var(--terracotta)]/60" />
        </div>
        <h1
          className="text-6xl leading-[0.95] text-[oklch(0.28_0.045_35)] sm:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[oklch(0.42_0.04_35)] sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
