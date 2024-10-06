import logo from "../assets/logo copy.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-red-800 flex justify-center font-[sans-serif] m ">
        <div className="flex justify-center items-center gap-3 p-2">
          <Link to="./">
            <img src={logo} className="w-[30px] h-[30px]" alt="logo" />
          </Link>
          <p className="text-white text-sm">
            © The Virtouso. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
