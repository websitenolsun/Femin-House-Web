import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";
import { absoluteUrl, pageStructuredData, seoBusiness } from "@/lib/seo";

const whatsappUrl = "https://wa.me/905302250997";
const safetyNote =
  "Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.";

function getBlogFaqs(title: string) {
  return [
    {
      question: "Bu ağrı fizik tedaviyle geçer mi?",
      answer: `${title} başlığında süreç kişiden kişiye değişir. Fizyoterapist eşliğinde yapılan kişiye özel değerlendirme, ağrının kaynağını ve uygun egzersiz rehabilitasyonu planını belirlemeye yardımcı olur.`,
    },
    {
      question: "Ne zaman fizyoterapiste başvurmalıyım?",
      answer:
        "Ağrı günlük hareketleri etkiliyor, tekrarlıyor veya hareket kısıtlılığı oluşturuyorsa destek almak faydalı olabilir. Şiddetli ağrı, uyuşma, güç kaybı, travma, ateş veya ani hareket kaybı varsa hekime ya da fizyoterapiste başvurulmalıdır.",
    },
    {
      question: "Evde egzersiz yapmak güvenli mi?",
      answer:
        "Ev egzersizleri doğru seçildiğinde destekleyici olabilir; ancak ağrıyı artıran hareketleri sürdürmek uygun değildir. Egzersizleri kişiye özel değerlendirme sonrası fizyoterapist eşliğinde öğrenmek daha güvenli bir başlangıç sağlar.",
    },
  ];
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);

    if (!post) {
      throw notFound();
    }

    return post;
  },
  head: ({ loaderData }) => {
    const post = loaderData;
    const canonicalPath = `/blog/${post.slug}`;
    const canonicalUrl = absoluteUrl(canonicalPath);
    const faqs = getBlogFaqs(post.title);

    return {
      meta: [
        { title: post.seoTitle },
        { name: "description", content: post.seoDescription },
        { name: "keywords", content: post.keywords.join(", ") },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.seoDescription },
        { property: "og:image", content: post.image },
        { property: "og:url", content: canonicalUrl },
        { property: "article:published_time", content: post.publishedDate },
        { property: "article:modified_time", content: post.updatedDate },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.seoTitle },
        { name: "twitter:description", content: post.seoDescription },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts: [
        ...pageStructuredData({
          path: canonicalPath,
          name: post.title,
          description: post.seoDescription,
          breadcrumbs: [
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: canonicalPath },
          ],
        }),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.seoDescription,
            image: absoluteUrl(post.image),
            datePublished: post.publishedDate,
            dateModified: post.updatedDate,
            author: {
              "@id": seoBusiness.ids.person,
            },
            publisher: {
              "@id": seoBusiness.ids.organization,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function formatDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const relatedPosts = getRelatedPosts(post.relatedSlugs);
  const faqs = getBlogFaqs(post.title);

  return (
    <article>
      <section className="relative overflow-hidden bg-[oklch(0.28_0.045_35)] px-6 py-20 text-white sm:py-24 lg:px-20">
        <img
          src={post.image}
          alt=""
          width={post.imageWidth}
          height={post.imageHeight}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.23_0.045_35)] via-[oklch(0.32_0.05_35)]/84 to-[oklch(0.42_0.06_45)]/40" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-xs font-semibold tracking-[0.22em] text-[var(--rosegold)] transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            BLOGA DÖN
          </Link>
          <p className="mt-10 text-xs font-semibold tracking-[0.34em] text-[var(--rosegold)]">
            {post.category}
          </p>
          <h1
            className="mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            {post.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold tracking-[0.12em] text-white/74">
            <span className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2">
              <CalendarDays className="mr-2 h-4 w-4 text-[var(--rosegold)]" />
              {formatDate(post.updatedDate)}
            </span>
            <span className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2">
              <Clock3 className="mr-2 h-4 w-4 text-[var(--rosegold)]" />
              {post.readingMinutes} dk okuma
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.68fr_0.32fr] lg:items-start">
          <div className="rounded-[1.1rem] border border-[var(--terracotta)]/12 bg-white/60 p-6 sm:p-9">
            <p className="text-lg leading-9 text-[oklch(0.39_0.04_35)]">{post.summary}</p>

            <div className="my-9 rounded-[1rem] bg-[oklch(0.94_0.026_62)] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[var(--terracotta)]" />
                <div>
                  <p className="text-sm font-semibold tracking-[0.18em] text-[var(--terracotta)]">
                    FEM'N HOUSE NOTU
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[oklch(0.4_0.04_35)]">
                    Bu yazı genel bilgilendirme amaçlıdır. Kişisel ağrı, gebelik süreci veya hareket
                    kısıtlılığı için fizyoterapist değerlendirmesi en doğru başlangıçtır.{" "}
                    {safetyNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2
                    className="text-3xl leading-tight text-[oklch(0.28_0.045_35)] sm:text-4xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-[oklch(0.42_0.036_35)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 rounded-lg border border-[var(--terracotta)]/12 bg-[oklch(0.98_0.016_78)] p-4 text-sm leading-6 text-[oklch(0.39_0.04_35)]"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--terracotta)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-[1rem] border border-[var(--terracotta)]/14 bg-[oklch(0.98_0.016_78)] p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                SIK SORULAN SORULAR
              </p>
              <div className="mt-5 grid gap-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-lg border border-[var(--terracotta)]/12 bg-white/62 p-5"
                  >
                    <h3 className="text-base font-semibold text-[oklch(0.28_0.045_35)]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[oklch(0.42_0.036_35)]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1rem] bg-[oklch(0.28_0.045_35)] p-6 text-white sm:p-8">
              <p className="text-xs font-semibold tracking-[0.24em] text-[var(--rosegold)]">ÖZET</p>
              <p className="mt-4 text-lg leading-8 text-white/84">{post.takeaway}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[var(--terracotta)] px-7 text-xs font-semibold tracking-[0.18em] text-white hover:bg-[oklch(0.55_0.14_35)]"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    RANDEVU AL <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/25 bg-transparent px-7 text-xs font-semibold tracking-[0.18em] text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/fizyoterapist">FZT. SENA ER İLE GÖRÜŞ</Link>
                </Button>
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-8">
            <div className="rounded-[1rem] border border-[var(--terracotta)]/14 bg-[oklch(0.98_0.016_78)] p-5">
              <p className="text-xs font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                İÇ BAĞLANTILAR
              </p>
              <div className="mt-4 grid gap-3 text-sm font-semibold text-[oklch(0.32_0.045_35)]">
                <Link to="/hakkimizda" className="hover:text-[var(--terracotta)]">
                  Fem'n House yaklaşımı
                </Link>
                <Link to="/fizyoterapist" className="hover:text-[var(--terracotta)]">
                  Fzt. Sena ER profili
                </Link>
                <Link to="/iletisim" className="hover:text-[var(--terracotta)]">
                  Randevu ve iletişim
                </Link>
                <Link to="/yorumlar" className="hover:text-[var(--terracotta)]">
                  Danışan yorumları
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1rem] border border-[var(--terracotta)]/14 bg-white/58">
              <img
                src={post.image}
                alt={post.alt}
                width={post.imageWidth}
                height={post.imageHeight}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                  KONU ETİKETLERİ
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-[oklch(0.94_0.026_62)] px-3 py-1 text-xs font-medium text-[oklch(0.38_0.04_35)]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[oklch(0.94_0.026_62)] px-6 py-20 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-5">
            <h3
              className="text-4xl leading-tight text-[oklch(0.28_0.045_35)] sm:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              İlgili Yazılar
            </h3>
            <Link
              to="/blog"
              className="hidden text-xs font-semibold tracking-[0.2em] text-[var(--terracotta)] hover:text-[oklch(0.36_0.07_35)] sm:inline-flex"
            >
              TÜM BLOG
            </Link>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to="/blog/$slug"
                params={{ slug: related.slug }}
                className="group grid overflow-hidden rounded-lg border border-[var(--terracotta)]/14 bg-[oklch(0.98_0.016_78)] sm:grid-cols-[0.36fr_0.64fr]"
              >
                <img
                  src={related.image}
                  alt={related.alt}
                  width={related.imageWidth}
                  height={related.imageHeight}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-[0.66rem] font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                    {related.category}
                  </p>
                  <h3
                    className="mt-3 text-2xl leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                  >
                    {related.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[oklch(0.43_0.035_35)]">
                    {related.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-[1rem] border border-[var(--terracotta)]/14 bg-[oklch(0.98_0.016_78)] p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-[var(--terracotta)]">
              SİTE İÇİ BAĞLANTILAR
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-[oklch(0.32_0.045_35)]">
              <Link
                to="/hakkimizda"
                className="rounded-full bg-[oklch(0.94_0.026_62)] px-4 py-2 hover:text-[var(--terracotta)]"
              >
                Hakkımızda
              </Link>
              <Link
                to="/fizyoterapist"
                className="rounded-full bg-[oklch(0.94_0.026_62)] px-4 py-2 hover:text-[var(--terracotta)]"
              >
                Fzt. Sena ER
              </Link>
              <Link
                to="/yorumlar"
                className="rounded-full bg-[oklch(0.94_0.026_62)] px-4 py-2 hover:text-[var(--terracotta)]"
              >
                Yorumlar
              </Link>
              <Link
                to="/iletisim"
                className="rounded-full bg-[oklch(0.94_0.026_62)] px-4 py-2 hover:text-[var(--terracotta)]"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
