import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  EllipsisVerticalIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Logo from "../../../assets/logo.png";
import Theme from "@/components/utils/theme/Theme";
import { navVariant } from "@/components/utils/motion/motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(true);
  };

  const closeNav = () => {
    setNav(false);
  };

  const item: any = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  };

  const navItem: any = {
    exit: {
      x: -90,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  };

  return (
    <div className="bg-light-main dark:bg-dark-main">
      <nav className="relative py-4 flex justify-between items-center bg-light-main dark:bg-dark-main max-w-[90%] mx-auto xl:max-w-[1200px]">
        <Link className="" to={"/"}>
          <img src={Logo} alt="logo" className="w-[200px]" />
        </Link>
        <div className="xl:hidden flex justify-center items-center gap-4">
          <div>
            <a
              className="hidden md:inline-block ml-auto  py-4 px-6 bg-accent-2 hover:bg-gray-100 text-sm text-white font-bold  rounded-full transition duration-200"
              href="#"
            >
              Sign In
            </a>
            <a
              className="hidden md:inline-block py-4 px-6 ml-4 bg-accent-1 hover:bg-blue-600 text-sm text-white font-bold rounded-full transition duration-200"
              href="#"
            >
              Sign up
            </a>
          </div>

          <button
            onClick={handleNav}
            className="navbar-burger flex items-center text-[#a55e6f] p-3"
          >
            <Bars3Icon className="h-10 w-10" />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 xl:flex xl:mx-auto xl:items-center xl:w-auto xl:space-x-6">
          <Link to={"/"}>
            <motion.div
              variants={navVariant(0.1)}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="text-accent-4 dark:text-gray-400"
            >
              Home
            </motion.div>
          </Link>
          <li className="text-accent-4 dark:text-gray-400">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </li>
          <Link to={"/about"}>
            <motion.div
              variants={navVariant(0.15)}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="text-accent-4 dark:text-gray-400"
            >
              About
            </motion.div>
          </Link>
          <li className="text-accent-4 dark:text-gray-400">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </li>
          <div>
            <motion.div
              variants={navVariant(0.2)}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="text-accent-4 dark:text-gray-400"
            >
              Services
            </motion.div>
          </div>
          <li className="text-accent-4 dark:text-gray-400">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </li>
          <div>
            <motion.div
              variants={navVariant(0.25)}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="text-accent-4 dark:text-gray-400"
            >
              Pricing
            </motion.div>
          </div>
          <li className="text-accent-4 dark:text-gray-400">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </li>
          <div>
            <motion.div
              variants={navVariant(0.3)}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="text-accent-4 dark:text-gray-400"
            >
              Contact
            </motion.div>
          </div>
        </ul>
        <a
          className="hidden xl:inline-block xl:ml-auto lg:mr-3 btn-secondary"
          href="#"
        >
          Sign In
        </a>
        <a className="hidden xl:inline-block btn-main" href="#">
          Sign up
        </a>
      </nav>
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit="exit"
            className={`relative z-50 w-screen`}
          >
            <div className="fixed top-0 left-0 bottom-0 bg-light-main dark:bg-dark-main w-screen  overflow-y-auto ">
              <nav className="max-w-[90%] flex flex-col h-full py-4 mx-auto w-full">
                <div className="flex items-center mb-8">
                  <a className="mr-auto font-bold leading-none" href="#">
                    <img src={Logo} alt="logo" className="w-[200px]" />
                  </a>
                  <button className="navbar-close" onClick={closeNav}>
                    <XMarkIcon className="w-14 h-14 text-accent-1" />
                  </button>
                </div>
                <div>
                  <ul>
                    <li className="mb-1">
                      <motion.div
                        variants={navItem}
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        exit="exit"
                        className="mobile-nav-links"
                      >
                        Home
                      </motion.div>
                    </li>
                    <li className="mb-1">
                      <motion.div
                        variants={navItem}
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        exit="exit"
                        className="mobile-nav-links"
                      >
                        About Us
                      </motion.div>
                    </li>
                    <li className="mb-1">
                      <motion.div
                        variants={navItem}
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        exit="exit"
                        className="mobile-nav-links"
                      >
                        Services
                      </motion.div>
                    </li>
                    <li className="mb-1">
                      <motion.div
                        variants={navItem}
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        exit="exit"
                        className="mobile-nav-links"
                      >
                        Pricing
                      </motion.div>
                    </li>
                    <li className="mb-1">
                      <motion.div
                        variants={navItem}
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        exit="exit"
                        className="mobile-nav-links"
                      >
                        Contact
                      </motion.div>
                    </li>
                    <li className="mb-1">
                      <motion.div
                        variants={navItem}
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        exit="exit"
                      >
                        <Theme />
                      </motion.div>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="pt-6">
                    <motion.div
                      variants={navItem}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      exit="exit"
                      className="block px-4 py-4 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                    >
                      Sign in
                    </motion.div>
                    <motion.div
                      variants={navItem}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      exit="exit"
                      className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-accent-1 hover:bg-blue-700  rounded-xl"
                    >
                      Sign Up
                    </motion.div>
                  </div>
                  <p className="my-4 text-xs text-center text-accent-4 dark:text-gray-400">
                    <span>Copyright © 2021</span>
                  </p>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
