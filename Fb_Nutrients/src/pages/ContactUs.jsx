import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer.jsx'

const contactCards = [
  {
    title: 'Company Name',
    text: 'Official brand and business identity for agricultural fertilizers and ecological nutrients.',
    value: 'Fertilizantes B Nutrientes Ecologicos PL FBNE',
  },
  {
    title: 'Phone Number',
    text: 'Contact our team for fertilizer enquiries, product details, and agricultural distribution support.',
    value: '+34 966 676 6329',
  },
  {
    title: 'Address',
    text: 'Our Spain location for company communication, business enquiries, and agricultural operations.',
    value: 'B. Rio Taibila, 40530, Ceuti, Murcia, Spain',
  },
]

function ContactUs() {
  return (
    <>
      <header className="relative px-5 pt-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Navigation />

          <div className="mx-auto max-w-4xl pb-20 pt-10 text-center text-white md:pt-14">
            <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.3em] text-lime-100">
              Contact Us
            </p>
            <h1 className="animate-fade-up-delayed mt-5 font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Let's talk about fertilizers, distribution, and crop nutrition solutions.
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
              Contact us for product guidance, dealership enquiries, export opportunities, or help
              choosing the right fertilizer solution for your crop and soil conditions.
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-5 pb-24 sm:px-8 lg:px-14">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card, index) => (
              <article
                className="animate-fade-up rounded-[1.6rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_45px_rgba(70,90,50,0.08)]"
                key={card.title}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-4 h-11 w-11 rounded-full bg-[linear-gradient(135deg,#224b29,#d98b26)]" />
                <h2 className="font-serif text-xl text-slate-950 sm:text-2xl">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                <p className="mt-5 text-sm font-bold text-emerald-700">{card.value}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_16px_45px_rgba(70,90,50,0.08)] sm:p-8">
            <h2 className="font-serif text-2xl text-slate-950 sm:text-3xl">Send your crop or product requirement</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-emerald-200 px-4 py-3 outline-none"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-emerald-200 px-4 py-3 outline-none"
                placeholder="Email address"
              />
              <input
                className="rounded-2xl border border-emerald-200 px-4 py-3 outline-none md:col-span-2"
                placeholder="Subject"
              />
              <textarea
                className="min-h-36 rounded-2xl border border-emerald-200 px-4 py-3 outline-none md:col-span-2"
                placeholder="Write your message"
              />
            </div>
            <button className="mt-6 rounded-full bg-[linear-gradient(90deg,#224b29,#d98b26)] px-6 py-3 text-sm font-bold text-white">
              Send Message
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ContactUs
