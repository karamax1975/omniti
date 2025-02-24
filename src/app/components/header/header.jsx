"use client"

import React from 'react';
import cn from 'classnames';
import {data} from './data';
import styles from './header.module.scss';

export const Header = ({trigger, action}) => {

  const [activeLink, setActiveLInk] = React.useState(1);

  const handleSelectLink = (id) => {
    setActiveLInk(id);
  };

  return <header className={cn(styles.header, trigger&&styles.header__active)}>
    <div className={styles.headerWrapper}>
        <a href='/'><img src="/logo.svg" alt="logo" className={styles.logo}/></a>
        <button className={cn(styles.burger, trigger&&styles.burger__active)} onClick={() => action(prev=>!prev)} />    
        <nav className={cn(styles.headerNav, trigger&&styles.headerNav__active)}>
          {data.map((item) => {
            return (
              <div key={item.id} onClick={()=>{
                action(false)
                handleSelectLink(item.id)
              }
              } 
                className={cn(styles.linkWrapper, item.id === activeLink && styles.linkWrapper__active)}>
                  <a href={item.link}>{item.title}</a>
              </div>
            );
          })}
          <div className={styles.actionWrapper}>
            <a href="#contact" className={styles.btn}>
              Запустить проект
            </a>
          </div>
        </nav>
    </div>
</header>;
};
