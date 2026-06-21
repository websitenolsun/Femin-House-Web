import { execFile } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const execFileAsync = promisify(execFile);
const rootDir = process.cwd();
const outDir = path.join(rootDir, "public", "optimized");

const imageAssets = [
  { input: "src/assets/hero-pilates.jpg", name: "hero-pilates", width: 1600, quality: 86 },
  { input: "src/assets/fizyoterapist.jpg", name: "fizyoterapist", width: 900, quality: 84 },
  {
    input: "public/blog-hamile-pilatesi.jpg",
    name: "blog-hamile-pilatesi",
    width: 960,
    quality: 82,
  },
  { input: "public/blog-omuzda-sikisma.png", name: "blog-omuzda-sikisma", width: 960, quality: 82 },
  {
    input: "public/blog-diastazis-rekti-manuel-yaklasimlar.png",
    name: "blog-diastazis-rekti-manuel-yaklasimlar",
    width: 960,
    quality: 82,
  },
  {
    input: "public/blogg-kurek-kemigi-kulunc-fibrozit.png",
    name: "blogg-kurek-kemigi-kulunc-fibrozit",
    width: 960,
    quality: 82,
  },
  {
    input: "public/blog-diz-agrisi-egzersiz-rehabilitasyonu.png",
    name: "blog-diz-agrisi-egzersiz-rehabilitasyonu",
    width: 960,
    quality: 82,
  },
  {
    input: "public/blog-quadratus-lumborum-bel-agrisia.png",
    name: "blog-quadratus-lumborum-bel-agrisia",
    width: 960,
    quality: 82,
  },
  {
    input: "public/blog-boyun-kaslari-cene-eklemi-tmjz.png",
    name: "blog-boyun-kaslari-cene-eklemi-tmjz",
    width: 960,
    quality: 82,
  },
  {
    input: "public/blog-scm-kasi-dis-sikma-kulak-cinlamasi.png",
    name: "blog-scm-kasi-dis-sikma-kulak-cinlamasi",
    width: 960,
    quality: 82,
  },
  { input: "public/gallery-01.jpg", name: "gallery-01", width: 960, quality: 82 },
  { input: "public/gallery-02.jpg", name: "gallery-02", width: 960, quality: 82 },
  { input: "public/gallery-03.jpg", name: "gallery-03", width: 960, quality: 82 },
  { input: "public/gallery-05.jpg", name: "gallery-05", width: 960, quality: 82 },
  { input: "public/gallery-06.jpg", name: "gallery-06", width: 960, quality: 82 },
  { input: "public/gallery-07.jpg", name: "gallery-07", width: 960, quality: 82 },
  { input: "public/gallery-08.jpg", name: "gallery-08", width: 960, quality: 82 },
  { input: "public/gallery-09.jpg", name: "gallery-09", width: 960, quality: 82 },
  { input: "public/gallery-10.jpg", name: "gallery-10", width: 960, quality: 82 },
  { input: "public/gallery-11.jpg", name: "gallery-11", width: 960, quality: 82 },
  { input: "public/gallery-12.jpg", name: "gallery-12", width: 960, quality: 82 },
  { input: "public/sena-profile-hero.jpg", name: "sena-profile-hero", width: 1400, quality: 84 },
  { input: "public/sena-studio.jpg", name: "sena-studio", width: 900, quality: 82 },
  { input: "public/sena-nefes.jpg", name: "sena-nefes", width: 900, quality: 82 },
  { input: "public/sena-leg-therapy.png", name: "sena-leg-therapy", width: 900, quality: 82 },
];

async function optimizeImage({ input, name, width, quality }) {
  const source = path.join(rootDir, input);
  const base = sharp(source).rotate().resize({ width, withoutEnlargement: true });
  const webpPath = path.join(outDir, `${name}.webp`);
  const avifPath = path.join(outDir, `${name}.avif`);

  await base.clone().webp({ quality, effort: 5 }).toFile(webpPath);
  await base
    .clone()
    .avif({ quality: Math.max(quality - 10, 65), effort: 5 })
    .toFile(avifPath);

  const metadata = await sharp(webpPath).metadata();
  return {
    input,
    webp: path.relative(rootDir, webpPath),
    avif: path.relative(rootDir, avifPath),
    width: metadata.width,
    height: metadata.height,
  };
}

async function optimizeHeroVideo() {
  try {
    await execFileAsync("ffmpeg", ["-version"]);
  } catch {
    return {
      skipped: true,
      reason:
        "ffmpeg bulunamadi; video optimizasyonu icin TODO: ffmpeg kuruldugunda WebM/MP4 ciktilari uret.",
    };
  }

  const input = path.join(rootDir, "public", "hero-pilates.mp4");
  const poster = path.join(outDir, "hero-pilates-poster.jpg");
  const webm = path.join(outDir, "hero-pilates.webm");

  await execFileAsync("ffmpeg", [
    "-y",
    "-i",
    input,
    "-vf",
    "scale='min(1080,iw)':-2",
    "-c:v",
    "libvpx-vp9",
    "-b:v",
    "0",
    "-crf",
    "34",
    "-an",
    webm,
  ]);
  await execFileAsync("ffmpeg", ["-y", "-ss", "00:00:01", "-i", input, "-frames:v", "1", poster]);
  return {
    skipped: false,
    webm: path.relative(rootDir, webm),
    poster: path.relative(rootDir, poster),
  };
}

await mkdir(outDir, { recursive: true });

const results = [];
for (const asset of imageAssets) {
  results.push(await optimizeImage(asset));
}

const video = await optimizeHeroVideo();

console.table(results);
if (video.skipped) {
  console.warn(video.reason);
} else {
  console.log(video);
}
