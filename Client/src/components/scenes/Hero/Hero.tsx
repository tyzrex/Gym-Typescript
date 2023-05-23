import HeroImage from "../../../assets/hero.svg";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeIn,
  slideIn,
  textVariant,
  zoomIn,
} from "@/components/utils/motion/motion";

const Hero = () => {
  const text = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="py-10 w-screen bg-light-main dark:bg-dark-main text-accent-3 dark:text-gray-400">
      <AnimatePresence>
        <div className="max-w-[90%] xl:max-w-[1200px] w-full h-full mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center">
          <div className="flex-1">
            <motion.div
              variants={textVariant(0.2)}
              initial="hidden"
              animate="show"
              className="text-5xl leading-[50px] font-bold text-center bg-gradient-to-r text-transparent bg-clip-text from-accent-1 to-accent-2"
            >
              Welcome to TyzFit : Unleash Your Inner Hero
            </motion.div>
            <motion.p
              variants={fadeIn("down", "spring", 0.4, 0.8)}
              initial="hidden"
              animate="show"
              className="text-center font-medium text-lg mt-4"
            >
              Join TyzFit and become the hero of your fitness journey. With
              personalized training, advanced tracking, and expert guidance,
              we'll help you unlock your full potential.
            </motion.p>
            <motion.div
              className="flex justify-center gap-4 mt-8"
              variants={fadeIn("down", "spring", 0.5, 0.8)}
              initial="hidden"
              animate="show"
            >
              <button className="btn-main">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.8)}
            initial="hidden"
            animate="show"
          >
            <img src={HeroImage} alt="hero" />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
