import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Favicon SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <circle cx="50" cy="50" r="48" fill="#000000"/>
  <circle cx="50" cy="50" r="36" stroke="#ffffff" stroke-width="4" stroke-opacity="0.8"/>
  <circle cx="50" cy="50" r="16" stroke="#ffffff" stroke-width="3" stroke-opacity="0.9"/>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);

// 2. Avatar SVGs/PNGs (Clean monochrome minimalist avatar designs)
const makeAvatarSvg = (seed, detail) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" fill="#111111"/>
  <circle cx="50" cy="50" r="50" fill="#181818"/>
  <circle cx="50" cy="38" r="18" fill="#ffffff" fill-opacity="0.85"/>
  <path d="M22 84 C22 64 36 58 50 58 C64 58 78 64 78 84" fill="#ffffff" fill-opacity="0.85"/>
  ${detail}
</svg>`;

const avatar1 = makeAvatarSvg(1, `<circle cx="50" cy="38" r="10" fill="#111111" fill-opacity="0.2"/>`);
const avatar2 = makeAvatarSvg(2, `<rect x="42" y="24" width="16" height="4" rx="2" fill="#ffffff" fill-opacity="0.9"/>`);
const avatar3 = makeAvatarSvg(3, `<circle cx="50" cy="36" r="14" stroke="#000" stroke-width="2" fill="none"/>`);

fs.writeFileSync(path.join(publicDir, 'avatar-1.svg'), avatar1);
fs.writeFileSync(path.join(publicDir, 'avatar-2.svg'), avatar2);
fs.writeFileSync(path.join(publicDir, 'avatar-3.svg'), avatar3);

// 3. Platform Icon SVGs (200x200 monochrome minimalist icons)
// ChatGPT icon
const chatgptIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="36" fill="#090909" stroke="#222" stroke-width="1.5"/>
  <g transform="translate(50, 50) scale(4.16)">
    <path d="M22.28 9.8a6.2 6.2 0 0 0-.52-4.93 6.3 6.3 0 0 0-6.49-3.13 6.23 6.23 0 0 0-4.63-2.07 6.3 6.3 0 0 0-5.99 4.35 6.2 6.2 0 0 0-4.08 1.95 6.3 6.3 0 0 0-1.57 6.13 6.2 6.2 0 0 0-3.56 3.05 6.3 6.3 0 0 0 .91 7.15 6.2 6.2 0 0 0 .52 4.93 6.3 6.3 0 0 0 6.49 3.13 6.23 6.23 0 0 0 4.63 2.07 6.3 6.3 0 0 0 5.99-4.35 6.2 6.2 0 0 0 4.08-1.95 6.3 6.3 0 0 0 1.57-6.13 6.2 6.2 0 0 0 3.56-3.05 6.3 6.3 0 0 0-.91-7.15z" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12 9v6M9.4 10.5l5.2 3M9.4 13.5l5.2-3" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
  </g>
</svg>`;

// Perplexity icon
const perplexityIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="36" fill="#090909" stroke="#222" stroke-width="1.5"/>
  <g transform="translate(52, 52) scale(4)">
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round"/>
    <rect x="7" y="7" width="10" height="10" rx="2" stroke="#ffffff" stroke-width="1.3" fill="#141414"/>
    <circle cx="12" cy="12" r="2" fill="#ffffff"/>
  </g>
</svg>`;

// Google AI icon
const googleIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="36" fill="#090909" stroke="#222" stroke-width="1.5"/>
  <g transform="translate(50, 50) scale(4.16)">
    <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="#ffffff" fill-opacity="0.95"/>
    <path d="M18 18C18 19.66 16.66 21 15 21C16.66 21 18 22.34 18 24C18 22.34 19.34 21 21 21C19.34 21 18 19.66 18 18Z" fill="#ffffff" fill-opacity="0.6"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'icon-chatgpt.svg'), chatgptIconSvg);
fs.writeFileSync(path.join(publicDir, 'icon-perplexity.svg'), perplexityIconSvg);
fs.writeFileSync(path.join(publicDir, 'icon-google.svg'), googleIconSvg);

// Also create PNG fallback aliases / copies
fs.writeFileSync(path.join(publicDir, 'icon-chatgpt.png'), chatgptIconSvg);
fs.writeFileSync(path.join(publicDir, 'icon-perplexity.png'), perplexityIconSvg);
fs.writeFileSync(path.join(publicDir, 'icon-google.png'), googleIconSvg);
fs.writeFileSync(path.join(publicDir, 'avatar-1.png'), avatar1);
fs.writeFileSync(path.join(publicDir, 'avatar-2.png'), avatar2);
fs.writeFileSync(path.join(publicDir, 'avatar-3.png'), avatar3);

console.log('Assets created successfully in public directory.');
