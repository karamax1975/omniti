"use client"

import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./Accordion.module.scss";
import arrow from './arrow.svg';
import {data} from "./data.ts";


export const Accordion = () => {
    const [activeItem, setActiveItem] = React.useState(null);

    const handleItemClick = (id) => {
        if (activeItem === id) {
            setActiveItem(null);
        } else {
            setActiveItem(id);
        }
    };

    return <div className={styles.Accordion}>
        {data.map((item) => {
            return (
            <div key={item.id} className={cn(styles.AccordionItem, item.id === activeItem && styles.AccordionItem_active)}>

                <div className={styles.AccordionHeader} onClick={() => handleItemClick(item.id)}>
                    <h3>{item.title}</h3>
                    <div className={cn(item.id === activeItem&&styles.trigger_active, styles.trigger)}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                    <div className={styles.AccordionContent}>
                        {item.subtitle&&<h3 className={styles.subtitle}>{item.subtitle}</h3>}
                        <div className={styles.wrapper}>
                            {item.columns.map((column, index) => {
                                return (
                                    <div key={index} className={styles.column}>
                                        {column.data.map((chapter, index) => {
                                            return (
                                                <div key={index} className={styles.chapter}>
                                                    <h4>{chapter.title}</h4>
                                                    <p>{chapter.text}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        {item.postscript&&<h3 className={styles.postscript}>{item.postscript}</h3>}
                    </div>
            </div>)
        })}
    </div>;
}