import Link from "next/link";

export default function ShowcasePage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center px-6">
      <Link
        href="/"
        className="absolute top-5 left-5 font-google-sans-flex font-medium text-white text-xl leading-none"
      >
        Arham Khan<span className="inline-block origin-bottom-left scale-[1.8] text-red-500">.</span>
      </Link>

      <p className="max-w-2xl text-center font-google-sans-flex text-lg leading-relaxed text-white sm:text-2xl">
        A new site is on the way at{" "}
        <a href="https://arhamkhnz.com" className="text-red-500 underline underline-offset-4">
          arhamkhnz.com
        </a>
        . In the meantime, feel free to explore my GitHub at{" "}
        <a
          href="https://github.com/arhamkhnz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline underline-offset-4"
        >
          github.com/arhamkhnz
        </a>
        .
      </p>
    </main>
  );
}
