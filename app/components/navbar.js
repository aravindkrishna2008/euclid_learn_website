import Link from "next/link";

const Navbar = () => {
  const pages = [
    { name: "AP", path: "/ap" },
    { name: "SAT", path: "/sat" },
    { name: "ACT", path: "/act" },
    { name: "AIME", path: "/aime" },
    { name: "USACO", path: "/usaco" },
    { name: "PRICING", path: "/pricing" },
    { name: "TEACHERS", path: "/teachers" },
  ];
  return (
    <div className="flex flex-row text-[1.09375vw] font-semibold justify-between items-center py-[1.5vw] bg-white px-[6.25vw]">
      <div className="py-[0.625vw] px-[0.9375vw] text-neutral-400">
        <Link href="/">
          <img src="/logo/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex flex-row">
        {pages.map((page) => (
          <div className="py-[0.625vw] px-[0.9375vw] text-neutral-400 text-[1.09375vw]">
            <Link href={page.path}>{page.name}</Link>
          </div>
        ))}
      </div>
      <p className="text-[#3958F2] font-semibold">ENROLL NOW</p>
    </div>
  );
};

export default Navbar;
