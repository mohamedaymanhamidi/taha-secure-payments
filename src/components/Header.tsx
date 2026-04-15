import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="title">Secure Payment</h1>
      <h2 className="subtitle">Taha Production</h2>
      <p className="subtitle">Fast • Safe • Professional</p>
    </motion.header>
  );
};

export default Header;