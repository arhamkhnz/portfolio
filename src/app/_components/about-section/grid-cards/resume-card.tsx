import { FaDownload } from "react-icons/fa6";

export default function ResumeCard() {
  const path = "/cv/resume-arham-khan.pdf";

  const _handleDownload = () => {
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("download", "resume-arham-khan.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <p className="text-white text-xl tracking-tight lg:text-7xl">Browse my résumé!</p>
        <p className="mt-4 text-sm text-zinc-400 md:max-w-xs lg:max-w-none">
          Have an exciting project or job opening? Dive into my résumé and explore details of my journey. If something
          catches your eye, don&apos;t hesitate to reach out!
          <br />
        </p>
      </div>
      <div className="mt-8 w-full md:max-w-xs lg:max-w-none">
        <button
          // onClick={handleDownload}
          type="button"
          className="flex h-12 w-full items-center justify-between rounded-lg bg-white px-4 py-2 font-semibold text-black text-sm duration-200 hover:bg-white/5 hover:text-white"
        >
          Download my CV
          <FaDownload size={24} />
        </button>
      </div>
    </>
  );
}
