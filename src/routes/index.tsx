import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowUpRight,
  Baby,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { canonicalLink, pageStructuredData, seoBusiness } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fem'n House | Beylikdüzü Fizyoterapi & Klinik Pilates" },
      {
        name: "description",
        content:
          "Fem'n House Beylikdüzü Centro'da fizyoterapi danışmanlığı, klinik pilates, hamile pilatesi, manuel terapi ve ağrı yönetimi sunar.",
      },
      { property: "og:title", content: "Fem'n House | Fizyoterapi & Pilates" },
      {
        property: "og:description",
        content:
          "Fizyoterapi danışmanlığı ve premium pilates deneyimi. Derin bir nefes al, harekete geç.",
      },
    ],
    links: [canonicalLink("/")],
    scripts: pageStructuredData({
      path: "/",
      name: "Fem'n House",
      description: "Beylikduzu Fizyoterapi ve Klinik Pilates Merkezi",
    }),
  }),
  component: Index,
});

const whatsappUrl = seoBusiness.whatsappUrl;
const phoneDisplay = seoBusiness.phoneDisplay;
const mapsUrl = seoBusiness.mapUrl;
const heroPilatesImg = "/optimized/hero-pilates.webp";
const fizyoterapistImg = "/optimized/fizyoterapist.webp";

const trainerStrengths = [
  "Fizyoterapist eşliğinde güvenli egzersiz",
  "Ağrı, postür ve hareket analiziyle kişiye özel plan",
  "Reformer, klinik pilates ve manuel terapi odağı",
  "Hamile pilatesinde sakin, kontrollü süreç yönetimi",
];

const serviceHighlights = [
  {
    icon: Activity,
    title: "Klinik Pilates",
    text: "Reformer ekipmanıyla kontrollü güçlenme, esneklik ve omurga desteği.",
  },
  {
    icon: Stethoscope,
    title: "Fizyoterapi Danışmanlığı",
    text: "Postür, ağrı ve hareket paternlerini değerlendirerek kişiye özel yol haritası.",
  },
  {
    icon: HeartPulse,
    title: "Manuel Terapi",
    text: "Boyun, sırt, bel ve omuz bölgesinde rahatlama hedefleyen profesyonel yaklaşım.",
  },
  {
    icon: Baby,
    title: "Hamile Pilatesi",
    text: "Gebelik dönemine uygun, güven veren ve nefesle desteklenen seans akışı.",
  },
  {
    icon: ShieldCheck,
    title: "Postür ve Skolyoz Desteği",
    text: "Duruş farkındalığı, kas dengesi ve sürdürülebilir egzersiz alışkanlığı.",
  },
  {
    icon: Sparkles,
    title: "Medikal Masaj",
    text: "Yoğunluk, tutulma ve kas hassasiyetlerinde bedeni dinleyen dokunuş.",
  },
];

