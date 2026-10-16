import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images");

const palettes = {
  sea: { sky: "#b7c9d4", horizon: "#efe6d6", ground: "#d9cbb6", ink: "#0c1c2e", soft: "#1e3348", accent: "#8d7352" },
  atlantic: { sky: "#9eb0bc", horizon: "#e7eef1", ground: "#c5d0d6", ink: "#10202c", soft: "#243846", accent: "#6d8494" },
  city: { sky: "#d5cbbd", horizon: "#f4efe7", ground: "#cfc3b2", ink: "#1a2430", soft: "#2c3846", accent: "#8d7352" },
  warm: { sky: "#e4d5c4", horizon: "#f7f3ec", ground: "#ddcbb6", ink: "#243044", soft: "#3a4654", accent: "#a68462" },
  stone: { sky: "#cfc6ba", horizon: "#f3eee6", ground: "#b7aa9c", ink: "#1c2833", soft: "#31404c", accent: "#8d7352" },
};

const scenes = [
  ["hero.webp", "sea", 4, "Blue Norte"],
  ["historia.webp", "warm", 2, "Historia"],
  ["contacto.webp", "stone", 7, "Contacto"],
  ["cities/malaga.webp", "sea", 3, "Málaga"],
  ["cities/santander.webp", "atlantic", 8, "Santander"],
  ["cities/madrid.webp", "city", 5, "Madrid"],
  ["blog/obra-nueva.webp", "warm", 1, "Obra nueva"],
  ["blog/energia.webp", "sea", 12, "Energía"],
  ["blog/sobre-plano.webp", "city", 10, "Sobre plano"],
];

function scene(palette, seed, caption) {
  const buildings = [];
  let x = 70;
  for (let index = 0; index < 7; index += 1) {
    const width = 120 + ((seed * (index + 3) * 17) % 110);
    const height = 160 + ((seed * (index + 5) * 29) % 340);
    const y = 760 - height;
    const fill = index % 2 === 0 ? palette.ink : palette.soft;
    buildings.push(`<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}"/>`);
    const columns = Math.max(2, Math.floor(width / 36));
    const rows = Math.max(2, Math.floor(height / 42));
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        if ((row + column + seed) % 4 === 0) continue;
        const wx = x + 16 + column * 32;
        const wy = y + 18 + row * 36;
        if (wx + 14 < x + width - 10 && wy + 18 < 748) {
          buildings.push(`<rect x="${wx}" y="${wy}" width="12" height="18" fill="${palette.horizon}" opacity="0.85"/>`);
        }
      }
    }
    x += width + 22;
    if (x > 1500) break;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${palette.sky}"/>
      <stop offset="62%" stop-color="${palette.horizon}"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#sky)"/>
  <circle cx="1280" cy="180" r="70" fill="${palette.accent}" opacity="0.35"/>
  <rect y="760" width="1600" height="240" fill="${palette.ground}"/>
  ${buildings.join("\n  ")}
  <rect x="64" y="860" width="420" height="46" fill="${palette.ink}" opacity="0.88"/>
  <text x="86" y="890" fill="${palette.horizon}" font-family="Georgia, serif" font-size="26">${caption} · fotografía pendiente</text>
</svg>`;
}

for (const [file, tone, seed, caption] of scenes) {
  const target = path.join(root, file);
  await mkdir(path.dirname(target), { recursive: true });
  const svg = scene(palettes[tone], seed, caption);
  await sharp(Buffer.from(svg)).webp({ quality: 82 }).toFile(target);
  await writeFile(target.replace(/\.webp$/, ".svg"), svg);
  console.log(file);
}
