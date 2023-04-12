import styles from "../styles/komerc.module.scss";
import cat from "../img/cat.svg";
import bankShet from "../img/bankSchet.svg";
import creditCard from "../img/creditCard.svg";
import obmen from "../img/obmen.svg";
import Credits from "../img/Credits.svg";
import investirovanie from "../img/investirovanie.svg";
import upravlenie from "../img/upravlenie.svg";
import { motion, Variants } from "framer-motion";
const KomerBank = () => {
  type uslugi = {
    [key: string]: string;
  };
  const uslygiBankov: uslugi[] = [
    {
      id: "1",
      text: "Открытие банковских счетов. Коммерческие банки предоставляют возможность открыть различные типы счетов, включая текущие, сберегательные, депозитные и другие.",
      img: bankShet,
    },
    {
      id: "2",
      text: "Предоставление кредитов. Коммерческие банки предоставляют кредиты физическим и юридическим лицам на различные цели, такие как покупка недвижимости, автомобиля, образование и т.д.",
      img: creditCard,
    },
    {
      id: "3",
      text: "Выдача дебетовых и кредитных карт. Банки предоставляют клиентам возможность использования дебетовых и кредитных карт для проведения платежей и снятия наличных средств.",
      img: obmen,
    },
    {
      id: "4",
      text: "Инвестирование. Банки предоставляют услуги по управлению инвестициями клиентов и помогают им инвестировать в различные финансовые инструменты, такие как акции, облигации, инвестиционные фонды и т.д.",
      img: Credits,
    },
    {
      id: "5",
      text: "Обмен валюты. Коммерческие банки предлагают клиентам услуги по обмену валюты по текущему курсу.",
      img: investirovanie,
    },
    {
      id: "6",
      text: "Управление финансами. Банки предоставляют консультационные услуги и помогают клиентам планировать и управлять своими финансами.",
      img: upravlenie,
    },
  ];

  const titleAnimate: Variants = {
    hidden: {
      y: -1000,
      scale: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      scale: 1,
      transition: {
        delay: custom,
        duration: 1.5,
      },
    }),
  };

  const textAnimate: Variants = {
    hidden: {
      scale: 0,
    },
    visible: (custom: number) => ({
      scale: 1,
      transition: {
        delay: custom,
        duration: 2,
      },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
    >
      <motion.h2 className={styles.title} variants={titleAnimate} custom={0}>
        Что нам дают Коммерческие банки?
      </motion.h2>
      ;
      <div className={styles.img}>
        <motion.img
          drag
          dragConstraints={{
            right: 500,
            left: -500,
            top: -50,
            bottom: 50,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            rotate: [0, 20, -20, 0],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
          src={cat}
        ></motion.img>
      </div>
      <motion.p variants={textAnimate} custom={1} className={styles.text}>
        Коммерческие банки предлагают своим клиентам широкий спектр услуг, таких
        как открытие счетов, предоставление кредитов и дебетовых карт,
        инвестирование, управление финансами, обмен валюты и многое другое.
      </motion.p>
      <div>
        <h3 className={styles.subtitle}>
          Основными видами услуг, которые предоставляют коммерческие банки,
          являются:
        </h3>
        <motion.ul
          initial="hidden"
          viewport={{ amount: 0.1, once: true }}
          whileInView="visible"
          className={styles.uslygi}
        >
          {uslygiBankov.map((usluga) => (
            <li key={usluga.id} className={styles.uslyga}>
              <motion.img
                animate={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                src={usluga.img}
                alt=""
              />
              <span>{usluga.id}</span>
              <p> {usluga.text}</p>
            </li>
          ))}
        </motion.ul>

        <p className={styles.licencia}>
          В России также существует система лицензирования коммерческих банков и
          регулирования их деятельности Центральным банком РФ. Коммерческие
          банки также должны соблюдать ряд правил и норм, например, в отношении
          ограничения выдачи кредитов и требований к уровню капитализации.
        </p>
      </div>
    </motion.div>
  );
};

export default KomerBank;