const reviews = [
  {
    name: "E. Ç.",
    time: "5 ay önce",
    text: "Arkadaşımla birlikte Sena hocadan düet ders alıyoruz. İlk başladığımda endişeli ve çekingendim ama Sena hoca çok ilgili, samimi ve yardımcı.",
  },
  {
    name: "Sude Kötügörmez",
    time: "5 ay önce",
    text: "Sena Hanım'a birkaç ayda bir medikal masaja gidiyordum. Bel tutulmamı manuel terapi ile kısa sürede rahatlattı.",
  },
  {
    name: "Buse Arslan",
    time: "8 ay önce",
    text: "5 aydır Sena hocadan pilates dersi alıyorum ve çok memnunum. Derslerdeki ilgi ve özeni beni kendine hayran bıraktı.",
  },
  {
    name: "Andac Gurbilek",
    time: "6 ay önce",
    text: "Yaklaşık 6 aydır Sena hocayla pilatese geliyorum. İlgili, sabırlı ve sıcak yaklaşımıyla iyi ki dediğim bir deneyim oldu.",
  },
  {
    name: "f ile efşan",
    time: "5 ay önce",
    text: "Boyun, omuz ve sırt ağrılarım vardı. Egzersizlerle kaslarımın güçlendiğini ben bile hissediyorum.",
  },
  {
    name: "İREM CAN",
    time: "5 ay önce",
    text: "Femin House'dan düzenli düet dersler alıyorum. Sena hoca her hareketimizi özellikle kontrol ediyor, çok memnunuz.",
  },
  {
    name: "Deniz Onur Kurugöl",
    time: "9 ay önce",
    text: "Pilatese başladığımdan beri kendimi hem fiziksel hem ruhsal olarak çok daha iyi hissediyorum.",
  },
  {
    name: "Aslı",
    time: "4 ay önce",
    text: "Rahatsızlığım nedeniyle yollarımız kesişti. Doğru egzersizlerle kendimi hem bedenen hem ruhen daha iyi hissediyorum.",
  },
  {
    name: "Nazmiye Abursu",
    time: "7 ay önce",
    text: "Pilatesi doğru şekilde öğrenmemi sağlayan, ilgisi ve enerjisiyle her derste motive eden hocama teşekkür ederim.",
  },
  {
    name: "Kübra",
    time: "1 yıl önce",
    text: "Skolyoz ameliyatı geçmişim ve eklem sorunlarım olmasına rağmen güvenle devam ettiğim bir merkez.",
  },
  {
    name: "Zeynep Çetiner",
    time: "1 yıl önce",
    text: "Uzun süredir deneyimlediğim bir yer. Pilates yaparken birebir ilgileniyor ve doğru hareketi hissettiriyor.",
  },
  {
    name: "Halide Arslan",
    time: "6 ay önce",
    text: "Hamile pilatesi arayışımda Sena Hanım ile yollarımız kesişti. Verdiği güvenle çok rahat bir süreç geçirdim.",
  },
];

const galleryImages = [
  { src: "/optimized/gallery-01.webp", alt: "Fem'n House stüdyo detayı", width: 791, height: 763 },
  { src: "/optimized/gallery-02.webp", alt: "Fem'n House klinik alanı", width: 368, height: 368 },
  { src: "/optimized/gallery-03.webp", alt: "Hamile pilatesi dersi", width: 960, height: 1707 },
  { src: "/optimized/gallery-05.webp", alt: "Manuel terapi seansı", width: 960, height: 960 },
  {
    src: "/optimized/gallery-06.webp",
    alt: "Reformer pilates egzersizi",
    width: 960,
    height: 1707,
  },
  {
    src: "/optimized/gallery-08.webp",
    alt: "Nefes yönetimi ve fizyoterapi",
    width: 960,
    height: 1280,
  },
  {
    src: "/optimized/gallery-09.webp",
    alt: "Diastazis rekti manuel yaklaşım",
    width: 960,
    height: 1280,
  },
  {
    src: "/optimized/gallery-10.webp",
    alt: "Reformer pilates stüdyo dersi",
    width: 368,
    height: 368,
  },
  {
    src: "/optimized/gallery-12.webp",
    alt: "Fem'n House stüdyo portresi",
    width: 368,
    height: 368,
  },
];

