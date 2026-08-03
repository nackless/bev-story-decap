import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return false;

  const buffer = await fs.readFile(filePath);
  const image = sharp(buffer).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });

  let optimized;
  if (ext === '.png') {
    optimized = await image.png({ compressionLevel: 9, adaptiveFiltering: true, palette: false }).toBuffer();
  } else if (ext === '.webp') {
    optimized = await image.webp({ quality: JPEG_QUALITY }).toBuffer();
  } else {
    optimized = await image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  }

  if (optimized.length < buffer.length) {
    await fs.writeFile(filePath, optimized);
    console.log(`Optimized ${filePath} (${buffer.length} → ${optimized.length} bytes)`);
    return true;
  }

  return false;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    if (IMAGE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  const targets = process.argv.slice(2);
  if (!targets.length) {
    console.error('Usage: node scripts/optimize-images.js <dir> [dir...]');
    process.exit(1);
  }

  for (const target of targets) {
    await walk(path.resolve(target));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});