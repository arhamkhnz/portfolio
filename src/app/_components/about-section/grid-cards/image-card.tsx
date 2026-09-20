import { MdBrokenImage } from "react-icons/md";

export default function ImageCard() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <MdBrokenImage size={38} className="text-white" />
      <p className="text-center text-lg text-red-500">Oops, nothing to see here! I&apos;m camera-shy!</p>
    </div>
  );
}
