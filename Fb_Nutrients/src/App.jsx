import { useEffect, useState } from 'react'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import Footer from './components/Footer.jsx'
import { LanguageProvider } from './components/LanguageContext.jsx'
import { useLanguage } from './components/LanguageContext.jsx'
import Navigation from './components/Navigation.jsx'
import CompanyPointIcon from './components/CompanyPointIcon.jsx'
import citrusTwo from './assets/Citrus2.jpg'
import indiaSpainVisual from './assets/India_Spain.png'
import fertilizerIndustryOne from './assets/fertiliser1.webp'
import fertilizerIndustryTwo from './assets/fertiliser2.webp'
import greenhouseVisual from './assets/content-image-1627985080050.jpg'
import knowledgeExchangeVisual from './assets/content-image-1627985071702.jpg'
import irrigationVisual from './assets/inline-drip-irrigation-system.webp'
import manWithPlants from './assets/man_with_plants.jpg'
import natureVisual from './assets/nature.jpg'
import {
  getAllProducts,
  getCompanyPoints,
  getProductBySlug,
  getMetrics,
  heroImgSrc,
  heroVideo,
} from './data/siteContent.js'

const collaborationHighlights = [
  {
    title: 'Spanish Agricultural Partnerships',
    text: 'A visual story of Spanish agricultural expertise connecting with Indian field opportunities through partnerships, technical exchange, and modern crop systems.',
    image: indiaSpainVisual,
    tag: 'Spain-India Cooperation',
  },
  {
    title: 'Valencia Farm Knowledge Exchange',
    text: 'Represents Indian farmers visiting Spain, learning from Valencia-style farming systems, field demonstrations, and exposure to modern agricultural practices.',
    image: knowledgeExchangeVisual,
    tag: 'Spanish Field Learning',
  },
  {
    title: 'Spanish Greenhouse Innovation',
    text: 'Reflects Spain’s advanced greenhouse culture, protected cultivation, and modernization-led production methods suitable for technology transfer narratives.',
    image: greenhouseVisual,
    tag: 'Mediterranean Agri-Tech',
  },
]

const featuredSectors = [
  {
    title: 'Crop Nutrition Excellence',
    text: 'Empowering modern agriculture with Spain-inspired fertilizer solutions, delivering balanced crop nutrition, improved yields, and sustainable orchard productivity for export-quality farming.',
    image: manWithPlants,
    eyebrow: 'Spanish Farming',
  },
  {
    title: 'Spanish Fertilizer Industry',
    text: 'Shows industrial cooperation, production capacity, and infrastructure-led growth for MoU and agro-industry collaboration sections.',
    image: fertilizerIndustryOne,
    eyebrow: 'Agricultural Infrastructure',
  },
  {
    title: 'Iberian Irrigation Systems',
    text: 'Adds Spain-style efficiency through drip irrigation, cleaner field systems, and practical crop modernization visuals.',
    image: irrigationVisual,
    eyebrow: 'Water-Smart Farming',
  },
]

function getRouteFromHash() {
  const hash = window.location.hash || '#/'
  return hash.replace('#', '') || '/'
}

