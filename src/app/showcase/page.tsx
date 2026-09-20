import Link from "next/link";

export default function ShowcasePage() {
  return (
    <div className="relative flex h-dvh w-screen items-center justify-center pb-40 lg:pb-0">
      <Link href="/" className="absolute top-5 left-5 font-helixa-bold text-white text-xl">
        Arham Khan&nbsp;<span className="text-orange">Designs</span>
        <span className="text-4xl text-orange">.</span>
      </Link>

      <div className="p-5 text-4xl text-white">
        Coming <span className="text-orange">Soon</span>
      </div>
    </div>
  );
}
