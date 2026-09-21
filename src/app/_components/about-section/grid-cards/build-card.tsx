import { whatIBuild } from "../../../_data/what-i-build";

export default function BuildCard() {
  return (
    <>
      <p className="font-medium text-3xl text-red-500 tracking-tight lg:text-4xl">What I Build & Worked On!</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {whatIBuild.map((element) => (
          <div
            key={element}
            className="relative select-none items-center whitespace-nowrap rounded-md bg-neutral-800/70 px-2 py-1 font-google-sans-flex font-medium text-sm text-white"
          >
            <div className="absolute top-2/4 left-1 size-4 -translate-y-2/4">
              <span className="mx-auto mt-1 block size-2 rounded-full bg-red-500 content-['']"></span>
            </div>
            <span className="ml-4">{element}</span>
          </div>
        ))}
      </div>
    </>
  );
}
