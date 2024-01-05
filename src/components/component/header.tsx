import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between bg-background px-6 py-4 text-foreground">
      <div className="flex items-center space-x-4">
        <svg
          className=" h-8 w-8 text-muted-foreground"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
        <span className="text-xl font-bold">Parcel Co.</span>
      </div>
      <nav className="ml-auto flex space-x-4">
        <Link className="text-base font-medium hover:underline" href="#">
          Home
        </Link>
        <Link className="text-base font-medium hover:underline" href="#service">
          Services
        </Link>
        <Link className="text-base font-medium hover:underline" href="#testimonials">
          Testimonials
        </Link>
        <Link className="text-base font-medium hover:underline" href="#faq">
          FAQ
        </Link>
      </nav>
    </header>
  )
}
