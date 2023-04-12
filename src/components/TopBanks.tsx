import styles from "../styles/topbanks.module.scss";
import sber from "../img/sber.svg";
import vtb from "../img/vtb.svg";
import gazprom from "../img/gazprom.svg";
import { motion, Variants } from "framer-motion";

const TopBanks = () => {
  const titleAnimate: Variants = {
    hidden: {
      x: -2000,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom,
        duration: 1,
      },
    }),
  };

  const cardAnimate: Variants = {
    hidden: {
      scale: 0,
    },
    visible: (custom: number) => ({
      scale: 1,
      transition: {
        delay: custom,
        duration: 1,
      },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      viewport={{ amount: 0.2, once: true }}
      whileInView="visible"
      className={styles.topbanks}
    >
      <motion.h2 variants={titleAnimate} custom={0.5} className={styles.title}>
        Топ 3 коммерческих банка России по активам:
      </motion.h2>
      <div className={styles.banks}>
        <motion.div variants={cardAnimate} className={styles.bank} custom={1.5}>
          <span>1 Место</span>
          <div className={styles.icon}>
            <img src={sber}></img>
          </div>
          <p>
            Сбербанк России - это государственный банк, который является
            крупнейшим в России и одним из крупнейших в мире. Его активы
            составляют около 40,2 трлн рублей.
          </p>
        </motion.div>
        <motion.div variants={cardAnimate} className={styles.bank} custom={2}>
          <span>2 Место</span>
          <div className={styles.icon}>
            <img src={vtb}></img>
          </div>
          <p>
            ВТБ - это также государственный банк, который занимает второе место
            по размеру активов в России. Его активы составляют около 16,2 трлн
            рублей.
          </p>
        </motion.div>
        <motion.div variants={cardAnimate} className={styles.bank} custom={2.5}>
          <span>3 Место</span>
          <div className={styles.icon}>
            <img src={gazprom}></img>
          </div>
          <p>
            Газпромбанк - это коммерческий банк, который является дочерней
            компанией крупнейшей энергетической компании России - Газпрома. Его
            активы составляют около 5,2 трлн рублей.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBanks;
