import { useMemo } from 'react'
import { getNavLinks } from '../data/siteContent.js'
import { useLanguage } from './LanguageContext.jsx'
import spanishFlag from '../assets/spanishFlag.svg'

function Navigation() {
  const { language, setLanguage } = useLanguage()

  const content = useMemo(() => {
    if (language === 'es') {
      return {
        brandTop: 'FBNE Espana',
        quality: 'Calidad certificada',
        agronutrition: 'Agronutricion avanzada',
        languageLabel: 'Contenido en espanol',
        eyebrow: 'Expertos en biotecnologia y agronutricion',
        collection: 'Coleccion Espana',
        nav: getNavLinks('es'),
      }
    }

    return {
      brandTop: 'FBNE Spain',
      quality: 'Certified quality',
      agronutrition: 'Advanced agronutrition',
      languageLabel: 'English content',
      eyebrow: 'Experts In Biotechnology And Agronutrition',
      collection: 'Spain Collection',
      nav: getNavLinks('en'),
    }
  }, [language])

  return (
    <>
      <div className="flex flex-col gap-3 border-b border-white/15 py-3 text-sm text-white/85 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 font-semibold">
          <img
            src={spanishFlag}
            alt="Spain flag"
            className="h-5 w-7 rounded-sm object-cover shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
          />
          <span>{content.brandTop}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 max-sm:justify-between">
          <span>{content.quality}</span>
          <span>{content.agronutrition}</span>
          <span>{content.languageLabel}</span>
          <div className="ml-0 flex rounded-full border border-white/20 bg-white/10 p-1 sm:ml-2">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                language === 'en' ? 'bg-white text-slate-900' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                language === 'es' ? 'bg-white text-slate-900' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-4 flex flex-col gap-4 rounded-[1.8rem] border border-white/15 bg-white/8 px-4 py-4 text-white backdrop-blur sm:px-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col max-md:text-center">
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-lime-100">
            {content.eyebrow}
          </span>
          <span className="mt-2 font-serif text-xl font-semibold sm:text-2xl">{content.collection}</span>
        </div>

        <div className="flex flex-wrap gap-2 text-sm font-semibold max-md:justify-center">
          {content.nav.map((link) => (
            <a className="rounded-full px-3 py-2 transition hover:bg-white/15 sm:px-4" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navigation
