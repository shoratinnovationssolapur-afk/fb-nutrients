import heroImg from '../assets/hero.jpg'
import spaniNutrients from '../assets/Spani Nutrients.jpeg'
import spaniGrow from '../assets/Spani Grow.jpeg'
import spaniBud from '../assets/Spani Bud.jpeg'
import spaniFerolin from '../assets/Spani Ferolin.jpeg'
import strong40 from '../assets/Strong 40.jpeg'
import ecoSil from '../assets/Eco-Sil.jpeg'
import ecoalaRoot from '../assets/Ecoala Root.jpeg'
import ecolaRoot from '../assets/Ecola Root.jpeg'

export const heroVideo = '/hero-video.mp4'

export const heroImgSrc = heroImg

export const navLinks = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about-us' },
  { label: 'Products', href: '#/products' },
  { label: 'Contact Us', href: '#/contact-us' },
]

export const metrics = [
  { value: '06+', label: 'Product families' },
  { value: 'ES', label: 'Spanish brand identity' },
  { value: '24/7', label: 'Professional support mindset' },
]

export const companyPoints = [
  {
    title: 'Research and Development',
    text: 'Solutions developed to improve crop response, nutrient efficiency, and long-term agronomic performance.',
  },
  {
    title: 'Sustainable Agriculture',
    text: 'A modern plant nutrition approach centered on responsible use, soil care, and future-ready farming.',
  },
  {
    title: 'Global Distribution',
    text: 'A Spain-based brand story presented with the clarity, consistency, and confidence of an international company.',
  },
]

export const productFamilies = [
  'Microgranular fertilizers',
  'NPK granular fertilizers',
  'Biostimulants',
  'Nutritional correctors',
  'Water soluble fertilizers',
  'Foliar fertilizers',
]

