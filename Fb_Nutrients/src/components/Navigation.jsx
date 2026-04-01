import { navLinks } from '../data/siteContent.js'

function Navigation() {
  return (
    <>
      <div className="flex flex-col gap-3 border-b border-white/15 py-3 text-sm text-white/85 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="font-semibold">FBNE Spain</div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <span>Certified quality</span>
          <span>Advanced agronutrition</span>
          <span>English content</span>
        </div>
      </div>

      <nav className="mt-4 flex flex-col gap-4 rounded-[1.8rem] border border-white/15 bg-white/8 px-4 py-4 text-white backdrop-blur sm:px-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-lime-100">
            Experts In Biotechnology And Agronutrition
          </span>
          <span className="font-serif text-xl font-semibold sm:text-2xl">Spain Collection</span>
        </div>

        <div className="flex flex-wrap gap-2 text-sm font-semibold">
          {navLinks.map((link) => (
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
