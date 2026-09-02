// Generates a self-contained SVG plant thumbnail as a data URI.
// This guarantees every plant image always renders, with no dependency
// on any external image host.
function makeThumbnail(bgFrom, bgTo, potColor, leafColor, emoji) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="320" viewBox="0 0 400 320">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgFrom}"/>
          <stop offset="100%" stop-color="${bgTo}"/>
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#bg)"/>
      <ellipse cx="200" cy="270" rx="90" ry="14" fill="rgba(0,0,0,0.08)"/>
      <path d="M140 210 h120 l-14 80 h-92 z" fill="${potColor}"/>
      <rect x="130" y="198" width="140" height="20" rx="6" fill="${potColor}"/>
      <text x="200" y="150" font-size="90" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: makeThumbnail('#e8f5e9', '#c8e6c9', '#ffffff', '#2e7d32', '🌿'),
        description: 'Produces oxygen at night, improving air quality.',
        cost: 15,
      },
      {
        name: 'Peace Lily',
        image: makeThumbnail('#e8f5e9', '#c8e6c9', '#ffffff', '#2e7d32', '🌸'),
        description: 'Removes mold spores and purifies the air.',
        cost: 18,
      },
      {
        name: 'Spider Plant',
        image: makeThumbnail('#e8f5e9', '#c8e6c9', '#ffffff', '#2e7d32', '🕸️'),
        description: 'Filters formaldehyde and xylene from the air.',
        cost: 12,
      },
      {
        name: 'Boston Fern',
        image: makeThumbnail('#e8f5e9', '#c8e6c9', '#ffffff', '#2e7d32', '🌱'),
        description: 'Lush green fronds that humidify and purify the air.',
        cost: 14,
      },
      {
        name: 'Aloe Vera',
        image: makeThumbnail('#e8f5e9', '#c8e6c9', '#ffffff', '#2e7d32', '🪴'),
        description: 'A hardy succulent with healing gel-filled leaves.',
        cost: 10,
      },
      {
        name: 'Rubber Plant',
        image: makeThumbnail('#e8f5e9', '#c8e6c9', '#ffffff', '#2e7d32', '🍃'),
        description: 'Glossy leaves that thrive in low light.',
        cost: 20,
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: makeThumbnail('#f3e5f5', '#e1bee7', '#f5f5dc', '#7b1fa2', '💜'),
        description: 'Calming scent, used in aromatherapy.',
        cost: 20,
      },
      {
        name: 'Jasmine',
        image: makeThumbnail('#f3e5f5', '#e1bee7', '#f5f5dc', '#7b1fa2', '🤍'),
        description: 'Sweet fragrance, promotes relaxation.',
        cost: 18,
      },
      {
        name: 'Rosemary',
        image: makeThumbnail('#f3e5f5', '#e1bee7', '#f5f5dc', '#7b1fa2', '🌿'),
        description: 'Invigorating scent, often used in cooking.',
        cost: 15,
      },
      {
        name: 'Mint',
        image: makeThumbnail('#f3e5f5', '#e1bee7', '#f5f5dc', '#7b1fa2', '🌱'),
        description: 'Refreshing aroma, great for teas and cooking.',
        cost: 12,
      },
      {
        name: 'Lemon Balm',
        image: makeThumbnail('#f3e5f5', '#e1bee7', '#f5f5dc', '#7b1fa2', '🍋'),
        description: 'Citrusy scent, relieves stress and promotes calm.',
        cost: 14,
      },
      {
        name: 'Hyacinth',
        image: makeThumbnail('#f3e5f5', '#e1bee7', '#f5f5dc', '#7b1fa2', '🌷'),
        description: 'A beautiful flowering plant known for its rich fragrance.',
        cost: 22,
      },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      {
        name: 'Orchid',
        image: makeThumbnail('#fce4ec', '#f8bbd0', '#ffffff', '#c2185b', '🌺'),
        description: 'Elegant long-lasting blooms in many colors.',
        cost: 25,
      },
      {
        name: 'African Violet',
        image: makeThumbnail('#fce4ec', '#f8bbd0', '#ffffff', '#c2185b', '💐'),
        description: 'Compact plant with velvety purple flowers.',
        cost: 12,
      },
      {
        name: 'Hibiscus',
        image: makeThumbnail('#fce4ec', '#f8bbd0', '#ffffff', '#c2185b', '🌻'),
        description: 'Large tropical blooms that attract pollinators.',
        cost: 19,
      },
      {
        name: 'Begonia',
        image: makeThumbnail('#fce4ec', '#f8bbd0', '#ffffff', '#c2185b', '🌼'),
        description: 'Colorful foliage paired with delicate flowers.',
        cost: 14,
      },
      {
        name: 'Geranium',
        image: makeThumbnail('#fce4ec', '#f8bbd0', '#ffffff', '#c2185b', '🌹'),
        description: 'Fragrant leaves and bright, cheerful flowers.',
        cost: 13,
      },
      {
        name: 'Anthurium',
        image: makeThumbnail('#fce4ec', '#f8bbd0', '#ffffff', '#c2185b', '❤️'),
        description: 'Glossy heart-shaped blooms that last for weeks.',
        cost: 22,
      },
    ],
  },
];
