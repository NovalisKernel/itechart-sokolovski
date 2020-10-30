import React from 'react';
import styles from './styles.module.css';


function Textarea({value,onChange,name,onBlur}){
    return(
        <textarea onBlur={onBlur} onChange={onChange} className={styles.textArea} value={value} name={name}>

        </textarea>
    )
}

export default Textarea;