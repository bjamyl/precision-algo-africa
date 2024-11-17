import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Menu() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.2 }}
        className="w-screen fixed h-screen bg-white z-40 top-0 right-0 p-6"
      >
        
    
      </motion.div>
    </AnimatePresence>
  );
}
