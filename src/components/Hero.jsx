import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "../components/canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Reza Dwi Putra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Informatics Engineering Student <br className="sm:block hidden" />
            at Esa Unggul University
          </p>

          <motion.button
            onClick={() =>
              window.open("/files/CV_Reza_Dwi_Putra.pdf", "_blank")
            }
            className="relative z-10 mt-5 px-8 py-4 bg-[#7a44db] text-white font-bold rounded-full shadow-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(145, 94, 255, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            View CV
          </motion.button>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
