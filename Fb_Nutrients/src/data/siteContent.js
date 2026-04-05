import heroImg from '../assets/hero.jpg'
import spaniNutrients from '../assets/Spani Nutrients.jpeg'
import spaniGrow from '../assets/Spani Grow.jpeg'
import spaniBud from '../assets/Spani Bud.jpeg'
import spaniFerolin from '../assets/Spani Ferolin.jpeg'
import strong40 from '../assets/Strong 40.jpeg'
import ecoSil from '../assets/Eco-Sil.jpeg'
import ecoalaRoot from '../assets/Ecoala Root.jpeg'
import ecolaRoot from '../assets/Ecola Root.jpeg'
import amiboro from '../assets/Amiboro.jpeg'
import amizinc from '../assets/Amizinc.jpeg'
import calfine from '../assets/calfine.jpeg'
import fortiCal26 from '../assets/forti Cal 26.jpeg'
import phosnova from '../assets/phosnova.jpeg'
import zynox from '../assets/Zynox.jpeg'

export const heroVideo = '/hero-video.mp4'
export const heroImgSrc = heroImg

const navLinksByLanguage = {
  en: [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about-us' },
    { label: 'Products', href: '#/products' },
    { label: 'Contact Us', href: '#/contact-us' },
  ],
  es: [
    { label: 'Inicio', href: '#/' },
    { label: 'Nosotros', href: '#/about-us' },
    { label: 'Productos', href: '#/products' },
    { label: 'Contacto', href: '#/contact-us' },
  ],
}

const metricsByLanguage = {
  en: [
    { value: '06+', label: 'Product families' },
    { value: 'ES', label: 'Spanish brand identity' },
    { value: '24/7', label: 'Professional support mindset' },
  ],
  es: [
    { value: '06+', label: 'Familias de productos' },
    { value: 'ES', label: 'Identidad de marca espanola' },
    { value: '24/7', label: 'Enfoque de soporte profesional' },
  ],
}

const companyPointsByLanguage = {
  en: [
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
  ],
  es: [
    {
      title: 'Investigacion y Desarrollo',
      text: 'Soluciones desarrolladas para mejorar la respuesta del cultivo, la eficiencia nutricional y el rendimiento agronomico a largo plazo.',
    },
    {
      title: 'Agricultura Sostenible',
      text: 'Un enfoque moderno de nutricion vegetal centrado en el uso responsable, el cuidado del suelo y una agricultura preparada para el futuro.',
    },
    {
      title: 'Distribucion Global',
      text: 'Una historia de marca basada en Espana presentada con la claridad, consistencia y confianza de una empresa internacional.',
    },
  ],
}

const productFamiliesByLanguage = {
  en: {
    microgranular: 'Microgranular fertilizers',
    npk: 'NPK granular fertilizers',
    foliar: 'Foliar fertilizers',
    biostimulants: 'Biostimulants',
    correctors: 'Nutritional correctors',
    water: 'Water soluble fertilizers',
    micronutrients: 'Micronutrients',
    'secondary-nutrients': 'Secondary nutrients',
    macronutrients: 'Macronutrients',
  },
  es: {
    microgranular: 'Fertilizantes microgranulados',
    npk: 'Fertilizantes granulares NPK',
    foliar: 'Fertilizantes foliares',
    biostimulants: 'Bioestimulantes',
    correctors: 'Correctores nutricionales',
    water: 'Fertilizantes solubles en agua',
    micronutrients: 'Micronutrientes',
    'secondary-nutrients': 'Nutrientes secundarios',
    macronutrients: 'Macronutrientes',
  },
}

