'use client'

import React, { useEffect } from "react";
import styles from "./feedBack.module.scss";
import cn from "classnames";




export default function FeedBack(props) {
    const {inputs, handleClose, job} = props;
    const [dataForm, setDataForm] = React.useState(inputs);
    const [checked, setChecked] = React.useState(false);

    
const handleOnChange = (e, index) => {   
    setDataForm((prev) => {
      const newDataForm = [...prev];
      newDataForm[index].value = e.target.value;
      return newDataForm;
    });
};

useEffect(() => {
    job && setDataForm((prev) => {
        const newDataForm = [...prev];
        newDataForm[3].value = job;  
      return newDataForm;
    });  
}, [job]);


    return <form className={styles.form} action={(data)=>{
            console.log(data);
            handleClose && handleClose(false);
        }}>
        <h5>СВЯЖИТЕСЬ С НАМИ</h5>
        {dataForm.map((input, index) => {
            
        return (
            <div className={styles.formItem} key={index}>
                <input
                type={input.type}
                className={styles.formItem__input}
                value={input.value}
                required={input.required}
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