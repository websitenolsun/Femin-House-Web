import {
  Activity,
  ArrowUpRight,
  Baby,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Waves,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Footer } from "@/routes/index";

const whatsappUrl = "https://wa.me/905302250997";

const specialties = [
  {
    icon: HeartPulse,
    title: "Manuel Terapi & Klinik Egzersiz",
    text: "Kas ve eklem sistemindeki disfonksiyonları tamamen ellerin iyileştirici gücü ve doğru hareket analiziyle tedavi etme.",
  },
  {
    icon: Activity,
    title: "Bel ve Boyun Ağrıları",
    text: "Fıtık, düzleşme ve kronik ağrılara yönelik koruyucu ve yenileyici yaklaşımlar.",
  },
  {
    icon: ShieldCheck,
    title: "Pelvik Taban Terapisi",
    text: "Yaşam kalitesini doğrudan etkileyen pelvik bölge problemlerinin ağrı ve fonksiyon bozuklukları odağında hassasiyetle rehabilitasyonu.",
  },
  {
    icon: Waves,
    title: "Nefes ve Diyafram Rektifikasyonu",
    text: "Doğru nefes mekaniğinin yeniden kazandırılması ile postürün düzeltilmesi ve genel enerjinin artırılması.",
  },
  {
    icon: Stethoscope,
    title: "Skolyoz ve Postür Bozuklukları",
    text: "Omurga sağlığını geri kazandırmaya ve duruş bozukluklarını eşitlemeye yönelik özel programlar.",
  },
  {
    icon: Baby,
    title: "Cerrahi Sonrası Rehabilitasyon",
    text: "Operasyonlar sonrasında güvenli, aşamalı ve fonksiyonel geri dönüş seansları.",
  },
];

const profileStats = ["23 uzmanlık eğitimi", "300+ danışan", "Birebir ve düet seans"];

