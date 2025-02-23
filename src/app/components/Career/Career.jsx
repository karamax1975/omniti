import React from 'react';
import { data } from './data.js';
import { v4 as uId } from 'uuid';
import styles from './styles.module.scss';
import rootStyles from '../../rootStyle.module.scss';

export default function Career() {
  return (
    <div className={styles.Career}>
      {data.map((job) => {
        return (
          <div key={uId()} className={styles.CareerItem}>
            <div className={styles.CareerItem__profession}>
              <h3>{job.profession}</h3>
            </div>
            <div className={styles.CareerItem__complexity}>
              <span>Сложность</span>
              <h5>{job.complexity}</h5>
            </div>
            <div className={styles.CareerItem__description}>
              <p>Описание требований к позиции</p>
              <span>{job.description}</span>
            </div>
            <div className={styles.CareerItem__action}>
              <a className={styles.btn}>Написать</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
