import { Variants } from "framer-motion";

export const Animations: Variants = { //Uma animação generica, pois não a definição de que modelo de animação usar
  initialPlace: {
    opacity: 0,
    x: -20,// TODO: Arrumar medidas
    scale: 1
  },
  animatePlace: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {// TODO: essa animação precisa ser melhorada
      type: "fixed",
      damping: 25,
      stiffness: 200,
      mass: 100
    }
  },
  exitPlace: {
    opacity: 0,
    y: 20,// TODO: Arrumar medidas
    scale: 0.95,
    transition: { 
      duration: 0 
    }
  }
};
