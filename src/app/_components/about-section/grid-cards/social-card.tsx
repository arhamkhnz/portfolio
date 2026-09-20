import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaStackOverflow, FaWhatsapp } from "react-icons/fa";

export default function SocialCard() {
  const socials = [
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:md.arhamkhan09@gmail.com",
    },
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/arhamkhnz",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/mohammed-arham-khan/",
    },
    {
      icon: <FaInstagram size={24} />,
      href: "https://www.instagram.com/arhamkhnz/",
    },
    {
      icon: <FaStackOverflow size={24} />,
      href: "https://stackoverflow.com/users/17162742/mohammed-arham-khan",
    },
    {
      icon: <FaPhone size={24} />,
      href: "tel:+916264053892",
    },
    {
      icon: <FaWhatsapp size={24} />,
      href: "https://wa.me/916264053892",
    },
  ];

  return (
    <>
      <div className="w-full">
        <p className="font-normal text-white text-xl tracking-tight lg:text-8xl">Catch me on</p>
      </div>

      <div className="mt-4 grid w-full grid-cols-4 justify-center gap-4 md:grid-cols-8 lg:grid-cols-4">
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            className="group flex aspect-square size-12 items-center justify-center rounded-lg text-white shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:bg-black hover:text-red-500 hover:ring-white/20"
            rel="noopener"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
}
