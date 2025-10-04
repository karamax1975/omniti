"use client"

import React, { useRef } from "react";
import styles from "./page.module.scss";
import cn from "classnames";
import Image from 'next/image';
import hero_mark from './components/images/hero_mark2.svg';
import { Accordion } from "./components/Accordion/Accordion";
import Career from "./components/Career/Career";
import Feedback from './components/FeedBack/feedBack';
import Footer from "./components/footer/Footer";
import {Header} from './components/header/header';
import {feedBackInputs, feedJobInputs} from './components/FeedBack/data';
import {Logotypes} from './components/Logotypes/logotypes';

export default function Home() {
  const [menuIsOpen, setIsMenuOpen] = React.useState(false);
  const [usersJob, setUsersJob] = React.useState(null);
  const careerSectionRef = useRef(null);

  return (
    <div className={cn(styles.root, (usersJob || menuIsOpen) && styles.root__menuIsOpen)}>
      <Header action={setIsMenuOpen} trigger={menuIsOpen}/>
      {/* Hero ------------------------------------------------------------ */}
      <section id="hero" className={cn(styles.section, styles.hero)}>
        <div className={styles.container}>
        <Image src='/feedBack_bubble.png' alt="hero" className={styles.hero__img} width={1334} height={952}/>
          <h1>OMNITI</h1>
          <p>
            Инновационный маркетинг, оптимизация бизнес процессов и собственные
            разработки в сфере IT. Выводим ваш бизнес на новый уровень -
            воплощаем ваши идеи в реальность!
          </p>
          <div className={styles.heroMark}>
            <span>
              <Image src={hero_mark} alt="mark" className={styles.heroMark__img}/>
            </span>
          </div>

        </div>
      </section>
      {/* About ------------------------------------------------------------ */}
      <section id="about" className={cn(styles.section, styles.about)}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.about__numbersList}>
              <div className={styles.about__numbersItem}>
                <h3>300+</h3>
                <p>проведенных рекламных кампаний</p>
              </div>
              <div className={styles.about__numbersItem}>
                <h3>100+</h3>
                <p>разработанных сайтов,<br/> систем и приложений</p>
              </div>
              <div className={styles.about__numbersItem}>
                <h3>25+</h3>
                <p>интеграций сервисов<br/> по управлению бизнесом</p>
              </div>
              <div className={styles.about__numbersItem}>
                <h3>5+</h3>
                <p>реализованных проектов бизнес-консалтинга</p>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.about__promoText}>
              <h2>О НАС</h2>
              <p className={styles.first}>Наша команда — эксперты в своей области, которые не боятся выйти за рамки стандартного подхода. </p>
              <p className={styles.second}>Мы предлагаем своим клиентам комплексный подход используя математические модели, инновационные инструменты и технологии,  которые обеспечивают максимальную эффективность и рост бизнес показателей</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services ------------------------------------------------------------ */}
      <section id="services" className={cn(styles.section, styles.services)}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>УСЛУГИ</h2>
      </div>
      <Accordion/>
      </section>
      {/* Partners ------------------------------------------------------------ */}
      <section id="partners" className={cn(styles.section, styles.partners)}>
        <div className={styles.container}>
          <h4>СКАЖИ МНЕ КТО ТВОЙ ДРУГ — И Я СКАЖУ КТО ТЫ</h4>
        </div>
        <Logotypes/>
      </section>
      {/* Career ------------------------------------------------------------ */}
      <section id="career" className={cn(styles.section, styles.career)} ref={careerSectionRef}>
        <div className={styles.container}>
          <h2 className={styles.section__title}>КАРЬЕРА</h2>
          <Career action={setUsersJob}/>
        </div>
        {usersJob&&
          <div className={styles.modal}>
            <div className={styles.modal__container}>
              <button onClick={() => {
                    setUsersJob(null);
                    setTimeout(() => {
                      careerSectionRef.current?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                      });
                    }, 100);
                  }
                }/>
              <Feedback inputs={feedJobInputs} handleClose={() => setUsersJob(null)} job={usersJob}/>
            </div>
          </div>
        }
      </section>
      {/* Feedback ------------------------------------------------------------ */}

      <section id="feedback" className={cn(styles.section, styles.feedback)}>
        <div className={styles.container}>
          <div className={styles.column}/>
          <div className={styles.column}>
            <Feedback inputs={feedBackInputs}/>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