const products = [
  {
    slug: 'spani-nutrients',
    image: spaniNutrients,
    familyKey: 'npk',
    content: {
      en: {
        name: 'Spani Nutrients',
        note: 'A balanced nutrition formula designed to improve crop efficiency, plant strength, and overall field performance.',
        category: 'Agronutrition',
        family: productFamiliesByLanguage.en.npk,
        tagline: 'Balanced crop nutrition for stronger and more productive fields.',
        description:
          'Spani Nutrients is developed for growers who need a dependable fertilizer program that supports soil balance, steady nutrient availability, and healthier plant growth throughout the crop cycle.',
        benefits: [
          'Supports balanced crop nutrition across multiple growth stages.',
          'Helps improve plant vigor, structure, and field consistency.',
          'Designed for growers seeking stronger and more reliable crop performance.',
        ],
      },
      es: {
        name: 'Spani Nutrients',
        note: 'Una formula de nutricion equilibrada disenada para mejorar la eficiencia del cultivo, la fuerza de la planta y el rendimiento general del campo.',
        category: 'Agronutricion',
        family: productFamiliesByLanguage.es.npk,
        tagline: 'Nutricion equilibrada para campos mas fuertes y productivos.',
        description:
          'Spani Nutrients esta desarrollado para agricultores que necesitan un programa de fertilizacion confiable que favorezca el equilibrio del suelo, la disponibilidad constante de nutrientes y un crecimiento vegetal mas saludable durante todo el ciclo del cultivo.',
        benefits: [
          'Favorece una nutricion equilibrada del cultivo en multiples etapas de crecimiento.',
          'Ayuda a mejorar el vigor vegetal, la estructura y la uniformidad del campo.',
          'Pensado para agricultores que buscan un rendimiento mas fuerte y confiable.',
        ],
      },
    },
  },
  {
    slug: 'spani-grow',
    image: spaniGrow,
    familyKey: 'water',
    content: {
      en: {
        name: 'Spani Grow',
        note: 'A growth-stage solution that supports stronger structure, greener development, and healthier early growth.',
        category: 'Growth Formula',
        family: productFamiliesByLanguage.en.water,
        tagline: 'Growth support for greener plants and stronger early development.',
        description:
          'Spani Grow is intended for the active development stage, helping crops build stronger stems, healthier foliage, and better overall vegetative growth under field and controlled conditions.',
        benefits: [
          'Encourages stronger vegetative growth and greener plant development.',
          'Supports early-stage crop establishment and structural strength.',
          'Suitable for growers targeting healthier development before flowering.',
        ],
      },
      es: {
        name: 'Spani Grow',
        note: 'Una solucion para la etapa de crecimiento que favorece una estructura mas fuerte, un desarrollo mas verde y un crecimiento inicial mas saludable.',
        category: 'Formula de crecimiento',
        family: productFamiliesByLanguage.es.water,
        tagline: 'Apoyo al crecimiento para plantas mas verdes y un desarrollo inicial mas fuerte.',
        description:
          'Spani Grow esta pensado para la etapa de desarrollo activo, ayudando a los cultivos a formar tallos mas fuertes, follaje mas sano y un mejor crecimiento vegetativo general en campo y en condiciones controladas.',
        benefits: [
          'Favorece un crecimiento vegetativo mas fuerte y un desarrollo vegetal mas verde.',
          'Apoya el establecimiento inicial del cultivo y la fortaleza estructural.',
          'Adecuado para productores que buscan un desarrollo mas saludable antes de la floracion.',
        ],
      },
    },
  },
  {
    slug: 'spani-bud',
    image: spaniBud,
    familyKey: 'foliar',
    content: {
      en: {
        name: 'Spani Bud',
        note: 'A bloom-focused formula created to support flower development, crop quality, and a cleaner final finish.',
        category: 'Bloom Formula',
        family: productFamiliesByLanguage.en.foliar,
        tagline: 'Flowering nutrition for quality, finish, and bloom performance.',
        description:
          'Spani Bud is formulated for the flowering and production stage, helping crops direct nutrition toward bloom development, final quality, and a more complete finishing cycle.',
        benefits: [
          'Supports flower initiation, bloom performance, and final crop quality.',
          'Helps maintain nutritional balance during demanding bloom stages.',
          'Designed for cleaner finishing and stronger production outcomes.',
        ],
      },
      es: {
        name: 'Spani Bud',
        note: 'Una formula enfocada en la floracion creada para apoyar el desarrollo floral, la calidad del cultivo y un acabado final mas limpio.',
        category: 'Formula de floracion',
        family: productFamiliesByLanguage.es.foliar,
        tagline: 'Nutricion para floracion con enfoque en calidad, acabado y rendimiento floral.',
        description:
          'Spani Bud esta formulado para la etapa de floracion y produccion, ayudando a los cultivos a dirigir la nutricion hacia el desarrollo floral, la calidad final y un ciclo de terminacion mas completo.',
        benefits: [
          'Apoya el inicio floral, el rendimiento de floracion y la calidad final del cultivo.',
          'Ayuda a mantener el equilibrio nutricional durante etapas exigentes de floracion.',
          'Disenado para un acabado mas limpio y mejores resultados de produccion.',
        ],
      },
    },
  },
  {
    slug: 'spani-ferolin',
    image: spaniFerolin,
    familyKey: 'correctors',
    content: {
      en: {
        name: 'Spani Ferolin',
        note: 'A micronutrient solution formulated to maintain plant vigor, color, and visible crop health.',
        category: 'Nutritional Corrector',
        family: productFamiliesByLanguage.en.correctors,
        tagline: 'Micronutrient support for healthier color and stronger crop vitality.',
        description:
          'Spani Ferolin provides targeted micronutrient support to help correct imbalances, protect plant color, and maintain vigorous crop development when nutritional pressure affects performance.',
        benefits: [
          'Helps address micronutrient deficiencies in demanding crop conditions.',
          'Supports healthier color, vigor, and visible crop quality.',
          'Useful for maintaining performance when nutritional balance is under stress.',
        ],
      },
      es: {
        name: 'Spani Ferolin',
        note: 'Una solucion de micronutrientes formulada para mantener el vigor, el color y la salud visible del cultivo.',
        category: 'Corrector nutricional',
        family: productFamiliesByLanguage.es.correctors,
        tagline: 'Soporte de micronutrientes para mejor color y mayor vitalidad del cultivo.',
        description:
          'Spani Ferolin aporta un soporte especifico de micronutrientes para ayudar a corregir desequilibrios, proteger el color de la planta y mantener un desarrollo vigoroso cuando la presion nutricional afecta el rendimiento.',
        benefits: [
          'Ayuda a abordar deficiencias de micronutrientes en condiciones exigentes.',
          'Favorece mejor color, vigor y calidad visible del cultivo.',
          'Util para mantener el rendimiento cuando el equilibrio nutricional esta bajo presion.',
        ],
      },
    },
  },
  {
    slug: 'strong-40',
    image: strong40,
    familyKey: 'microgranular',
    content: {
      en: {
        name: 'Strong 40',
        note: 'A high-impact support product positioned for demanding crop conditions and stronger technical performance.',
        category: 'Special Formula',
        family: productFamiliesByLanguage.en.microgranular,
        tagline: 'High-impact support for demanding fields and performance-driven programs.',
        description:
          'Strong 40 is presented as a technical solution for growers who need reliable support in intensive field conditions, with a focus on stronger crop response and consistent performance.',
        benefits: [
          'Built for growers managing demanding field conditions.',
          'Supports stronger response in high-performance fertilizer programs.',
          'Adds technical depth to premium agronutrition strategies.',
        ],
      },
      es: {
        name: 'Strong 40',
        note: 'Un producto de apoyo de alto impacto pensado para condiciones exigentes y un rendimiento tecnico superior.',
        category: 'Formula especial',
        family: productFamiliesByLanguage.es.microgranular,
        tagline: 'Soporte de alto impacto para campos exigentes y programas orientados al rendimiento.',
        description:
          'Strong 40 se presenta como una solucion tecnica para agricultores que necesitan apoyo confiable en condiciones intensivas de campo, con enfoque en una mejor respuesta del cultivo y un rendimiento consistente.',
        benefits: [
          'Creado para agricultores que manejan condiciones de campo exigentes.',
          'Favorece una respuesta mas fuerte en programas de fertilizacion de alto rendimiento.',
          'Aporta profundidad tecnica a estrategias premium de agronutricion.',
        ],
      },
    },
  },
  {
    slug: 'eco-sil',
    image: ecoSil,
    familyKey: 'foliar',
    content: {
      en: {
        name: 'Eco-Sil',
        note: 'A silicon-based solution developed to improve resilience, reinforce plant structure, and support field stability.',
        category: 'Crop Protection',
        family: productFamiliesByLanguage.en.foliar,
        tagline: 'Silicon support for resilience, structure, and field stability.',
        description:
          'Eco-Sil is designed to help crops develop stronger structural resistance, improved resilience, and better tolerance in changing agricultural conditions where plant stability matters.',
        benefits: [
          'Helps reinforce plant structure and field resilience.',
          'Supports better tolerance in changing crop conditions.',
          'Useful in programs focused on crop strength and stability.',
        ],
      },
      es: {
        name: 'Eco-Sil',
        note: 'Una solucion a base de silicio desarrollada para mejorar la resistencia, reforzar la estructura vegetal y apoyar la estabilidad en campo.',
        category: 'Proteccion del cultivo',
        family: productFamiliesByLanguage.es.foliar,
        tagline: 'Soporte con silicio para resistencia, estructura y estabilidad en campo.',
        description:
          'Eco-Sil esta disenado para ayudar a los cultivos a desarrollar una resistencia estructural mas fuerte, mayor resiliencia y mejor tolerancia en condiciones agricolas cambiantes donde la estabilidad vegetal es clave.',
        benefits: [
          'Ayuda a reforzar la estructura vegetal y la resiliencia en campo.',
          'Favorece una mejor tolerancia en condiciones cambiantes del cultivo.',
          'Util en programas centrados en fuerza y estabilidad del cultivo.',
        ],
      },
    },
  },
  {
    slug: 'ecoala-root',
    image: ecoalaRoot,
    familyKey: 'biostimulants',
    content: {
      en: {
        name: 'Ecoala Root',
        note: 'A root development product designed to encourage faster establishment and stronger nutrient uptake.',
        category: 'Root Development',
        family: productFamiliesByLanguage.en.biostimulants,
        tagline: 'Root development support for faster establishment and nutrient uptake.',
        description:
          'Ecoala Root is aimed at improving root activity during establishment and early growth, helping crops absorb nutrients more efficiently and create a stronger base for later development.',
        benefits: [
          'Supports faster root establishment and better nutrient absorption.',
          'Helps crops build a stronger foundation during early growth.',
          'Suitable for programs focused on root strength and stability.',
        ],
      },
      es: {
        name: 'Ecoala Root',
        note: 'Un producto para desarrollo radicular disenado para favorecer un establecimiento mas rapido y una absorcion de nutrientes mas fuerte.',
        category: 'Desarrollo radicular',
        family: productFamiliesByLanguage.es.biostimulants,
        tagline: 'Soporte radicular para un establecimiento mas rapido y mejor absorcion de nutrientes.',
        description:
          'Ecoala Root esta orientado a mejorar la actividad radicular durante el establecimiento y el crecimiento inicial, ayudando a los cultivos a absorber nutrientes con mayor eficiencia y crear una base mas fuerte para etapas posteriores.',
        benefits: [
          'Favorece un establecimiento radicular mas rapido y mejor absorcion de nutrientes.',
          'Ayuda a los cultivos a construir una base mas fuerte durante el crecimiento inicial.',
          'Adecuado para programas enfocados en fuerza y estabilidad radicular.',
        ],
      },
    },
  },
  {
    slug: 'amiboro',
    image: amiboro,
    familyKey: 'micronutrients',
    content: {
      en: {
        name: 'Amiboro',
        note: 'A boron-based solution designed to support flowering, fruit setting, and overall plant development.',
        category: 'Boron Nutrient',
        family: productFamiliesByLanguage.en['micronutrients'],
        tagline: 'Targeted boron support for improved flowering and fruit quality.',
        description:
          'Amiboro is a chelated boron glycine liquid formulated to enhance reproductive growth, improve pollen viability, and support better fruit formation, especially in boron-deficient conditions.',
        benefits: [
          'Enhances flowering and fruit setting.',
          'Improves pollen viability and fertilization.',
          'Supports cell wall formation and nutrient transport.',
        ],
      },
      es: {
        name: 'Amiboro',
        note: 'Una solucion a base de boro diseñada para mejorar la floracion, el cuajado y el desarrollo general de la planta.',
        category: 'Nutrición de boro',
        family: productFamiliesByLanguage.es.micronutrients,
        tagline: 'Soporte de boro para una mejor floracion y calidad del fruto.',
        description:
          'Amiboro es un liquido de glicina quelatada de boro formulado para mejorar el crecimiento reproductivo y la formacion de frutos.',
        benefits: [
          'Mejora la floracion y el cuajado.',
          'Favorece la viabilidad del polen.',
          'Apoya la formacion de paredes celulares.',
        ],
      },
    },
  },

  {
    slug: 'amizinc',
    image: amizinc,
    familyKey: 'micronutrients',
    content: {
      en: {
        name: 'Amizinc',
        note: 'A zinc-based formulation aimed at improving plant metabolism and growth efficiency.',
        category: 'Zinc Nutrition',
        family: productFamiliesByLanguage.en.micronutrients,
        tagline: 'Essential zinc support for balanced growth and higher productivity.',
        description:
          'Amizinc is a chelated zinc glycine liquid that supports enzyme activation, chlorophyll formation, and overall plant vigor, especially in zinc-deficient soils.',
        benefits: [
          'Promotes healthy vegetative growth.',
          'Improves enzyme activity and metabolism.',
          'Enhances chlorophyll production and leaf health.',
        ],
      },
      es: {
        name: 'Amizinc',
        note: 'Una formulacion de zinc diseñada para mejorar el metabolismo y crecimiento de la planta.',
        category: 'Nutrición de zinc',
        family: productFamiliesByLanguage.es.micronutrients,
        tagline: 'Soporte esencial de zinc para un crecimiento equilibrado.',
        description:
          'Amizinc es un liquido quelatado de zinc glicina que mejora el vigor y el desarrollo vegetal.',
        benefits: [
          'Favorece el crecimiento vegetativo.',
          'Mejora la actividad enzimatica.',
          'Incrementa la produccion de clorofila.',
        ],
      },
    },
  },

  {
    slug: 'calfine',
    image: calfine,
    familyKey: 'secondary-nutrients',
    content: {
      en: {
        name: 'Calfine',
        note: 'A balanced calcium and magnesium formulation for improved plant structure and nutrient balance.',
        category: 'Secondary-nutrients',
        family: productFamiliesByLanguage.en['secondary-nutrients'],
        tagline: 'Balanced mineral nutrition for stronger plants and better yield stability.',
        description:
          'Calfine is a fluid compound mineral fertilizer enriched with calcium, magnesium, and boron, designed to enhance structural strength, nutrient balance, and crop performance.',
        benefits: [
          'Improves plant strength and structure.',
          'Supports nutrient balance and uptake.',
          'Enhances crop quality and resilience.',
        ],
      },
      es: {
        name: 'Calfine',
        note: 'Una formulacion equilibrada de calcio y magnesio para mejorar la estructura vegetal.',
        category: 'Nutrientes secundarios',
        family: productFamiliesByLanguage.es['secondary-nutrients'],
        tagline: 'Nutricion mineral equilibrada para plantas mas fuertes.',
        description:
          'Calfine es un fertilizante liquido con calcio, magnesio y boro para mejorar la estabilidad del cultivo.',
        benefits: [
          'Refuerza la estructura de la planta.',
          'Mejora la absorcion de nutrientes.',
          'Aumenta la calidad del cultivo.',
        ],
      },
    },
  },

  {
    slug: 'forti-cal-26',
    image: fortiCal26,
    familyKey: 'secondary-nutrients',
    content: {
      en: {
        name: 'Forti Cal 26',
        note: 'A high-calcium solution designed to strengthen plant tissues and improve crop quality.',
        category: 'Calcium Nutrition',
        family: productFamiliesByLanguage.en['secondary-nutrients'],
        tagline: 'High-strength calcium support for improved crop firmness and quality.',
        description:
          'Forti Cal 26 delivers concentrated calcium to improve cell wall strength, reduce physiological disorders, and enhance fruit firmness and shelf life.',
        benefits: [
          'Strengthens cell walls and plant tissues.',
          'Reduces calcium deficiency disorders.',
          'Improves fruit firmness and shelf life.',
        ],
      },
      es: {
        name: 'Forti Cal 26',
        note: 'Una solucion rica en calcio para fortalecer los tejidos vegetales.',
        category: 'Nutricion de calcio',
        family: productFamiliesByLanguage.es['secondary-nutrients'],
        tagline: 'Soporte de calcio para mayor calidad del cultivo.',
        description:
          'Forti Cal 26 proporciona calcio concentrado para mejorar la firmeza y calidad del fruto.',
        benefits: [
          'Fortalece los tejidos vegetales.',
          'Reduce deficiencias de calcio.',
          'Mejora la firmeza del fruto.',
        ],
      },
    },
  },

  {
    slug: 'phosnova',
    image: phosnova,
    familyKey: 'macronutrients',
    content: {
      en: {
        name: 'Phosnova',
        note: 'A phosphorus-rich solution supporting energy transfer and root development.',
        category: 'Phosphorus Nutrition',
        family: productFamiliesByLanguage.en['macronutrients'],
        tagline: 'Efficient phosphorus supply for strong roots and active growth.',
        description:
          'Phosnova is a calcium dihydrogen phosphate formulation designed to boost root development, energy transfer, and early plant establishment.',
        benefits: [
          'Enhances root development.',
          'Supports energy transfer in plants.',
          'Improves early-stage crop establishment.',
        ],
      },
      es: {
        name: 'Phosnova',
        note: 'Una solucion rica en fosforo para el desarrollo radicular.',
        category: 'Nutricion de fosforo',
        family: productFamiliesByLanguage.es['macronutrients'],
        tagline: 'Fosforo eficiente para raices fuertes.',
        description:
          'Phosnova mejora el crecimiento radicular y el desarrollo temprano del cultivo.',
        benefits: [
          'Mejora el desarrollo radicular.',
          'Favorece el crecimiento inicial.',
          'Apoya la transferencia de energia.',
        ],
      },
    },
  },

  {
    slug: 'zynox',
    image: zynox,
    familyKey: 'micronutrients',
    content: {
      en: {
        name: 'Zynox',
        note: 'A zinc gluconate-based solution for improved plant growth and metabolic activity.',
        category: 'Zinc Nutrition',
        family: productFamiliesByLanguage.en.micronutrients,
        tagline: 'Reliable zinc nutrition for stronger growth and higher efficiency.',
        description:
          'Zynox provides bioavailable zinc to support enzymatic processes, improve plant vigor, and enhance overall crop performance.',
        benefits: [
          'Boosts plant metabolism and growth.',
          'Improves enzyme activity.',
          'Enhances crop vigor and productivity.',
        ],
      },
      es: {
        name: 'Zynox',
        note: 'Una solucion de gluconato de zinc para mejorar el crecimiento vegetal.',
        category: 'Nutricion de zinc',
        family: productFamiliesByLanguage.es.micronutrients,
        tagline: 'Nutricion de zinc para un crecimiento eficiente.',
        description:
          'Zynox proporciona zinc biodisponible para mejorar el vigor y rendimiento del cultivo.',
        benefits: [
          'Mejora el metabolismo vegetal.',
          'Aumenta la actividad enzimatica.',
          'Favorece el crecimiento saludable.',
        ],
      },
    },
  },
]


