import logo from "../assets/logo copy.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-red-800 flex-grow font-[sans-serif]  w-screen">
        <div className="flex justify-center items-center">
          <Link to="./">
            <img src={logo} className="w-[50px] h-[50px]" alt="logo" />
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
