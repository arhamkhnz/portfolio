import StrikeThrough from "../../ui/strike-through";

export default function Introduction() {
  return (
    <>
      <p className="font-medium text-3xl text-red-500 tracking-tight lg:text-4xl">Hey, welcome to my site!</p>
      <p className="mt-4 font-light text-sm text-white lg:text-lg">
        {"I'm Arham, creative developer and\u00a0"}
        <StrikeThrough className="italic decoration-orange">caffeine addict</StrikeThrough>
        {"\u00a0from India, merging design and code with flair, like the perfect blend of coffee and espresso."}
        <br />
        <br />
        When I&apos;m off the grid, you&apos;ll find me traveling, exploring new coffee shops, or enjoying moments of
        solitude, each moment brewing inspiration.
      </p>
    </>
  );
}
