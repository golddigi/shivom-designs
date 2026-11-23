// Public business contact information from shivomdesigns.com.
const studioAddress = 'Vastrapur, Ahmedabad, Gujarat 380015, India';
const mapQuery = encodeURIComponent(studioAddress);

export const contact = {
  projectsEmail: 'Shivomdesigns21@gmail.com',
  careersEmail: '',
  phone: '+91 9106161487',
  address: studioAddress,
  hours: 'Mon–Fri 10:00 am–7:00 pm\nSat 10:00 am–3:00 pm\nSun closed',
  instagram: 'https://www.instagram.com/shivom_designs/',
  linkedin: '',
  mapEmbed: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
  directions: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
};

export const studioLinks = [
  { label: 'Instagram', href: contact.instagram },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'Email', href: contact.projectsEmail && `mailto:${contact.projectsEmail}` },
].filter(({ href }) => href);

// Supply a wide path when a landscape cut is available.
export const studioFilms = {
  opening: { narrow: 'assets/projects/commercial-cabin/commercial-cabin-film.mp4', poster: 'assets/projects/commercial-cabin/commercial-cabin-poster.webp' },
  reel: { narrow: 'assets/projects/toddler-playroom/toddler-playroom-reel.mp4', poster: 'assets/projects/toddler-playroom/toddler-playroom-poster.webp' },
};

export const films = [
  { id: 'yJKGFyUo4Zo', title: 'An Interior Designer’s Home for Quiet Living', credit: 'The Local Project', image: 'hero' },
  { id: 'BT2ARyMGTPY', title: 'Inside the McGee Home Remodel', credit: 'Studio McGee', image: 'reading' },
];

export const images = {
  hero: { widths: [640, 1120, 1760], alt: 'A warm contemporary lounge opening onto a garden', focus: '54% center' },
  limestone: { widths: [360, 720], alt: 'A limestone living room with a curved linen sofa' },
  reading: { widths: [360, 720], alt: 'Walnut shelving and a rust-toned chair in a reading room' },
  dining: { widths: [360, 720], alt: 'A walnut dining table beside a hand-plastered arch' },
  bedroom: { widths: [360, 720], alt: 'A softly lit bedroom with layered linen and oak furniture' },
  kitchen: { widths: [360, 720], alt: 'A striped stone island and olive cabinetry in a kitchen' },
  gallery: { widths: [360, 720], alt: 'A light-filled lounge with travertine and full-height curtains' },
};

// Add published quotes and recognition here when available.
export const testimonials = [];
export const awards = [];

export const covers = [
  { title: 'The Quiet Home', image: 'limestone' },
  { title: 'Material Notes', image: 'reading' },
  { title: 'Rooms in Light', image: 'dining' },
  { title: 'At Rest', image: 'bedroom' },
  { title: 'Space & Form', image: 'gallery' },
];

export const articles = [
  {
    id: 'living-with-natural-materials', title: 'Living with natural materials', image: 'kitchen', category: 'Materials',
    summary: 'What to consider when choosing timber, stone and linen for rooms that will be used every day.',
    paragraphs: [
      'Choose finishes by how you want them to feel in use. A honed surface disperses light softly, while a polished finish reflects the room more clearly. In a kitchen that sees daily cooking, it helps to bring samples home and look at them after spills, cleaning and changing daylight.',
      'Solid timber, natural stone and linen can all change with use. The important choice is which marks you are happy to live with and which surfaces need more protection. Keep a small sample of the actual finish so repairs and later additions can be matched more easily.',
    ],
  },
  {
    id: 'designing-with-daylight', title: 'Designing with daylight', image: 'gallery', category: 'Space planning',
    summary: 'Read a room across an entire day before deciding where to sit, work or display something.',
    paragraphs: [
      'Observe where the brightest light falls in the morning and where glare develops in the afternoon. Place a reading seat where the page is easy to see, and give screens a position that keeps strong reflections out of the line of sight.',
      'Sheer curtains, deep reveals and lighter wall finishes can all soften the shift from window to room. Spend time with material samples at the height and location where you plan to use them, since a tabletop and a vertical wall often look quite different in the same light.',
    ],
  },
  {
    id: 'a-room-that-feels-like-home', title: 'A room that feels like home', image: 'bedroom', category: 'At home',
    summary: 'Start with the routines and belongings that already give your home its character.',
    paragraphs: [
      'Begin with an everyday moment. Consider where you set things down as you arrive, where you sit after dinner, and what you want close at hand. These routines often give clearer direction than a collection of reference images.',
      'Leave space around the things that matter. A familiar chair, a family textile or a small collection of objects can anchor the room and make later choices easier. You can add more over time as your needs change.',
    ],
  },
];

export const faq = [
  { question: 'What should I share in a first enquiry?', answer: 'Tell us the project location, the type of space, the rooms involved, and your ideal timeframe. Photos, floor plans, or references are helpful if you have them.' },
  { question: 'Can I enquire about a renovation?', answer: 'Yes. Include a few photos of the existing space and a short note about what you would like to change.' },
  { question: 'When should I get in touch?', answer: 'Get in touch while you are still defining the scope, especially if a move-in date or construction schedule is already in place.' },
  { question: 'How are costs and timelines decided?', answer: 'They depend on the scope, site conditions, materials, and the level of coordination involved. These can be discussed once the initial brief is clear.' },
];
