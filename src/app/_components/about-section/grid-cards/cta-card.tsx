import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function CTACard() {
  return (
    <>
      <div>
        <p className="text-orange text-primary text-xl tracking-tight lg:text-6xl">
          Got a brilliant project idea? Let’s make it come to life!
        </p>
      </div>
      <div className="mt-8 flex w-full flex-col gap-2 sm:flex-row">
        <a
          href="https://wa.me/916264053892"
          target="_blank"
          className="flex h-12 flex-1 items-center justify-between rounded-lg bg-white px-4 py-2 text-left font-semibold text-black text-sm duration-200 hover:bg-white/5 hover:text-white"
          rel="noopener"
        >
          Ping Me on WhatsApp
          <FaWhatsapp size={24} />
        </a>

        <a
          href="mailto:md.arhamkhan09@gmail.com"
          target="_blank"
          className="flex h-12 flex-1 items-center justify-between rounded-lg bg-orange px-4 py-2 font-semibold text-sm text-white duration-200 hover:bg-white/5 hover:text-white"
          rel="noopener"
        >
          Drop Me an Email
          <FaEnvelope size={24} />
        </a>
      </div>
    </>
  );
}
