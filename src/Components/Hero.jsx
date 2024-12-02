import { HERO_CONTENT } from "../constants/index.jsx";
import profilePic from "/src/assets/burakildamm.png";
import { motion } from "framer-motion"; // Fixed import path

const container = (delay) => ({
  // Fixed container function
  hide: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      {" "}
      {/* Fixed typo in className */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hide"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Burak İLDAM
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hide"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-End / Mobile App Developer
            </motion.span>
            <motion.p
              variants={container(0.4)}
              initial="hide"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="custom_img_profile"
              src={profilePic}
              alt="Burak İLDAM"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
