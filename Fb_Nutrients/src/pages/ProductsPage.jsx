import { useState } from 'react'
import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer.jsx'
import { allProducts, productFamilies } from '../data/siteContent.js'

function ProductsPage() {
  const [selectedFamily, setSelectedFamily] = useState('All Products')
  const visibleProducts =
    selectedFamily === 'All Products'
      ? allProducts
      : allProducts.filter((product) => product.family === selectedFamily)

  return (
    <>
      <header className="relative px-5 pt-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Navigation />

          <div className="mx-auto max-w-4xl pb-20 pt-14 text-center text-white">
            <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.3em] text-lime-100">
              Products
            </p>
            <h1 className="animate-fade-up-delayed mt-5 font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Fertilizers and plant nutrition products in one dedicated section.
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
              Explore the complete range of agricultural products in one place, including solutions
              for crop nutrition, root development, plant resilience, and more efficient field performance.
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-5 pb-24 sm:px-8 lg:px-14">
        <section className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {['All Products', ...productFamilies].map((family, index) => (
              <button
                className={`animate-fade-up rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition duration-300 ${
                  selectedFamily === family
                    ? 'border-emerald-700 bg-emerald-700 text-white'
                    : 'border-emerald-200 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
                key={family}
                onClick={() => setSelectedFamily(family)}
                type="button"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {family}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <a
                className="animate-fade-up group rounded-[1.6rem] border border-emerald-100 bg-white p-4 shadow-[0_18px_50px_rgba(70,90,50,0.1)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(70,90,50,0.16)]"
                href={`#/products/${product.slug}`}
                key={product.name}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[0.64rem] font-bold uppercase tracking-[0.24em] text-emerald-700">
                    {product.category}
                  </span>
                  <span className="rounded-full bg-[linear-gradient(135deg,#224b29,#d98b26)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white">
                    Spain
                  </span>
                </div>

                <div className="overflow-hidden rounded-[1.2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f7faee_0%,#efe5d2_100%)]">
                  <img
                    className="h-64 w-full object-contain p-5 transition duration-700 group-hover:scale-105"
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="pt-5">
                  <h2 className="font-serif text-2xl text-slate-950">{product.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{product.note}</p>
                  <p className="mt-4 text-sm font-bold text-emerald-700">View product details</p>
                </div>
              </a>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="mt-10 rounded-[1.6rem] border border-emerald-100 bg-white p-8 text-center text-slate-700 shadow-[0_16px_45px_rgba(70,90,50,0.08)]">
              No products are currently assigned to this family.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ProductsPage
