import React from 'react';
import Image from 'next/image';
import styles from './footer.module.scss';
import bigText from './bigText.svg';
import {RunningLine} from "../RunningLine/runningLine";



export default function Footer() {
    return (
        <footer className={styles.footer}>
            <RunningLine />
            <Image src={"/logo.svg"} width={100} height={100} alt='omniti' className={styles.footer__logo}/>
            <p>OMNITI 2025 Все права защищены</p>
        </footer>
    )
}