export function SenaProfilePage() {
  return (
    <main className="bg-[var(--cream)] text-[oklch(0.28_0.045_35)]">
      <SiteHeader />

      <section className="relative flex min-h-[330px] items-center overflow-hidden bg-[oklch(0.86_0.02_72)] px-6 lg:px-20">
        <img
          src="/optimized/sena-profile-hero.webp"
          alt=""
          width={1400}
          height={312}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.28_0.045_35)]/72 via-[oklch(0.45_0.05_45)]/42 to-[oklch(0.96_0.02_75)]/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-[var(--rosegold)]">
            FİZYOTERAPİST
          </p>
          <h1
            className="mt-5 text-5xl leading-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Fzt. Sena ER
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <div className="rounded-[1.25rem] border border-[var(--terracotta)]/15 bg-white/58 p-4 shadow-[0_24px_70px_-42px_rgba(80,40,20,0.55)]">
              <div className="relative overflow-hidden rounded-2xl bg-[oklch(0.92_0.018_72)]">
                <img
                  src="/optimized/sena-studio.webp"
                  alt="Fzt. Sena ER"
                  width={900}
                  height={1112}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.04_35)]/45 via-transparent to-transparent" />
              </div>

              <div className="mt-6 px-2 pb-3">
                <h2
                  className="text-3xl leading-tight text-[oklch(0.27_0.045_35)]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  Fzt. Sena ER
                </h2>
                <p className="mt-1 text-sm font-semibold tracking-[0.18em] text-[var(--terracotta)]">
                  Fizyoterapist
                </p>
                <p className="mt-4 text-sm leading-7 text-[oklch(0.43_0.035_35)]">
                  Manuel terapi, klinik egzersiz, nefes ve postür odaklı bütüncül yaklaşım.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <img
                src="/sena-manuel-terapi.jpeg"
                alt="Sena ER manuel terapi seansı"
                width={720}
                height={1280}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] rounded-2xl object-cover object-[center_46%] shadow-[0_18px_50px_-32px_rgba(80,40,20,0.45)]"
              />
              <img
                src="/optimized/sena-nefes.webp"
                alt="Sena ER nefes ve postür çalışması"
                width={720}
                height={1280}
                loading="lazy"
                decoding="async"
                className="mt-8 aspect-[3/4] rounded-2xl object-cover object-center shadow-[0_18px_50px_-32px_rgba(80,40,20,0.45)]"
              />
            </div>
          </aside>

          <div>
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.28em] text-[var(--terracotta)]">
                FZT. SENA ER
              </p>
              <h2
                className="mt-3 text-4xl leading-tight text-[oklch(0.27_0.045_35)] sm:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                Fizyoterapist Sena ER
              </h2>
            </div>

            <div className="rounded-[1.1rem] border border-[var(--terracotta)]/13 bg-white/62 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-[oklch(0.27_0.045_35)]">
                Hakkımda: Fzt. Sena ER
              </h3>
              <p className="mt-5 text-base leading-8 text-[oklch(0.43_0.035_35)] sm:text-lg">
                2020 yılında Bezmialem Vakıf Üniversitesi Fizyoterapi ve Rehabilitasyon
                Bölümü'nden mezun oldum. Mezuniyetimden itibaren mesleki gelişimime önem vererek
                pelvik taban rehabilitasyonu, manuel terapi, temporomandibular eklem (çene eklemi)
                ve omurga kaynaklı kas-iskelet sistemi şikayetlerine yönelik değerlendirme ve
                uygulama yaklaşımları ile çeşitli tamamlayıcı uygulamalar alanlarında eğitimler
                aldım.
              </p>
              <p className="mt-5 text-base leading-8 text-[oklch(0.43_0.035_35)] sm:text-lg">
                Yaklaşık 6 yıldır aktif olarak danışan kabul etmekteyim. Klinik pratiğimde bireyin
                ihtiyaçları doğrultusunda değerlendirme yaparak, fizyoterapi ve rehabilitasyon
                süreçlerini güncel bilimsel bilgiler ışığında planlamaya özen gösteriyorum.
              </p>
              <p className="mt-5 text-base leading-8 text-[oklch(0.43_0.035_35)] sm:text-lg">
                Mesleki yaklaşımımda insan bedenini bir bütün olarak ele alıyor; hareket sistemi,
                yaşam alışkanlıkları ve bireysel gereksinimleri göz önünde bulundurarak kişiye özgü
                değerlendirme süreçleri yürütüyorum. Amacım, danışanlarıma fizyoterapi ve
                rehabilitasyon sürecinde rehberlik etmek ve fonksiyonel iyilik halinin
                desteklenmesine katkı sağlamaktır.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {profileStats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-xl border border-[var(--terracotta)]/14 bg-[oklch(0.98_0.016_78)] px-4 py-3 text-sm font-semibold text-[oklch(0.34_0.04_35)]"
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--terracotta)]" />
                <span className="text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--terracotta)]">
                  UZMANLIK VE HİZMET ALANLARIMIZ
                </span>
              </div>

              <p className="max-w-4xl text-base leading-8 text-[oklch(0.43_0.035_35)] sm:text-lg">
                Her bedenin ihtiyacı ve iyileşme süreci farklıdır. Seanslarımızda kişiye özel,
                bütüncül bir değerlendirme ile aşağıdaki alanlara odaklanıyoruz:
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {specialties.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="rounded-[1rem] border border-[var(--terracotta)]/13 bg-white/62 p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--terracotta)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[oklch(0.27_0.045_35)]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[oklch(0.44_0.032_35)]">{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.1rem] bg-[oklch(0.27_0.04_35)] text-white">
              <div className="grid lg:grid-cols-[0.58fr_0.42fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-[var(--rosegold)]">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-xs font-semibold tracking-[0.24em]">
                      HIZLI, KALİTELİ VE KALICI SONUÇLAR
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg">
                    Tedavi süreçlerimizi yalnızca klinik uygulamalarla sınırlı tutmuyor; uzmanlık
                    gerektiren fizyoterapi yöntemlerini profesyonel masaj ve bütünsel spor
                    egzersizleriyle destekliyoruz. Uyguladığımız bu entegre yaklaşım, süreçten
                    alınan verimin hızını ve kalitesini maksimum seviyeye çıkararak yüksek danışan
                    memnuniyeti sağlar.
                  </p>
                  <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg">
                    Hedeflerinize daha odaklı ve güvenli bir şekilde ulaşabilmeniz için
                    seanslarımızı Birebir Özel ve Düet İki Kişilik ders formatlarında
                    gerçekleştiriyoruz. Sağlıklı, güçlü ve ağrısız bir bedene kavuşmak için bu
                    yolculuğa birlikte adım atabiliriz.
                  </p>

                  <Button
                    asChild
                    className="mt-8 h-12 rounded-full bg-[var(--terracotta)] px-7 text-xs font-semibold tracking-[0.18em] text-white hover:bg-[oklch(0.55_0.14_35)]"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      RANDEVU AL <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <img
                  src="/optimized/sena-leg-therapy.webp"
                  alt="Sena ER manuel terapi uygulaması"
                  width={790}
                  height={1357}
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-[320px] w-full object-cover object-center opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
