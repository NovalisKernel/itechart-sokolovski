import React from 'react';
import styles from './styles.module.css';


function Textarea({value}){
    return(
        <textarea className={styles.textArea} value={value} name="">

        </textarea>
    )
}

export default Textarea;