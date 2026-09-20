import "./icon-scroll.scss";

export default function IconScroll() {
  //   const handleScroll = () => {
  //     const aboutSection = document.getElementById("about-section");
  //     if (aboutSection) {
  //       aboutSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  return (
    <div className="hidden items-center justify-center md:flex">
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
    </div>
  );
}
