function IconBadge({ children }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#224b29,#d98b26)] text-white shadow-[0_10px_24px_rgba(34,75,41,0.22)]">
      {children}
    </div>
  )
}

function CompanyPointIcon({ title }) {
  if (title === 'Research and Development' || title === 'Investigacion y Desarrollo') {
    return (
      <IconBadge>
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3v4.2l-4.8 8.1A3.6 3.6 0 0 0 8.3 21h7.4a3.6 3.6 0 0 0 3.1-5.7L14 7.2V3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path d="M9 12h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          <circle cx="10" cy="15.2" r="1" fill="currentColor" />
          <circle cx="13" cy="17" r="1" fill="currentColor" />
          <circle cx="15.2" cy="14.3" r="1" fill="currentColor" />
        </svg>
      </IconBadge>
    )
  }

  if (title === 'Sustainable Agriculture' || title === 'Agricultura Sostenible') {
    return (
      <IconBadge>
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20c4.2 0 7-2.9 7-7.1C19 8.2 15.8 5 11.1 5 6.9 5 4 7.9 4 12.1 4 16.3 7.1 20 12 20Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M8.2 13.2c2.4-.2 4.5-1.6 5.8-3.7.6 3-1 6-3.8 7.4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M12 20v-4.2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      </IconBadge>
    )
  }

  if (title === 'Global Distribution' || title === 'Distribucion Global') {
    return (
      <IconBadge>
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M5.5 9.5h13M5.5 14.5h13M12 5c1.8 1.9 2.8 4.4 2.8 7S13.8 17.1 12 19M12 5c-1.8 1.9-2.8 4.4-2.8 7S10.2 17.1 12 19"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M17.7 7.1l1.8-.6-.6 1.8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </IconBadge>
    )
  }

  return <div className="h-11 w-11 rounded-full bg-[linear-gradient(135deg,#224b29,#d98b26)]" />
}

export default CompanyPointIcon
