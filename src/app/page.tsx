import Image from "next/image";
import { TrackForm } from "@/components/component/track_form";
import dl from "@/assets/delivery_guy_min.jpg";
export default function Home() {
  return (
      <main className="flex-1 bg-background text-foreground">
        <section className="relative h-[500px] overflow-hidden">
          <Image
            alt="Background"
            className="object-cover w-full h-full"
            height="500"
            src={dl}
            width="1000"
          />
          <div className=" absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold">
              Track your shipment
            </h1>
            <TrackForm className=" bg-background/90" />
          </div>
        </section>
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-4">
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
                <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                <circle cx="7" cy="18" r="2" />
                <path d="M15 18H9" />
                <circle cx="17" cy="18" r="2" />
              </svg>
              <div>
                <h3 className="text-lg font-bold">Express Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Fast and reliable delivery service.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
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
                <circle cx="12" cy="12" r="10" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold">International Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Delivering packages across the globe.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <h3 className="text-lg font-bold">Same Day Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Express delivery within the same day.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <div>
                <h3 className="text-lg font-bold">Insured Shipment</h3>
                <p className="text-sm text-muted-foreground">
                  Secure and insured shipments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 bg-background text-foreground">
          <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-start space-y-2">
              <p className="text-sm text-muted-foreground">
                The shipping was fast and the package arrived in perfect
                condition. Highly recommended.
              </p>
              <p className="text-sm font-bold ">- John Doe</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <p className="text-sm text-muted-foreground">
                Great service! They were very helpful and the delivery was on
                time.
              </p>
              <p className="text-sm font-bold">- Jane Smith</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <p className="text-sm text-muted-foreground">
                Parcel Co. is the best shipping company I`&apos;`ve worked with.
                Fantastic customer service.
              </p>
              <p className="text-sm font-bold">- Robert Johnson</p>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details>
              <summary className="text-lg font-bold cursor-pointer">
                How to track my package?
              </summary>
              <p className="text-sm text-muted-foreground">
                You can track your package using the tracking number provided to
                you at the time of shipment.
              </p>
            </details>
            <details>
              <summary className="text-lg font-bold cursor-pointer">
                What is the delivery time?
              </summary>
              <p className="text-sm text-muted-foreground">
                The delivery time depends on the type of service you choose.
                Express shipping usually delivers within 1-3 business days.
              </p>
            </details>
            <details>
              <summary className="text-lg font-bold cursor-pointer">
                What is insured shipment?
              </summary>
              <p className="text-sm text-muted-foreground">
                Insured shipment provides extra security for your package. If
                the package is lost or damaged, you will receive full
                compensation.
              </p>
            </details>
          </div>
        </section>
      </main>
  );
}
