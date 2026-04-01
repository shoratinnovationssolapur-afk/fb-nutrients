import Footer from '../components/Footer.jsx'
import Navigation from '../components/Navigation.jsx'

function ProductDetailPage({ product }) {
  if (!product) {
    return (
      <>
        <header className="relative px-5 pt-4 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <Navigation />
            <div className="mx-auto max-w-4xl pb-20 pt-14 text-center text-white">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-100">Product Not Found</p>
              <h1 className="mt-5 font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
                The requested product could not be found.
              </h1>
            </div>
          </div>
        </header>
        <Footer />
      </>
    )
  }

  return (
    <>
      <header className="relative px-5 pt-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Navigation />

          <div className="grid gap-8 pb-20 pt-10 md:gap-10 md:pt-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="animate-fade-up text-white">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-100">{product.category}</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                {product.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-lime-100"
                  href="#/products"
                >
                  Back to Products
                </a>
                <a
                  className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                  href="#/contact-us"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="animate-fade-up-delayed overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur">
              <img
                className="h-[18rem] w-full rounded-[1.35rem] object-contain bg-[linear-gradient(180deg,#f7faee_0%,#efe5d2_100%)] p-4 sm:h-[24rem] sm:p-5 lg:h-[30rem]"
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-5 pb-24 sm:px-8 lg:px-14">
        <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_22px_60px_rgba(70,90,50,0.1)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-100/60 blur-3xl" />
            <div className="absolute left-0 top-24 h-32 w-32 rounded-full bg-emerald-100/50 blur-3xl" />
            <div className="relative">
              <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">
                Product Details
              </div>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">
                Overview About The Product
              </h2>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-[linear-gradient(90deg,#224b29,#d98b26)]" />
              <p className="mt-7 text-base leading-8 text-slate-700">{product.description}</p>
              <div className="mt-8 rounded-[1.6rem] border border-emerald-100 bg-[linear-gradient(135deg,#f7fbf2_0%,#fff8ef_100%)] p-6">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.26em] text-emerald-700">
                  Product Summary
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">{product.note}</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-[linear-gradient(135deg,#f5fbef_0%,#fff8ef_100%)] p-8 shadow-[0_22px_60px_rgba(70,90,50,0.1)]">
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-lime-100/60 blur-3xl" />
            <div className="relative">
            <div className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">
              Key Benefits
            </div>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">Why Growers Choose It</h2>
            <div className="mt-6 h-1.5 w-24 rounded-full bg-[linear-gradient(90deg,#224b29,#d98b26)]" />
            <div className="mt-6 grid gap-4">
              {product.benefits.map((benefit, index) => (
                <div
                  className="flex items-start gap-4 rounded-[1.4rem] border border-emerald-100 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_10px_30px_rgba(70,90,50,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(70,90,50,0.1)]"
                  key={benefit}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#224b29,#d98b26)] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ProductDetailPage
