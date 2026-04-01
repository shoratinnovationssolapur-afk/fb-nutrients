import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer.jsx'
import { companyPoints } from '../data/siteContent.js'
import GrassImage from '../assets/GrassImage.jpg'

function AboutUs() {
  return (
    <>
      <header className="relative px-5 pt-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Navigation />

          <div className="grid gap-8 pb-20 pt-10 md:gap-10 md:pt-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="animate-fade-up text-white">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-100">About Us</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
                A Spanish fertilizer brand dedicated to crop nutrition, soil health, and farm productivity.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
                Our work is centered on practical agricultural performance, helping growers improve
                nutrient efficiency, crop quality, and more stable field results with the right
                fertilizer strategy.
              </p>
            </div>

            <div className="animate-fade-up-delayed overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur">
              <img
                className="h-[18rem] w-full rounded-[1.35rem] object-cover sm:h-[24rem] lg:h-[30rem]"
                src={GrassImage}
                alt="About FB Nutrients Spain"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-5 pb-24 sm:px-8 lg:px-14">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">Company Profile</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Focused on plant nutrition, fertilizer innovation, and sustainable agricultural growth.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              FB Nutrients Spain is presented as a professional fertilizer and plant nutrition brand
              inspired by Spanish agricultural values. Our goal is to offer dependable products that
              support root development, crop vigor, nutrient balance, and stronger harvest potential
              for growers, dealers, and distribution partners.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {companyPoints.map((item, index) => (
              <article
                className="animate-fade-up rounded-[1.6rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_45px_rgba(70,90,50,0.08)]"
                key={item.title}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-4 h-11 w-11 rounded-full bg-[linear-gradient(135deg,#224b29,#d98b26)]" />
                <h3 className="font-serif text-xl text-slate-950 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AboutUs