export const allProducts = [
  {
    slug: 'spani-nutrients',
    name: 'Spani Nutrients',
    image: spaniNutrients,
    note: 'A balanced nutrition formula designed to improve crop efficiency, plant strength, and overall field performance.',
    category: 'Agronutrition',
    family: 'NPK granular fertilizers',
    tagline: 'Balanced crop nutrition for stronger and more productive fields.',
    description:
      'Spani Nutrients is developed for growers who need a dependable fertilizer program that supports soil balance, steady nutrient availability, and healthier plant growth throughout the crop cycle.',
    benefits: [
      'Supports balanced crop nutrition across multiple growth stages.',
      'Helps improve plant vigor, structure, and field consistency.',
      'Designed for growers seeking stronger and more reliable crop performance.',
    ],
  },
  {
    slug: 'spani-grow',
    name: 'Spani Grow',
    image: spaniGrow,
    note: 'A growth-stage solution that supports stronger structure, greener development, and healthier early growth.',
    category: 'Growth Formula',
    family: 'Water soluble fertilizers',
    tagline: 'Growth support for greener plants and stronger early development.',
    description:
      'Spani Grow is intended for the active development stage, helping crops build stronger stems, healthier foliage, and better overall vegetative growth under field and controlled conditions.',
    benefits: [
      'Encourages stronger vegetative growth and greener plant development.',
      'Supports early-stage crop establishment and structural strength.',
      'Suitable for growers targeting healthier development before flowering.',
    ],
  },
  {
    slug: 'spani-bud',
    name: 'Spani Bud',
    image: spaniBud,
    note: 'A bloom-focused formula created to support flower development, crop quality, and a cleaner final finish.',
    category: 'Bloom Formula',
    family: 'Foliar fertilizers',
    tagline: 'Flowering nutrition for quality, finish, and bloom performance.',
    description:
      'Spani Bud is formulated for the flowering and production stage, helping crops direct nutrition toward bloom development, final quality, and a more complete finishing cycle.',
    benefits: [
      'Supports flower initiation, bloom performance, and final crop quality.',
      'Helps maintain nutritional balance during demanding bloom stages.',
      'Designed for cleaner finishing and stronger production outcomes.',
    ],
  },
  {
    slug: 'spani-ferolin',
    name: 'Spani Ferolin',
    image: spaniFerolin,
    note: 'A micronutrient solution formulated to maintain plant vigor, color, and visible crop health.',
    category: 'Nutritional Corrector',
    family: 'Nutritional correctors',
    tagline: 'Micronutrient support for healthier color and stronger crop vitality.',
    description:
      'Spani Ferolin provides targeted micronutrient support to help correct imbalances, protect plant color, and maintain vigorous crop development when nutritional pressure affects performance.',
    benefits: [
      'Helps address micronutrient deficiencies in demanding crop conditions.',
      'Supports healthier color, vigor, and visible crop quality.',
      'Useful for maintaining performance when nutritional balance is under stress.',
    ],
  },
  {
    slug: 'strong-40',
    name: 'Strong 40',
    image: strong40,
    note: 'A high-impact support product positioned for demanding crop conditions and stronger technical performance.',
    category: 'Special Formula',
    family: 'Microgranular fertilizers',
    tagline: 'High-impact support for demanding fields and performance-driven programs.',
    description:
      'Strong 40 is presented as a technical solution for growers who need reliable support in intensive field conditions, with a focus on stronger crop response and consistent performance.',
    benefits: [
      'Built for growers managing demanding field conditions.',
      'Supports stronger response in high-performance fertilizer programs.',
      'Adds technical depth to premium agronutrition strategies.',
    ],
  },
  {
    slug: 'eco-sil',
    name: 'Eco-Sil',
    image: ecoSil,
    note: 'A silicon-based solution developed to improve resilience, reinforce plant structure, and support field stability.',
    category: 'Crop Protection',
    family: 'Foliar fertilizers',
    tagline: 'Silicon support for resilience, structure, and field stability.',
    description:
      'Eco-Sil is designed to help crops develop stronger structural resistance, improved resilience, and better tolerance in changing agricultural conditions where plant stability matters.',
    benefits: [
      'Helps reinforce plant structure and field resilience.',
      'Supports better tolerance in changing crop conditions.',
      'Useful in programs focused on crop strength and stability.',
    ],
  },
  {
    slug: 'ecoala-root',
    name: 'Ecoala Root',
    image: ecoalaRoot,
    note: 'A root development product designed to encourage faster establishment and stronger nutrient uptake.',
    category: 'Root Development',
    family: 'Biostimulants',
    tagline: 'Root development support for faster establishment and nutrient uptake.',
    description:
      'Ecoala Root is aimed at improving root activity during establishment and early growth, helping crops absorb nutrients more efficiently and create a stronger base for later development.',
    benefits: [
      'Supports faster root establishment and better nutrient absorption.',
      'Helps crops build a stronger foundation during early growth.',
      'Suitable for programs focused on root strength and stability.',
    ],
  },
  {
    slug: 'ecola-root',
    name: 'Ecola Root',
    image: ecolaRoot,
    note: 'A root-care solution aimed at healthier early growth, better stability, and stronger root activity.',
    category: 'Root Development',
    family: 'Biostimulants',
    tagline: 'Root-care support for healthier starts and stronger plant stability.',
    description:
      'Ecola Root is created to promote healthier early-stage development, stronger root activity, and better crop stability, especially when early nutrition and establishment are priorities.',
    benefits: [
      'Promotes stronger root activity and healthier early growth.',
      'Supports crop stability during establishment stages.',
      'Works well in fertilizer programs focused on root care and plant balance.',
    ],
  },
]

export const galleryCards = [
  {
    title: 'Field Innovation',
    image: heroImg,
    text: 'A visual direction that keeps the brand connected to Spanish farmland, open skies, and modern crop care.',
  },
  {
    title: 'Technical Product Identity',
    image: strong40,
    text: 'A cleaner product presentation inspired by professional agronutrition brands and export-ready packaging.',
  },
  {
    title: 'Applied Crop Care',
    image: ecoSil,
    text: 'A visual style that balances scientific credibility, practical farming use, and product clarity.',
  },
]

export function getProductBySlug(slug) {
  return allProducts.find((product) => product.slug === slug)
}
