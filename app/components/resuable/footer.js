import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const pages = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms and Conditions", path: "/TOS" },
  ];

  return (
    <footer className="bg-[#25272C] px-[10vw] h-[45vw] py-[5vw] relative">
      <div className="flex w-[40vw] text-[1.25vw] text-[#B6BAC3] cursor-pointer font-light flex-row justify-between">
        <div className="flex flex-col gap-[1vw]">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <p>Discord</p>
          <p>Youtube</p>
          <p>Instagram</p>
          <p>Twitter/X</p>
        </div>
        <div className="flex flex-col gap-[1vw]">
          {pages.map((page, index) => (
            <div key={index} className="hover:underline">
              <Link legacyBehavior href={page.path}>
                <a>{page.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Image
        width={10000}
        height={10000}
        src="/icons/smiley/footer.svg"
        className="w-[40vw] z-30 absolute right-[8vw] bottom-0 mt-[5vw]"
      />
      <div className="absolute bottom-[5.8vw]">
        <h1 className="text-[2.8vw] text-white font-semibold w-[32vw] leading-[115%]">
          Providing Guidance, One Student at a Time
        </h1>
        <Image
          width={10000}
          height={10000}
          src="/logo/logo2.svg"
          className="w-[7.5vw] mt-[2vw]"
        />
        <p className="mt-[2vw] text-white text-[0.8vw]">
          Webpage created by Aravindkrishna Arivudainambi
        </p>
      </div>
    </footer>
  );
};

export default Footer;