function Index() {
  return (
    <main className="bg-[var(--cream)] text-[oklch(0.28_0.045_35)]">
      <Hero />
      <TrainersSection />
      <AboutSection />
      <ReviewsSection />
      <BlogSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="h-px w-10 bg-[var(--terracotta)]" />
      <span className="text-[0.68rem] font-semibold tracking-[0.36em] text-[var(--terracotta)]">
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="max-w-3xl text-4xl leading-tight text-[oklch(0.28_0.045_35)] sm:text-5xl lg:text-6xl"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
    >
      {children}
    </h2>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[oklch(0.74_0.14_82)]" aria-label="5 yıldız">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export function TrainersSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.98_0.016_78)] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-20">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[1.75rem] border border-[var(--terracotta)]/30" />
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_30px_80px_-35px_rgba(80,40,20,0.45)]">
            <img
              src={fizyoterapistImg}
              alt="Fzt. Sena Er, Fem'n House eğitmeni"
              width={900}
              height={1520}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.045_35)]/58 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/88 p-4 backdrop-blur-md">
              <p className="text-[0.68rem] font-semibold tracking-[0.26em] text-[var(--terracotta)]">
                MANUEL TERAPİ
              </p>
              <p
                className="mt-1 text-2xl text-[oklch(0.28_0.045_35)]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Fzt. Sena Er
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionKicker>HERO SONRASI İKİNCİ SAYFA</SectionKicker>
          <SectionTitle>
            Önce bedeni dinleyen, sonra hareketi kişiye göre kuran yaklaşım.
          </SectionTitle>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[oklch(0.39_0.04_35)] sm:text-lg">
            Fem'n House'ta eğitmen deneyimi yalnızca egzersiz göstermekten ibaret değil. Sena hoca,
            fizyoterapist bakışıyla duruşu, ağrıyı ve hareket kalitesini değerlendirir; seansı
            bedenin o günkü ihtiyacına göre şekillendirir.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trainerStrengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[var(--terracotta)]/15 bg-white/55 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--terracotta)]" />
                <p className="text-sm leading-6 text-[oklch(0.35_0.04_35)]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3 border-y border-[var(--terracotta)]/18 py-6">
            <div>
              <p
                className="text-3xl text-[var(--terracotta)]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                5.0
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.16em] text-[oklch(0.42_0.04_35)]">
                GOOGLE PUANI
              </p>
            </div>
            <div>
              <p
                className="text-3xl text-[var(--terracotta)]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                30
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.16em] text-[oklch(0.42_0.04_35)]">
                YORUM
              </p>
            </div>
            <div>
              <p
                className="text-3xl text-[var(--terracotta)]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                1.6K+
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.16em] text-[oklch(0.42_0.04_35)]">
                TAKİPÇİ
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[var(--terracotta)] px-7 text-xs font-semibold tracking-[0.18em] text-white hover:bg-[oklch(0.55_0.14_35)]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                RANDEVU AL
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[var(--terracotta)]/30 bg-transparent px-7 text-xs font-semibold tracking-[0.18em] text-[oklch(0.3_0.05_35)] hover:bg-white/60"
            >
              <a href="/yorumlar">YORUMLARI OKU</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="bg-[oklch(0.94_0.026_62)] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-20">
        <div>
          <SectionKicker>HAKKIMIZDA</SectionKicker>
          <SectionTitle>
            Beylikdüzü Centro'da sakin, kontrollü ve klinik temelli bir stüdyo.
          </SectionTitle>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[oklch(0.39_0.04_35)] sm:text-lg">
            Fem'n House, fizyoterapi danışmanlığı ile pilatesi aynı çatı altında buluşturur. Amaç
            sadece egzersiz değil; ağrıyı, duruşu, nefesi ve hareket alışkanlıklarını birlikte ele
            alan sürdürülebilir bir iyilik hali kurmaktır.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {serviceHighlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-lg border border-[var(--terracotta)]/14 bg-[oklch(0.98_0.016_78)] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--terracotta)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[oklch(0.29_0.045_35)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[oklch(0.43_0.035_35)]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={heroPilatesImg}
            alt="Fem'n House reformer pilates stüdyosu"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-[0_30px_80px_-35px_rgba(80,40,20,0.45)]"
          />
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-[var(--terracotta)]/15 bg-white/45 p-4">
              <p className="text-xs font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                KONUM
              </p>
              <p className="mt-2 text-sm leading-6">Adnan Kahveci Mahallesi, Centro Beylikdüzü</p>
            </div>
            <div className="rounded-lg border border-[var(--terracotta)]/15 bg-white/45 p-4">
              <p className="text-xs font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                ODAK
              </p>
              <p className="mt-2 text-sm leading-6">
                Klinik pilates, manuel terapi, hamile pilatesi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-[oklch(0.98_0.016_78)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <SectionKicker>GOOGLE YORUMLARI</SectionKicker>
            <SectionTitle>Misafirlerin en çok anlattığı şey: güven, ilgi ve sonuç.</SectionTitle>
          </div>
          <div className="rounded-lg border border-[var(--terracotta)]/16 bg-white/55 p-6">
            <div className="flex flex-wrap items-center gap-4">
              <p
                className="text-5xl text-[var(--terracotta)]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                5.0
              </p>
              <div>
                <Stars />
                <p className="mt-1 text-sm text-[oklch(0.42_0.04_35)]">
                  30 Google yorumu üzerinden, işletme profilindeki güncel sosyal kanıt.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.time}`}
              className="rounded-lg border border-[var(--terracotta)]/14 bg-[oklch(0.96_0.02_75)] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <Stars />
                <Quote className="h-5 w-5 shrink-0 text-[var(--terracotta)]/70" />
              </div>
              <p className="mt-4 text-sm leading-7 text-[oklch(0.36_0.04_35)]">{review.text}</p>
              <div className="mt-5 border-t border-[var(--terracotta)]/12 pt-4">
                <p className="text-sm font-semibold text-[oklch(0.28_0.045_35)]">{review.name}</p>
                <p className="mt-1 text-xs tracking-[0.18em] text-[var(--terracotta)]">
                  5/5 · {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  return (
    <section className="bg-[oklch(0.94_0.026_62)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionKicker>BLOG</SectionKicker>
            <SectionTitle>
              Stüdyodan bilgi notları, beden farkındalığı ve terapi başlıkları.
            </SectionTitle>
          </div>
          <Button
            asChild
            variant="outline"
            className="h-12 w-fit rounded-full border-[var(--terracotta)]/30 bg-transparent px-6 text-xs font-semibold tracking-[0.18em] hover:bg-white/55"
          >
            <a
              href="https://www.instagram.com/feminhouse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((article) => (
            <Link
              key={article.slug}
              to="/blog/$slug"
              params={{ slug: article.slug }}
              className="group overflow-hidden rounded-lg border border-[var(--terracotta)]/14 bg-[oklch(0.98_0.016_78)] transition-transform duration-300 hover:-translate-y-1"
              aria-label={`${article.title} yazısını oku`}
            >
              <img
                src={article.image}
                alt={article.alt}
                width={article.imageWidth}
                height={article.imageHeight}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <p className="text-[0.66rem] font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                  {article.category}
                </p>
                <h3
                  className="mt-3 text-2xl leading-tight text-[oklch(0.28_0.045_35)]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[oklch(0.43_0.035_35)]">
                  {article.summary}
                </p>
                <span className="mt-5 inline-flex items-center text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)]">
                  OKU <ArrowUpRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="bg-[oklch(0.98_0.016_78)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionKicker>FOTO GALERİ</SectionKicker>
            <SectionTitle>Stüdyonun gerçek ritmi: reformer, terapi ve sakin detaylar.</SectionTitle>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`overflow-hidden rounded-lg border border-[var(--terracotta)]/12 bg-white ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
          <a
            href="https://www.instagram.com/feminhouse/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex aspect-square flex-col justify-between overflow-hidden rounded-lg border border-[var(--terracotta)]/14 bg-[oklch(0.94_0.026_62)] p-5 transition-transform duration-300 hover:-translate-y-1"
            aria-label="Fem'n House Instagram hesabını aç"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--terracotta)] text-white">
              <Instagram className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-[0.66rem] font-semibold tracking-[0.24em] text-[var(--terracotta)]">
                @FEMINHOUSE
              </span>
              <span
                className="mt-3 block text-3xl leading-tight text-[oklch(0.28_0.045_35)]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Devamı Instagram'da :)
              </span>
              <span className="mt-5 inline-flex items-center text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--terracotta)]">
                GÖR <ArrowUpRight className="ml-2 h-4 w-4" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-[oklch(0.3_0.045_35)] py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-20">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--rosegold)]" />
            <span className="text-[0.68rem] font-semibold tracking-[0.36em] text-[var(--rosegold)]">
              İLETİŞİM
            </span>
          </div>
          <h2
            className="max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            İlk seans için bedeni dinleyen kısa bir ön görüşme yeterli.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Randevu, uygun saat ve seans türü için WhatsApp üzerinden ulaşabilirsin. Klinik pilates,
            hamile pilatesi, manuel terapi ve fizyoterapi danışmanlığı aynı merkezde planlanır.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[var(--terracotta)] px-7 text-xs font-semibold tracking-[0.18em] text-white hover:bg-[oklch(0.55_0.14_35)]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WHATSAPP
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/25 bg-transparent px-7 text-xs font-semibold tracking-[0.18em] text-white hover:bg-white/10 hover:text-white"
            >
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" />
                YOL TARİFİ
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ContactItem icon={MapPin} label="Adres">
            Adnan Kahveci Mahallesi Alemdağ Caddesi, Centro A Blok No:33, 34528 Beylikdüzü/İstanbul
          </ContactItem>
          <ContactItem icon={Phone} label="Telefon">
            <a href="tel:+905302250997" className="hover:text-[var(--rosegold)]">
              {phoneDisplay}
            </a>
          </ContactItem>
          <ContactItem icon={Clock3} label="Randevu">
            Seanslar randevu ile planlanır. Güncel uygunluk için WhatsApp üzerinden yazabilirsin.
          </ContactItem>
          <ContactItem icon={Instagram} label="Instagram">
            <a
              href="https://www.instagram.com/feminhouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--rosegold)]"
            >
              @feminhouse
            </a>
          </ContactItem>
          <ContactItem icon={Clock3} label="Calisma Saatleri">
            {seoBusiness.openingHoursDisplay.map((item) => (
              <span key={item} className="block">
                {item}
              </span>
            ))}
          </ContactItem>
          <ContactItem icon={MapPin} label="Harita">
            <a
              href={seoBusiness.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--rosegold)]"
            >
              Haritada Yol Tarifi Al
            </a>
          </ContactItem>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.06] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--rosegold)]">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-xs font-semibold tracking-[0.24em] text-[var(--rosegold)]">{label}</p>
      <div className="mt-3 text-sm leading-7 text-white/78">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--terracotta)]/12 bg-[oklch(0.98_0.016_78)] px-6 py-8 text-center">
      <p
        className="text-2xl tracking-[0.28em] text-[oklch(0.35_0.05_35)]"
        style={{ fontFamily: "'Italiana', serif" }}
      >
        FEM'N HOUSE
      </p>
      <p className="mt-3 text-xs tracking-[0.18em] text-[oklch(0.45_0.04_35)]">
        FİZYOTERAPİ DANIŞMANLIĞI & PİLATES MERKEZİ
      </p>
      <div className="mx-auto mt-8 grid max-w-5xl gap-6 border-t border-[var(--terracotta)]/12 pt-6 text-sm leading-7 text-[oklch(0.38_0.04_35)] md:grid-cols-3 md:text-left">
        <div>
          <p className="font-semibold text-[oklch(0.3_0.05_35)]">Fem'n House</p>
          <p className="mt-2">{seoBusiness.addressText}</p>
        </div>
        <div>
          <p className="font-semibold text-[oklch(0.3_0.05_35)]">İletişim</p>
          <a href="tel:+905302250997" className="mt-2 block hover:text-[var(--terracotta)]">
            {seoBusiness.phoneDisplay}
          </a>
          <a
            href={seoBusiness.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[var(--terracotta)]"
          >
            Instagram
          </a>
          <a
            href={seoBusiness.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[var(--terracotta)]"
          >
            Haritada Yol Tarifi Al
          </a>
        </div>
        <div>
          <p className="font-semibold text-[oklch(0.3_0.05_35)]">Çalışma Saatleri</p>
          {seoBusiness.openingHoursDisplay.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
