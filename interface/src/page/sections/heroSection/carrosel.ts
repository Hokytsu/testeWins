import { Variants } from "framer-motion";

export const Animations: Variants = {
  initialPlace: {
    opacity: 0,
    x: -20,
    scale: 1
  },
  animatePlace: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "fixed",
      damping: 25,
      stiffness: 200,
      mass: 100
    }
  },
  exitPlace: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: { 
      duration: 0 
    }
  }
};

