'use client'

import React from "react";
import styles from "./feedBack.module.scss";
import cn from "classnames";

const inputs = [
    {
      type: 'text',
      placeholder: 'Имя',
      value: ''
    },
    {
      type: 'email',
      placeholder: 'E-mail',
      value: ''
    },
    {
      type: 'phone',
      placeholder: 'Телефон',
      value: ''
    },
    {
      type: 'text',
      placeholder: 'Компания',
      value: ''
    },

  ]


export default function FeedBack() {
    const [dataForm, setDataForm] = React.useState(inputs);
    const [checked, setChecked] = React.useState(false);

    
const handleOnChange = (e, index) => {   
    setDataForm((prev) => {
      const newDataForm = [...prev];
      newDataForm[index].value = e.target.value;
      return newDataForm;
    });
};



    

    return <form className={styles.form}>
        <h5>СВЯЖИТЕСЬ С НАМИ</h5>
        {dataForm.map((input, index) => {
            
        return (
            <div className={styles.formItem} key={index}>
                <input
                type={input.type}
                className={styles.formItem__input}
                value={input.value}
                onChange={(e) => handleOnChange(e, index)}
                />
                <span className={cn(input.value && styles.formItem__placeholderActive, styles.formItem__placeholder)}>
                    {input.placeholder}
                </span>
            </div>
            
        )})}
        <div className={styles.formItemCheckbox}>
            <input type="checkbox" name="checkbox" id="checkbox_id" value={checked} onChange={(e) => setChecked(e.target.checked)}/>
            <label htmlFor="checkbox_id">Согласие на обработку данных</label>
        </div>
        <div className={styles.formItem}>
            <input className={styles.btn} type="submit" disabled={!checked} value={"Отправить"}/>
        </div>
    </form>;
}