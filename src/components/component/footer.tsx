import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-4 px-6 bg-background text-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <svg
                className=" h-8 w-8 text-zinc-600"
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
            <nav className="flex space-x-4">
              <Link className="text-base font-medium hover:underline" href="#">
                Home
              </Link>
              <Link className="text-base font-medium hover:underline" href="#">
                Services
              </Link>
              <Link className="text-base font-medium hover:underline" href="#">
                Testimonials
              </Link>
              <Link className="text-base font-medium hover:underline" href="#">
                FAQ
              </Link>
              <Link className="text-base font-medium hover:underline" href="#">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4">
              <svg
                className=" h-6 w-6 text-zinc-600"
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <svg
                className=" h-6 w-6 text-zinc-600"
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                className=" h-6 w-6 text-zinc-600"
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
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <p className="text-sm text-zinc-600">
              © Parcel Co. All rights reserved.
            </p>
          </div>
        </footer>
    );
}