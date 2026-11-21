/**
 * Industrial Fallback Graphic Generator
 * Generates an SVG Data URI in the exact brand palette (#101D2C, #F28C28)
 * if any external image fails to load.
 */

export function getIndustrialFallback(title = 'Industrial Fabrication') {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none">
  <rect width="800" height="600" fill="#101D2C"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(242, 140, 40, 0.12)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#grid)" />
  <circle cx="400" cy="270" r="140" stroke="#F28C28" stroke-width="2" stroke-dasharray="6 6" fill="#172332"/>
  <rect x="330" y="190" width="140" height="160" rx="20" stroke="#FFFFFF" stroke-width="3" fill="#202A35"/>
  <ellipse cx="400" cy="190" rx="70" ry="24" stroke="#F28C28" stroke-width="2.5" fill="#2A3644"/>
  <ellipse cx="400" cy="350" rx="70" ry="24" stroke="#FFFFFF" stroke-width="2.5" fill="#202A35"/>
  <line x1="400" y1="140" x2="400" y2="190" stroke="#F28C28" stroke-width="3"/>
  <circle cx="400" cy="140" r="6" fill="#F28C28"/>
  <line x1="280" y1="420" x2="520" y2="420" stroke="#F28C28" stroke-width="4" stroke-linecap="round"/>
  <text x="400" y="480" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">NISHA ENTERPRISES</text>
  <text x="400" y="515" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="600" fill="#F28C28" text-anchor="middle" letter-spacing="0.5">${title.replace(/[<>&"]/g, '')}</text>
  <text x="400" y="545" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#8E9BAE" text-anchor="middle">DOMBIVLI EAST • INDUSTRIAL MANUFACTURING</text>
</svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
