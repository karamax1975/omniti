import React from 'react';
import Image from 'next/image';
import styles from './footer.module.scss';
import bigText from './bigText.svg';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Image src={"/logo.svg"} width={100} height={100} alt='omniti'/>
            <Image src={bigText} alt="bigText" className={styles.footer__img} />
            <p>OMNITI 2025 Все права защищены</p>
        </footer>
    )
}