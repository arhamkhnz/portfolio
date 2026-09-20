import Link from "next/link";

export default function ShowcasePage() {
  return (
    <div className="relative flex h-dvh w-screen items-center justify-center pb-40 lg:pb-0">
      <Link href="/" className="absolute top-5 left-5 font-google-sans-flex font-medium text-white text-xl">
        Arham Khan&nbsp;<span className="text-red-500">Designs</span>
        <span className="text-4xl text-red-500">.</span>
      </Link>

      <div className="p-5 text-4xl text-white">
        Coming <span className="text-red-500">Soon</span>
      </div>
    </div>
  );
}
