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
  },
  es: {
    microgranular: 'Fertilizantes microgranulados',
    npk: 'Fertilizantes granulares NPK',
    foliar: 'Fertilizantes foliares',
    biostimulants: 'Bioestimulantes',
    correctors: 'Correctores nutricionales',
    water: 'Fertilizantes solubles en agua',
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
    slug: 'ecola-root',
    image: ecolaRoot,
    familyKey: 'biostimulants',
    content: {
      en: {
        name: 'Ecola Root',
        note: 'A root-care solution aimed at healthier early growth, better stability, and stronger root activity.',
        category: 'Root Development',
        family: productFamiliesByLanguage.en.biostimulants,
        tagline: 'Root-care support for healthier starts and stronger plant stability.',
        description:
          'Ecola Root is created to promote healthier early-stage development, stronger root activity, and better crop stability, especially when early nutrition and establishment are priorities.',
        benefits: [
          'Promotes stronger root activity and healthier early growth.',
          'Supports crop stability during establishment stages.',
          'Works well in fertilizer programs focused on root care and plant balance.',
        ],
      },
      es: {
        name: 'Ecola Root',
        note: 'Una solucion de cuidado radicular orientada a un crecimiento inicial mas saludable, mayor estabilidad y una actividad radicular mas fuerte.',
        category: 'Desarrollo radicular',
        family: productFamiliesByLanguage.es.biostimulants,
        tagline: 'Soporte radicular para comienzos mas saludables y una estabilidad vegetal mas fuerte.',
        description:
          'Ecola Root se crea para promover un desarrollo inicial mas saludable, una actividad radicular mas fuerte y una mejor estabilidad del cultivo, especialmente cuando la nutricion temprana y el establecimiento son prioritarios.',
        benefits: [
          'Promueve una actividad radicular mas fuerte y un crecimiento inicial mas saludable.',
          'Apoya la estabilidad del cultivo durante el establecimiento.',
          'Funciona bien en programas de fertilizacion centrados en el cuidado radicular y el equilibrio vegetal.',
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
