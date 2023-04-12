import styles from "../styles/itog.module.scss";
import { motion, Variants } from "framer-motion";

const Itog = () => {
  const titleAnimate: Variants = {
    hidden: {
      x: -2000,
    },
    visible: (custom: number) => ({
      x: 0,
      transition: {
        delay: custom,
        duration: 1,
      },
    }),
  };

  const textAnimate: Variants = {
    hidden: {
      x: 2000,
    },
    visible: (custom: number) => ({
      x: 0,
      transition: {
        delay: custom,
        duration: 1,
      },
    }),
  };
  return (
    <motion.footer
      initial="hidden"
      viewport={{ amount: 1, once: true }}
      whileInView="visible"
      className={styles.itog}
    >
      <motion.h2 variants={titleAnimate} custom={0}>
        Итог:
      </motion.h2>
      <motion.p variants={textAnimate} custom={1}>
        В целом, банковская система России имеет довольно сложную структуру, но
        при этом она постоянно развивается и совершенствуется для обеспечения
        надежности и удобства финансовых операций для клиентов
      </motion.p>
    </motion.footer>
  );
};

export default Itog;
