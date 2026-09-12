import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto  mt-40 ">
      <div>
        <div className="py-10 max-sm:py-5 grid grid-cols-12 max-sm:grid-cols-1  gap-5 border-b border-gray-300">
          <div className="col-span-5 flex max-sm:items-center flex-col">
            <img className="w-35 mb-4" src={logo} alt="" />
            <p style={{ color: "var(--text-color)" }} className="mb-5 max-sm:text-center">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="flex gap-4 font-semibold">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>

          <div className="flex max-sm:hidden flex-col justify-center col-span-2 self-center">
            <h2 className="font-semibold tracking-wider mb-5 ">PRODUCT</h2>
            <ul
              style={{ color: "var(--text-color)" }}
              className="flex flex-col gap-1"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>Technologis</li>
              <li>Project</li>
            </ul>
          </div>

          <div className="flex max-sm:hidden flex-col justify-center col-span-2 self-center">
            <h2 className="font-semibold mb-5 tracking-wider">COMPANY</h2>
            <ul
              style={{ color: "var(--text-color)" }}
              className="flex flex-col gap-1"
            >
              <li>
                <a href="">About</a>
              </li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="flex max-sm:hidden flex-col justify-center col-span-3 self-center">
            <h2 className="font-semibold mb-5">LEGAL</h2>
            <ul
              style={{ color: "var(--text-color)" }}
              className="flex flex-col gap-1"
            >
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div
          style={{ color: "var(--text-color) " }}
          className="flex justify-between max-sm:text-sm max-sm:mx-3 max-sm:mt-5  items-center mt-15 mb-5"
        >
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