function HomePage() {
  const { language } = useLanguage()
  const metrics = getMetrics(language)
  const companyPoints = getCompanyPoints(language)
  const allProducts = getAllProducts(language)
  const content =
    language === 'es'
      ? {
          heroTag: 'Fertilizantes avanzados para la agricultura moderna',
          heroTitle: 'Soluciones premium de fertilizacion desde Espana para cultivos mas sanos y mayores rendimientos.',
          heroText:
            'Nuestros fertilizantes agricolas estan disenados para mejorar el equilibrio del suelo, favorecer la absorcion de nutrientes, fortalecer el desarrollo de la planta y ayudar a los agricultores a lograr un rendimiento mas constante en cada etapa del cultivo.',
          productsCta: 'Nuestros Productos',
          aboutCta: 'Quienes Somos',
          heroCardTag: 'Experiencia en fertilizantes desde Espana',
          heroCardText: 'Mejor nutricion, cultivos mas fuertes y un rendimiento agricola mas inteligente.',
          identityTag: 'Identidad Espanola',
          identityTitle: 'Excelencia en fertilizacion impulsada por tecnologia espanola',
          identityText:
            'Presentamos fertilizantes, horticultura, modernizacion del campo e historias de colaboracion con un tono mediterraneo mas limpio, una imagen de exportacion mas fuerte y visuales arraigados en la agricultura espanola.',
          directionTag: 'Direccion del Sitio',
          directionTitle: 'Una presentacion premium al estilo de Espana para productos, capacidad industrial e innovacion agricola.',
          directionText:
            'La pagina principal mantiene tu hero existente mientras agrega secciones de colaboracion internacional y agrotecnologia.',
          focusTag: 'Enfoque Agricola',
          relationsTag: 'Relaciones Agricolas Espanolas',
          relationsTitle: 'Intercambio agricola liderado por Espana con una identidad mediterranea mas marcada.',
          relationsText:
            'Estas secciones usan tus nuevas imagenes para mostrar intercambio de conocimientos, modernizacion de invernaderos y cooperacion agricola internacional.',
          greenhouseTag: 'Cultivo Espanol en Invernadero',
          greenhouseTitle: 'Cuidado moderno de vivero y cultivo protegido inspirado en sistemas de produccion espanoles.',
          greenhouseText:
            'Esta seccion destaca la propagacion en invernadero, plantas jovenes mas saludables y la experiencia practica en finca que da a la portada una identidad agricola espanola mas autentica.',
          expertiseTag: 'Experiencia Citrica',
          expertiseText: 'Orchards modernos, identidad frutal mas limpia y una presencia hortícola premium.',
          exportTag: 'Calidad de Exportacion',
          exportText: 'Una presentacion adecuada para alianzas, compradores y mercados internacionales.',
          infraTag: 'Infraestructura Agro Espanola',
          infraText:
            'Las imagenes de infraestructura a gran escala y produccion de fertilizantes refuerzan la cooperacion industrial y la transferencia tecnologica.',
          farmLifeTag: 'Vida Rural Espanola',
          farmLifeText:
            'Los paisajes naturales y visuales del productor recuperan el equilibrio de la composicion manteniendo el caracter agricola de Espana.',
          highlightsTag: 'Lo Mejor de la Agricultura Espanola',
          highlightsTitle:
            'Reflejando la excelencia agricola espanola a traves del uso eficiente de fertilizantes, huertos de alto rendimiento y practicas sostenibles de nutricion vegetal.',
          productsTag: 'Nuestros Productos',
          productsTitle: 'Toda la gama de fertilizantes y nutricion vegetal en una sola seccion.',
          productsText:
            'Explora todos los productos en una seccion clara, desde nutricion del cultivo y apoyo a la floracion hasta desarrollo radicular y resiliencia vegetal.',
          viewDetails: 'Ver detalles del producto',
        }
      : {
          heroTag: 'Advanced fertilizers for modern agriculture',
          heroTitle: 'Premium fertilizer solutions from Spain for healthier crops and stronger yields.',
          heroText:
            'Our agricultural fertilizers are designed to improve soil balance, support nutrient uptake, strengthen plant development, and help growers achieve more consistent field performance across every stage of the crop cycle.',
          productsCta: 'Our Products',
          aboutCta: 'Who We Are',
          heroCardTag: 'Fertilizer expertise from Spain',
          heroCardText: 'Better nutrition, stronger crops, and smarter agricultural performance.',
          identityTag: 'Spanish Identity',
          identityTitle: 'Fertilizer Excellence Driven by Spanish Technology',
          identityText:
            'We present fertilizers, horticulture, field modernization, and collaboration stories with a cleaner Mediterranean tone, stronger export-brand cues, and visuals that feel rooted in Spanish agriculture.',
          directionTag: 'Website Direction',
          directionTitle: 'A premium Spain-style presentation for products, industrial capability, and agricultural innovation.',
          directionText:
            'The homepage keeps your existing hero look while adding international collaboration and agri-tech sections underneath.',
          focusTag: 'Agricultural Focus',
          relationsTag: 'Spanish Agricultural Relations',
          relationsTitle: 'Spain-led agricultural exchange presented with a stronger Mediterranean identity.',
          relationsText:
            'These sections use your new visuals to show knowledge exchange, greenhouse modernization, and cross-border agricultural cooperation.',
          greenhouseTag: 'Spanish Greenhouse Cultivation',
          greenhouseTitle: 'Modern nursery care and protected cultivation inspired by Spanish growing systems.',
          greenhouseText:
            'This section highlights greenhouse-style propagation, healthier young plants, and the practical farm expertise that gives the homepage a more authentic Spanish agriculture feel.',
          expertiseTag: 'Citrus Expertise',
          expertiseText: 'Modern orchards, cleaner fruit identity, and premium horticulture cues.',
          exportTag: 'Export Quality',
          exportText: 'Presentation that feels suitable for partnerships, buyers, and international markets.',
          infraTag: 'Spanish Agro Infrastructure',
          infraText:
            'Large-scale infrastructure and fertilizer production visuals reinforce industrial cooperation and technology transfer.',
          farmLifeTag: 'Spanish Farm Life',
          farmLifeText:
            'Nature-led farmland and grower-focused imagery bring back the visual balance of the previous layout while keeping the Spain agriculture feel.',
          highlightsTag: 'Spanish Agriculture Highlights',
          highlightsTitle:
            'Reflecting Spanish agricultural excellence through efficient fertilizer use, high-yield orchards, and sustainable crop nutrition practices.',
          productsTag: 'Our Products',
          productsTitle: 'Complete fertilizer and plant nutrition range in one section.',
          productsText:
            'Explore all products together in one clear section, from crop nutrition and bloom support to root development and plant resilience.',
          viewDetails: 'View product details',
        }

  return (
    <>
      <header className="relative px-5 pt-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Navigation />

          <div className="grid gap-8 pb-20 pt-10 md:gap-10 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
            <div className="animate-fade-up rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(18,30,16,0.72)_0%,rgba(24,37,20,0.58)_52%,rgba(24,37,20,0.34)_100%)] p-5 text-white shadow-[0_24px_70px_rgba(20,20,10,0.22)] backdrop-blur-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-50">
                {content.heroTag}
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-7xl">
                {content.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
                {content.heroText}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 max-sm:flex-col">
                <a
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-100"
                  href="#/products"
                >
                  {content.productsCta}
                </a>
                <a
                  className="rounded-full border border-white/45 bg-white/12 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                  href="#/about-us"
                >
                  {content.aboutCta}
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    className="animate-fade-up rounded-[1.5rem] border border-white/14 bg-slate-950/28 p-5 backdrop-blur-md"
                    key={metric.label}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <p className="text-2xl font-bold text-lime-50 sm:text-3xl">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/90">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up-delayed relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-[0_30px_80px_rgba(40,35,18,0.22)] backdrop-blur">
                <img
                  className="h-[20rem] w-full rounded-[1.35rem] object-cover sm:h-[26rem] lg:h-[34rem]"
                  src={heroImgSrc}
                  alt="Spanish agricultural fertilizer brand visual"
                />
                <div className="absolute inset-3 rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(10,16,9,0.04)_15%,rgba(10,16,9,0.6)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-4 text-white backdrop-blur sm:bottom-7 sm:left-6 sm:right-6 sm:p-5">
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-lime-100">
                    {content.heroCardTag}
                  </p>
                  <p className="mt-2 font-serif text-xl leading-tight sm:text-2xl">
                    {content.heroCardText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-5 pb-24 sm:px-8 lg:px-14">
        <section className="mx-auto max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,#f5fbef_0%,#fff8ef_100%)] p-6 shadow-[0_20px_60px_rgba(70,90,50,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="animate-fade-up">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">{content.identityTag}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {content.identityTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                {content.identityText}
              </p>

              <div className="mt-7 rounded-[1.7rem] bg-[linear-gradient(135deg,#224b29_0%,#4f6f2d_52%,#cf8a2d_100%)] p-6 text-white shadow-[0_20px_50px_rgba(50,60,30,0.18)]">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-lime-50">
                  {content.directionTag}
                </p>
                <p className="mt-3 font-serif text-xl leading-tight sm:text-2xl">
                  {content.directionTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/92">
                  {content.directionText}
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {companyPoints.map((item, index) => (
                <article
                  className="animate-fade-up rounded-[1.6rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_45px_rgba(70,90,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(70,90,50,0.14)]"
                  key={item.title}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <CompanyPointIcon title={item.title} />
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-emerald-700">
                      {content.focusTag}
                    </p>
                  </div>
                  <h3 className="font-serif text-xl text-slate-950 sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl animate-fade-up">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">{content.relationsTag}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {content.relationsTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-700">
              {content.relationsText}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {collaborationHighlights.map((item, index) => (
              <article
                key={item.title}
                className="animate-fade-up group overflow-hidden rounded-[1.8rem] border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(70,90,50,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(70,90,50,0.16)]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <img className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:-translate-y-1" src={item.image} alt={item.title} />
                <div className="p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="animate-fade-up group overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-[0_20px_55px_rgba(70,90,50,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(70,90,50,0.14)]">
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <img className="h-72 w-full object-cover transition duration-[900ms] group-hover:scale-[1.04] sm:h-80 lg:h-full lg:min-h-[20rem]" src={citrusTwo} alt="Tango orange cultivation" />
                <div className="p-7 sm:p-9">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-emerald-700">
                    {content.greenhouseTag}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">
                    {content.greenhouseTitle}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    {content.greenhouseText}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] bg-[#f7f7f0] p-4 transition duration-500 hover:-translate-y-1 hover:bg-[#f3f4e8]">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{content.expertiseTag}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {content.expertiseText}
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] bg-[#f7f7f0] p-4 transition duration-500 hover:-translate-y-1 hover:bg-[#f3f4e8]">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{content.exportTag}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {content.exportText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="animate-fade-up group overflow-hidden rounded-[1.8rem] border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(70,90,50,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(70,90,50,0.16)]">
                <img className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" src={fertilizerIndustryTwo} alt="Fertilizer industry collaboration" />
                <div className="p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700">
                    {content.infraTag}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {content.infraText}
                  </p>
                </div>
              </article>
              <article className="animate-fade-up group animate-float overflow-hidden rounded-[1.8rem] border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(70,90,50,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(70,90,50,0.16)]">
                <img className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" src={natureVisual} alt="Spanish natural farmland landscape" />
                <div className="p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700">
                    {content.farmLifeTag}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {content.farmLifeText}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="mb-10 max-w-3xl animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">{content.highlightsTag}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {content.highlightsTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredSectors.map((story, index) => (
              <article
                key={story.title}
                className="animate-fade-up group overflow-hidden rounded-[1.8rem] border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(70,90,50,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(70,90,50,0.16)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:-translate-y-1" src={story.image} alt={story.title} />
                <div className="p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700">
                    {story.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight text-slate-950">{story.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{story.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="mb-10 max-w-3xl animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">{content.productsTag}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {content.productsTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {content.productsText}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {allProducts.map((product, index) => (
            <a
              className="animate-fade-up group overflow-hidden rounded-[1.7rem] border border-emerald-100 bg-white shadow-[0_16px_45px_rgba(70,90,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(70,90,50,0.14)]"
              href={`#/products/${product.slug}`}
              key={product.name}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="overflow-hidden rounded-t-[1.7rem] bg-[linear-gradient(180deg,#f7faee_0%,#efe5d2_100%)]">
                <img
                  className="h-64 w-full object-contain p-5 transition duration-700 group-hover:scale-105"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-5">
                <p className="text-[0.64rem] font-bold uppercase tracking-[0.24em] text-emerald-700">
                  {product.category}
                </p>
                <h3 className="mt-2 font-serif text-xl text-slate-950">{product.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{product.note}</p>
                <p className="mt-4 text-sm font-bold text-emerald-700">{content.viewDetails}</p>
              </div>
            </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash())
  const [language, setLanguage] = useState('en')
  const productSlug = route.startsWith('/products/') ? route.replace('/products/', '') : null
  const selectedProduct = productSlug ? getProductBySlug(productSlug, language) : null

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <LanguageProvider language={language} setLanguage={setLanguage}>
      <div className="relative min-h-screen overflow-hidden bg-[#f7f7f2] text-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[44rem] overflow-hidden">
            <img className="h-full w-full object-cover" src={heroImgSrc} alt="" aria-hidden="true" />
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={heroImgSrc}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,51,22,0.82)_0%,rgba(65,96,37,0.74)_32%,rgba(217,139,38,0.58)_72%,rgba(247,247,242,0)_100%)]" />
          </div>
          <div className="absolute left-[-5rem] top-10 h-72 w-72 rounded-full bg-lime-200/20 blur-3xl animate-drift" />
          <div className="absolute right-[-4rem] top-16 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl animate-drift-delayed" />
        </div>

        {route === '/about-us' && <AboutUs />}
        {route === '/contact-us' && <ContactUs />}
        {route === '/products' && <ProductsPage />}
        {productSlug && <ProductDetailPage product={selectedProduct} />}
        {(route === '/' || route === '') && <HomePage />}
        {!['/', '/about-us', '/contact-us', '/products', ''].includes(route) && !productSlug && <HomePage />}
      </div>
    </LanguageProvider>
  )
}

export default App
