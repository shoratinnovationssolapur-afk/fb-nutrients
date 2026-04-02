import { useState } from 'react'
import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer.jsx'
import { useLanguage } from '../components/LanguageContext.jsx'
import { heroImgSrc, heroVideo } from '../data/siteContent.js'

const WHATSAPP_NUMBER = '349666766329'

function ContactUs() {
  const { language } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const content =
    language === 'es'
      ? {
          eyebrow: 'Contacto',
          title: 'Hablemos de fertilizantes y nutricion del cultivo.',
          intro:
            'Contactanos para orientacion de producto, consultas de distribucion o ayuda para elegir la solucion adecuada para tu suelo.',
          cards: [
            {
              title: 'Nombre de la empresa',
              icon: '🏢',
              text: 'Identidad oficial de marca y negocio para fertilizantes agricolas.',
              value: 'Fertilizantes B Nutrientes Ecologicos PL FBNE',
            },
            {
              title: 'Numero de telefono',
              icon: '📞',
              text: 'Contacta a nuestro equipo para consultas y soporte de distribucion.',
              value: '+34 966 676 6329',
            },
            {
              title: 'Direccion',
              icon: '📍',
              text: 'Nuestra ubicacion en Espana para consultas comerciales y operaciones.',
              value: 'B. Rio Taibila, 40530, Ceuti, Murcia, Spain',
            },
          ],
          formTitle: 'Enviar un mensaje',
          formText: 'Te redirigiremos a WhatsApp para completar tu solicitud.',
          labels: {
            name: 'Nombre',
            email: 'Correo electronico',
            subject: 'Asunto',
            message: 'Mensaje',
          },
          placeholders: {
            name: 'Tu nombre completo',
            email: 'Direccion de correo',
            subject: 'Ej. Distribucion mayorista, Asesoria de producto',
            message: 'Cuentanos sobre tus necesidades...',
          },
          submit: 'Enviar mensaje por WhatsApp',
          mapTitle: 'Ubicacion de la oficina',
          whatsappLines: {
            title: '🌱 *Nueva consulta: B Nutrientes Ecologicos*',
            name: 'Nombre',
            email: 'Correo',
            subject: 'Asunto',
            message: 'Mensaje',
            sent: 'Enviado desde la web',
          },
        }
      : {
          eyebrow: 'Contact Us',
          title: "Let's talk about fertilizers and crop nutrition.",
          intro:
            'Contact us for product guidance, dealership enquiries, or help choosing the right fertilizer solution for your soil.',
          cards: [
            {
              title: 'Company Name',
              icon: '🏢',
              text: 'Official brand and business identity for agricultural fertilizers.',
              value: 'Fertilizantes B Nutrientes Ecologicos PL FBNE',
            },
            {
              title: 'Phone Number',
              icon: '📞',
              text: 'Contact our team for fertilizer enquiries and distribution support.',
              value: '+34 966 676 6329',
            },
            {
              title: 'Address',
              icon: '📍',
              text: 'Our Spain location for business enquiries and operations.',
              value: 'B. Rio Taibila, 40530, Ceuti, Murcia, Spain',
            },
          ],
          formTitle: 'Send a Message',
          formText: 'We will redirect you to WhatsApp to complete your request.',
          labels: {
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
          },
          placeholders: {
            name: 'Your full name',
            email: 'Email address',
            subject: 'e.g. Bulk Distribution, Product Advice',
            message: 'Tell us about your requirements...',
          },
          submit: 'Send Message on WhatsApp',
          mapTitle: 'Office Location',
          whatsappLines: {
            title: '🌱 *New Inquiry: B Nutrientes Ecologicos*',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            sent: 'Sent via Website',
          },
        }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const lines = [
      content.whatsappLines.title,
      '',
      `*${content.whatsappLines.name}:* ${form.name}`,
      `*${content.whatsappLines.email}:* ${form.email}`,
      `*${content.whatsappLines.subject}:* ${form.subject}`,
      `*${content.whatsappLines.message}:* ${form.message}`,
      '',
      `${content.whatsappLines.sent} | ${new Date().toLocaleDateString()}`,
    ]

    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    const win = window.open(url, '_blank')

    if (!win) {
      window.location.href = url
    }

    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <header className="relative overflow-hidden px-5 pt-4 pb-20 sm:px-8 lg:px-14">
        <div className="absolute inset-0">
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,30,14,0.82)_0%,rgba(27,68,38,0.76)_40%,rgba(22,34,18,0.68)_100%)]" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <Navigation />
          <div className="mx-auto max-w-4xl pt-10 text-center text-white md:pt-14">
            <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.3em] text-lime-300">
              {content.eyebrow}
            </p>
            <h1 className="animate-fade-up-delayed mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              {content.intro}
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 -mt-12 px-5 pb-24 sm:px-8 lg:px-14">
        <section className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="grid gap-6">
                {content.cards.map((card, index) => (
                  <article
                    className="animate-fade-up flex items-start gap-4 rounded-[1.6rem] border border-emerald-100 bg-white p-6 shadow-sm"
                    key={card.title}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                      {card.icon}
                    </div>
                    <div>
                      <h2 className="font-serif text-xl text-slate-950">{card.title}</h2>
                      <p className="mt-1 text-sm text-slate-500">{card.text}</p>
                      <p className="mt-3 break-words text-sm font-bold text-emerald-700">{card.value}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl sm:p-10">
                <h2 className="mb-2 font-serif text-2xl text-slate-950 sm:text-3xl">{content.formTitle}</h2>
                <p className="mb-8 text-slate-500">{content.formText}</p>

                <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {content.labels.name}
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-emerald-500"
                      placeholder={content.placeholders.name}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {content.labels.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-emerald-500"
                      placeholder={content.placeholders.email}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {content.labels.subject}
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-emerald-500"
                      placeholder={content.placeholders.subject}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {content.labels.message}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="min-h-36 resize-none rounded-2xl border border-emerald-100 bg-slate-50 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-emerald-500"
                      placeholder={content.placeholders.message}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#224b29,#d98b26)] px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] md:col-span-2"
                  >
                    <span>{content.submit}</span>
                    <span className="text-xl" aria-hidden="true">
                      →
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="mb-24 px-5 sm:px-8 lg:px-14">
        <div className="mx-auto h-[450px] max-w-7xl overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
          <iframe
            title={content.mapTitle}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.5678!2d-1.2117!3d38.1319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63796f7c1d763b%3A0x67356c39f99e4f2a!2sCeut%C3%AD%2C%20Murcia%2C%20Spain!5e0!3m2!1sen!2s!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactUs
