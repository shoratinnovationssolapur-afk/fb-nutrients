import { useEffect, useState } from 'react'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import {
  allProducts,
  companyPoints,
  getProductBySlug,
  heroImgSrc,
  heroVideo,
  metrics,
} from './data/siteContent.js'

function getRouteFromHash() {
  const hash = window.location.hash || '#/'
  return hash.replace('#', '') || '/'
}

function HomePage() {
  return (
    <>
      <header className="relative px-5 pt-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Navigation />

          <div className="grid gap-8 pb-20 pt-10 md:gap-10 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
            <div className="animate-fade-up rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(18,30,16,0.72)_0%,rgba(24,37,20,0.58)_52%,rgba(24,37,20,0.34)_100%)] p-5 text-white shadow-[0_24px_70px_rgba(20,20,10,0.22)] backdrop-blur-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-50">
                Advanced fertilizers for modern agriculture
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-7xl">
                Premium fertilizer solutions from Spain for healthier crops and stronger yields.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
                Our agricultural fertilizers are designed to improve soil balance, support nutrient
                uptake, strengthen plant development, and help growers achieve more consistent field
                performance across every stage of the crop cycle.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-100"
                  href="#/products"
                >
                  Our Products
                </a>
                <a
                  className="rounded-full border border-white/45 bg-white/12 px-6 py-3 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                  href="#/about-us"
                >
                  Who We Are
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
                    Fertilizer expertise from Spain
                  </p>
                  <p className="mt-2 font-serif text-xl leading-tight sm:text-2xl">
                    Better nutrition, stronger crops, and smarter agricultural performance.
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
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">Who We Are</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Built for growers who need healthier crops, stronger roots, and better field results.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                We create fertilizer and plant nutrition solutions that support soil health, nutrient
                efficiency, crop vigor, and more reliable agricultural performance from planting to harvest.
              </p>

              <div className="mt-7 rounded-[1.7rem] bg-[linear-gradient(135deg,#224b29_0%,#4f6f2d_52%,#cf8a2d_100%)] p-6 text-white shadow-[0_20px_50px_rgba(50,60,30,0.18)]">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-lime-50">
                  Our Promise
                </p>
                <p className="mt-3 font-serif text-xl leading-tight sm:text-2xl">
                  Practical fertilizer programs designed to improve crop nutrition, plant strength, and overall yield quality.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/92">
                  From nutrient balance to root establishment and bloom support, our approach is shaped around real agricultural needs.
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
                    <div className="h-11 w-11 rounded-full bg-[linear-gradient(135deg,#224b29,#d98b26)]" />
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-emerald-700">
                      Agricultural Focus
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
          <div className="mb-10 max-w-3xl animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">Our Products</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Complete fertilizer and plant nutrition range in one section.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Explore all products together in one clear section, from crop nutrition and bloom support
              to root development and plant resilience.
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
                <p className="mt-4 text-sm font-bold text-emerald-700">View product details</p>
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
  const productSlug = route.startsWith('/products/') ? route.replace('/products/', '') : null
  const selectedProduct = productSlug ? getProductBySlug(productSlug) : null

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
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
  )
}

export default App
