import logo from "@/assets/images/Logo.gif";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="absolute top-6 left-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <img src={logo} alt="logo" className="w-60" />
    </motion.div>
  );
};

export default Logo;
