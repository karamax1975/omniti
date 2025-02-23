import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export const Header = () => {
  return <header className={styles.header}>
    <div className={styles.headerWrapper}>
        <a href='/'><img src="/logo.svg" alt="logo" /></a>
        <nav className={styles.headerNav}>
          <a href="#hero" className={cn(styles.link, styles.link_active)}>Главная</a>
          <a href="#about" className={styles.link}>О нас</a>
          <a href="#services" className={styles.link}>Услуги</a>
          <a href="#partners" className={styles.link}>Клиенты</a>
          <a href="#career" className={styles.link}>Карьера</a>
          <a href="#contact" className={styles.btn}>
            Запустить проект
          </a>
        </nav>
    </div>
</header>;
};
