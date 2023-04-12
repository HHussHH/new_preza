import styles from "../styles/intro.module.scss";
import CentralBank from "../img/Bank.svg";
import KomerBank from "../img/Bank2.svg";
import money from "../img/money.svg";
import pig from "../img/pig.svg";
import vklad from "../img/vklad.svg";
import calc from "../img/calc.svg";
import card from "../img/card.svg";
import searchMoney from "../img/searchMoney.svg";

import { motion, Variants } from "framer-motion";
const Intro = () => {
  const titleAnimate: Variants = {
    hidden: {
      opacity: 0,
      x: -2000,
    },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom,
        duration: 1,
      },
    }),
  };

  const imgAnimate: Variants = {
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

  const animateBank: Variants = {
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

  const animateComercBank: Variants = {
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
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
    >
      <motion.h1 variants={titleAnimate} custom={1} className={styles.intro}>
        Банковская система Российской Федерации
      </motion.h1>
      <motion.div
        initial="hidden"
        viewport={{}}
        whileInView="visible"
        className={styles.banks}
      >
        <div className={styles.bank}>
          <motion.img
            drag
            dragConstraints={{
              right: 200,
              left: -50,
              top: -25,
              bottom: 100,
            }}
            variants={imgAnimate}
            custom={1}
            src={money}
            alt=""
            className={styles.icons}
          />
          <motion.img
            drag
            dragConstraints={{
              right: 50,
              left: -200,
              top: -25,
              bottom: 250,
            }}
            variants={imgAnimate}
            custom={2}
            src={pig}
            alt=""
            className={styles.icons}
          />
          <motion.img
            drag
            dragConstraints={{
              right: 200,
              left: -50,
              top: -25,
              bottom: 100,
            }}
            variants={imgAnimate}
            custom={3}
            src={vklad}
            alt=""
            className={styles.icons}
          />
          <motion.h2 variants={titleAnimate} custom={2}>
            Центральный банк РФ
          </motion.h2>
          <motion.img
            variants={animateBank}
            custom={0}
            whileTap={{
              scale: 0.1,
              transition: {
                duration: 0.5,
              },
            }}
            src={CentralBank}
            alt=""
          />
          <motion.p
            animate={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ delay: 1, duration: 1 }}
          >
            Центральный банк РФ является главным регулятором банковской системы,
            который отвечает за формирование и реализацию монетарной политики
            страны. Он выполняет ряд функций, включая установление процентных
            ставок, контроль за денежной массой и обеспечение стабильности
            национальной валюты.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          viewport={{ amount: 1, once: true }}
          whileInView="visible"
          className={styles.bank}
        >
          <motion.img
            dragConstraints={{
              right: 200,
              left: -250,
              top: -25,
              bottom: 100,
            }}
            drag
            src={card}
            alt=""
            className={styles.icons_2}
          />
          <motion.img
            dragConstraints={{
              right: 100,
              left: -250,
              top: -25,
              bottom: 100,
            }}
            drag
            src={calc}
            alt=""
            className={styles.icons_2}
          />
          <motion.img
            dragConstraints={{
              right: 200,
              left: -50,
              top: -25,
              bottom: 100,
            }}
            drag
            src={searchMoney}
            alt=""
            className={styles.icons_2}
          />
          <motion.h2 variants={animateComercBank} custom={0}>
            Коммерческие банк РФ
          </motion.h2>
          <img src={KomerBank} alt="" />
          <p>
            Коммерческие банки, в свою очередь, предоставляют финансовые услуги
            населению и бизнесу. Они могут быть частными или государственными и
            функционировать в форме акционерных обществ или кредитных
            кооперативов.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
