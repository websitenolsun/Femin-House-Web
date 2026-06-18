import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "ANASAYFA", href: "/" },
  { label: "HAKKIMIZDA", href: "/hakkimizda" },
  { label: "EĞİTMENLERİMİZ", href: "/fizyoterapist" },
  { label: "YORUMLAR", href: "/yorumlar" },
  { label: "BLOG", href: "/blog" },
  { label: "FOTO GALERİ", href: "/galeri" },
  { label: "İLETİŞİM", href: "/iletisim" },
];

type SiteHeaderProps = {
  overlay?: boolean;
};

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={
        overlay
          ? "relative z-30"
          : "relative z-30 border-b border-[var(--terracotta)]/12 bg-[oklch(0.98_0.016_78)]"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a
          href="/"
          className={
            overlay
              ? "text-2xl tracking-[0.3em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] lg:text-3xl lg:text-[oklch(0.35_0.05_35)] lg:drop-shadow-none"
              : "text-2xl tracking-[0.3em] text-[oklch(0.35_0.05_35)] lg:text-3xl"
          }
          style={{ fontFamily: "'Italiana', serif" }}
        >
          FEM'N HOUSE
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[0.7rem] font-medium tracking-[0.2em] text-[oklch(0.35_0.04_35)] transition-colors hover:text-[var(--terracotta)]"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--terracotta)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={
            overlay
              ? "rounded-full border border-white/40 p-2 text-white backdrop-blur-md lg:hidden"
              : "rounded-full border border-[var(--terracotta)]/25 p-2 text-[oklch(0.35_0.05_35)] lg:hidden"
          }
          aria-label="Menüyü aç"
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className={
            overlay
              ? "border-t border-white/15 bg-black/55 backdrop-blur-md lg:hidden"
              : "border-t border-[var(--terracotta)]/12 bg-[oklch(0.98_0.016_78)] lg:hidden"
          }
        >
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  overlay
                    ? "py-3 text-sm font-medium tracking-[0.18em] text-white/90 hover:text-[var(--rosegold)]"
                    : "py-3 text-sm font-medium tracking-[0.18em] text-[oklch(0.35_0.05_35)] hover:text-[var(--terracotta)]"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
