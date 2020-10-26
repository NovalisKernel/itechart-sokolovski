import React from 'react';
import styles from './styles.module.css';
import Input from '../Input';
import Textarea from '../Textarea';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import Button from '../Button';


function Modal({closeModal}){
    return(
        <div className={styles.modal}>
            <div className={styles.modalInfo}>
                <div className={styles.titleRow}>
                    <h2 className={styles.title}>New Priority Contact</h2>
                    <CloseIcon className={styles.close} onClick = {closeModal}/>
                </div>
                <div className={styles.contactBlock}>
                    <span className={styles.contactText}>Contact Name</span>
                    <Input/>
                </div>
                <div className={styles.doubleInputField}>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Decision Rights</span>
                        <Input/>
                    </div>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Promoter/Detractor</span>
                        <Input/>
                    </div>
                </div>
                <div className={styles.doubleInputField}>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Priority Level</span>
                        <Input/>
                    </div>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Relationship Owner</span>
                        <Input/>
                    </div>
                   
                </div>
                <h2 className={styles.textAreaTitle}>Priority topics for this individual</h2>
                <Textarea className={styles.textBox}/>
                <div className={styles.bottomBtns}>
                    <Button text="Cancel" isCancel={true} handleClick = {closeModal}/>
                    <Button text="Save"/>

                </div>
            </div>
        </div>
    )
}

export default Modal;