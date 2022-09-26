import React from "react";
import { motion } from "framer-motion";
import { MdShoppingCart } from "react-icons/md";
import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* for desktop & tablet */}
      <div className="hidden md:flex h-full w-full items-center justify-between">
        <Link to={"/"} className="flex item-center gap-3">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-headingColor text-xl font-bold">Duvera</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-3 -right-0 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold ">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"
              alt="UserProfile"
              onClick={login}
            />
          </div>
        </div>
      </div>

      {/* for mobile device */}
      <div className="flex md:hidden h-full w-full"></div>
    </header>
  );
}

export default Header;
