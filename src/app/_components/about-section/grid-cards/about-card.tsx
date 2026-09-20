import StrikeThrough from "../../ui/strike-through";

export default function AboutCard() {
  return (
    <>
      <p className="font-medium text-3xl text-red-500 tracking-tight lg:text-4xl">Who Am I ?</p>
      <p className="mt-4 font-light text-sm text-white lg:text-lg">
        {"I'm a creative Full Stack Developer with\u00a0"}
        <StrikeThrough className="italic decoration-orange">several years</StrikeThrough> of experience in the industry.
        Proficient in various JavaScript frameworks and skilled in other technologies that catch my interest, my tech
        toolkit is as diverse as a barista&apos;s coffee menu. Over the years, I&apos;ve applied my skills across
        various domains such as <StrikeThrough className="italic decoration-orange">Ed-Tech</StrikeThrough>,{" "}
        <StrikeThrough className="italic decoration-orange">Healthcare</StrikeThrough>
        {",\u00a0"}
        <StrikeThrough className="italic decoration-orange">E-Commerce</StrikeThrough>
        {" and\u00a0"}
        <StrikeThrough className="italic decoration-orange">Service-Based industries</StrikeThrough>, while also
        consulting for international clients.
        {/* I believe the&nbsp;
        <StrikeThrough className="italic decoration-orange">sky&apos;s never the limit</StrikeThrough>
        &nbsp; and carving one&apos;s visions into existence. */}
      </p>

      <p className="mt-4 font-light text-sm text-white lg:text-lg">
        When I&apos;m not responding to your <StrikeThrough className="italic decoration-orange">texts</StrikeThrough>{" "}
        or <StrikeThrough className="italic decoration-orange">emails</StrikeThrough>, you can safely assume I&apos;ve
        packed my bags and escaped on a much-needed vacation.
      </p>
    </>
  );
}
