import { getNavLinks } from '../data/siteContent.js'
import { useLanguage } from './LanguageContext.jsx'
import spanishFlag from '../assets/spanishFlag.svg'

const contactDetails = [
  'Fertilizantes B Nutrientes Ecologicos PL FBNE',
  'B. Rio Taibila, 40530, Ceuti, Murcia, Spain',
  '+34 966 676 6329',
]

function Footer() {
  const { language } = useLanguage()
  const navLinks = getNavLinks(language)
  const content =
    language === 'es'
      ? {
          title: 'Fertilizantes mas inteligentes para cultivos mas sanos, raices mas fuertes y un mejor rendimiento agricola.',
          body:
            'Desarrolladas en torno a la agronutricion, la eficiencia en campo y el cuidado practico del cultivo, nuestras soluciones estan pensadas para apoyar a agricultores, distribuidores y socios agricolas en cada etapa de la produccion.',
          quickLinks: 'Enlaces rapidos',
          contact: 'Contacto',
          copyright:
            'Copyright 2026 FBNE Espana. Fertilizantes agricolas y nutrientes ecologicos de Murcia, Espana.',
        }
      : {
          title:
            'Smarter fertilizers for healthier crops, stronger roots, and better agricultural performance.',
          body:
            'Built around agronutrition, field efficiency, and practical crop care, our solutions are designed to support growers, distributors, and agricultural partners across every stage of production.',
          quickLinks: 'Quick Links',
          contact: 'Contact',
          copyright:
            'Copyright 2026 FBNE Spain. Agricultural fertilizers and ecological nutrients from Murcia, Spain.',
        }

  return (
    <footer className="relative mt-24 px-5 pb-8 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#18341c_0%,#355626_45%,#c8842e_100%)] text-white shadow-[0_28px_80px_rgba(40,35,18,0.22)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={spanishFlag}
                alt="Spain flag"
                className="h-5 w-7 rounded-sm object-cover shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
              />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.34em] text-lime-100">
                {language === 'es' ? 'FBNE Espana' : 'FBNE Spain'}
              </p>
            </div>
            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
              {content.body}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-100">{content.quickLinks}</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/88">
                {navLinks.map((link) => (
                  <a className="transition hover:text-lime-100" href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-100">{content.contact}</p>
              <div className="mt-4 flex flex-col gap-3 text-sm leading-7 text-white/88">
                {contactDetails.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/12 px-6 py-5 text-sm text-white/75 sm:px-8 lg:px-10">
          {content.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
