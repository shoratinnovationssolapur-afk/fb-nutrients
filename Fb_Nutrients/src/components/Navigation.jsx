import { navLinks } from '../data/siteContent.js'

function Navigation() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 py-3 text-sm text-white/85">
        <div className="font-semibold">FBNE Spain</div>
        <div className="flex flex-wrap gap-4">
          <span>Certified quality</span>
          <span>Advanced agronutrition</span>
          <span>English content</span>
        </div>
      </div>

      <nav className="mt-4 flex flex-col gap-4 rounded-[1.8rem] border border-white/15 bg-white/8 px-5 py-4 text-white backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-lime-100">
            Experts In Biotechnology And Agronutrition
          </span>
          <span className="font-serif text-2xl font-semibold">Spain Collection</span>
        </div>

        <div className="flex flex-wrap gap-2 text-sm font-semibold">
          {navLinks.map((link) => (
            <a className="rounded-full px-4 py-2 transition hover:bg-white/15" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navigation
