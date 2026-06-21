import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Quote } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { canonicalLink, pageStructuredData } from "@/lib/seo";
import { Footer } from "@/routes/index";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | Fem'n House" },
      {
        name: "description",
        content:
          "Fem'n House Beylikdüzü Centro'da fizyoterapi danışmanlığı ve klinik pilatesi aynı çatı altında sunar.",
      },
    ],
    links: [canonicalLink("/hakkimizda")],
    scripts: pageStructuredData({
      path: "/hakkimizda",
      name: "Hakkimizda | Fem'n House",
      description:
        "Fem'n House Beylikduzu Centro'da fizyoterapi danismanligi ve klinik pilatesi ayni cati altinda sunar.",
      breadcrumbs: [
        { name: "Ana Sayfa", path: "/" },
        { name: "Hakkimizda", path: "/hakkimizda" },
      ],
    }),
  }),
  component: HakkimizdaPage,
});

const offerItems = [
  "Klinik pilates",
  "Reformer dersleri",
  "Manuel terapi",
  "Hamile pilatesi",
  "Postür analizi",
  "Ağrı yönetimi",
];

function HakkimizdaPage() {
  return (
    <main className="bg-[var(--cream)] text-[oklch(0.28_0.045_35)]">
      <SiteHeader />

      <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[oklch(0.84_0.012_70)] px-6 text-center">
        <img
          src="/optimized/gallery-01.webp"
          alt=""
          width={791}
          height={763}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-right opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-[oklch(0.86_0.012_72)]/70" />
        <div className="relative z-10">
          <h1
            className="text-5xl font-semibold leading-tight text-[oklch(0.28_0.035_35)] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Nefes Al. Güçlen. Dengeye Gel.
          </h1>
          <p className="mt-5 text-base font-semibold tracking-[0.22em] text-[oklch(0.34_0.035_35)]">
            FEM'N HOUSE
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.98_0.016_78)] px-6 py-24 sm:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <div>
            <h2
              className="text-4xl leading-tight text-[oklch(0.28_0.045_35)] sm:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Pilates ve Fizyoterapiye
              <br />
              Tutkuyla Bağlıyız
            </h2>
            <div className="mt-9 space-y-1">
              <span className="block h-0.5 w-24 bg-[oklch(0.28_0.035_35)]" />
              <span className="block h-0.5 w-24 bg-[oklch(0.28_0.035_35)]" />
            </div>
          </div>

          <div className="max-w-4xl text-base leading-8 text-[oklch(0.48_0.025_35)] sm:text-lg">
            <p>
              Fem'n House, bedeni yalnızca hareket eden bir yapı olarak değil; nefes, duruş,
              alışkanlık ve yaşam ritmiyle birlikte ele alan bir fizyoterapi ve pilates merkezidir.
              Her seansa önce bedeni dinleyerek başlarız; ağrıyı, postürü, kuvvet dengesini ve
              kişinin günlük ihtiyaçlarını birlikte değerlendiririz.
            </p>
            <p className="mt-5">
              Beylikdüzü Centro'daki stüdyomuzda klinik pilates, reformer pilates, manuel terapi ve
              hamile pilatesi kişiye özel planlanır. Amacımız sadece egzersiz değil; güvenli, sakin
              ve sürdürülebilir bir iyilik hali oluşturmaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="grid min-h-[540px] grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center bg-[oklch(0.25_0.035_295)] px-6 py-20 text-white sm:py-24 lg:px-20">
          <div className="max-w-3xl">
            <h2
              className="text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Neler Sunuyoruz
            </h2>
            <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-white/82 sm:text-lg">
              Kişiye özel değerlendirme, kontrollü egzersiz ve fizyoterapist eşliğinde güvenli seans
              akışıyla bedende kalıcı farkındalık oluşturmayı hedefliyoruz.
            </p>

            <div className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {offerItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-base font-semibold">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--terracotta)] text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img
          src="/optimized/gallery-05.webp"
          alt="Fem'n House manuel terapi seansı"
          width={960}
          height={960}
          loading="lazy"
          decoding="async"
          className="h-full min-h-[420px] w-full object-cover"
        />
      </section>

      <section className="grid min-h-[520px] grid-cols-1 lg:grid-cols-2">
        <img
          src="/optimized/hero-pilates.webp"
          alt="Fem'n House stüdyo atmosferi"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="h-full min-h-[420px] w-full object-cover"
        />

        <div className="flex items-center bg-[oklch(0.93_0.01_80)] px-6 py-20 sm:py-24 lg:px-20">
          <div className="max-w-3xl">
            <h2
              className="text-4xl leading-tight text-[oklch(0.3_0.035_35)] sm:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Mutlu Danışanlar
            </h2>

            <div className="mt-10 flex items-center gap-5">
              <img
                src="/optimized/gallery-12.webp"
                alt="Fem'n House danışan deneyimi"
                width={368}
                height={368}
                loading="lazy"
                decoding="async"
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-[oklch(0.28_0.045_35)]">E. Ç.</p>
                <p className="mt-1 text-base font-medium text-[var(--terracotta)]">
                  Google yorumları
                </p>
              </div>
            </div>

            <p className="mt-9 text-base leading-8 text-[oklch(0.52_0.025_35)] sm:text-lg">
              Arkadaşımla birlikte Sena hocadan düet ders alıyoruz. İlk başladığımda biraz endişeli
              ve çekingendim ama Sena hoca o kadar ilgili, samimi ve yardımcı ki her ders kendimi
              daha güçlü ve rahat hissediyorum.
            </p>

            <Quote className="mt-10 h-7 w-7 text-[var(--terracotta)]" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