const galleryCardsByLanguage = {
  en: [
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
  ],
  es: [
    {
      title: 'Innovacion en campo',
      image: heroImg,
      text: 'Una direccion visual que mantiene la marca conectada con el campo espanol, los cielos abiertos y el cuidado moderno del cultivo.',
    },
    {
      title: 'Identidad tecnica de producto',
      image: strong40,
      text: 'Una presentacion de producto mas limpia inspirada en marcas profesionales de agronutricion y empaques listos para exportacion.',
    },
    {
      title: 'Cuidado aplicado del cultivo',
      image: ecoSil,
      text: 'Un estilo visual que equilibra credibilidad cientifica, uso agricola practico y claridad del producto.',
    },
  ],
}

export function getNavLinks(language = 'en') {
  return navLinksByLanguage[language] ?? navLinksByLanguage.en
}

export function getMetrics(language = 'en') {
  return metricsByLanguage[language] ?? metricsByLanguage.en
}

export function getCompanyPoints(language = 'en') {
  return companyPointsByLanguage[language] ?? companyPointsByLanguage.en
}

export function getProductFamilies(language = 'en') {
  const map = productFamiliesByLanguage[language] ?? productFamiliesByLanguage.en
  return Object.entries(map).map(([key, label]) => ({ key, label }))
}

export function getAllProducts(language = 'en') {
  return products.map((product) => ({
    slug: product.slug,
    image: product.image,
    familyKey: product.familyKey,
    ...product.content[language],
  }))
}

export function getProductBySlug(slug, language = 'en') {
  return getAllProducts(language).find((product) => product.slug === slug)
}

export function getGalleryCards(language = 'en') {
  return galleryCardsByLanguage[language] ?? galleryCardsByLanguage.en
}

export const navLinks = getNavLinks('en')
export const metrics = getMetrics('en')
export const companyPoints = getCompanyPoints('en')
export const productFamilies = getProductFamilies('en').map((item) => item.label)
export const allProducts = getAllProducts('en')
export const galleryCards = getGalleryCards('en')
