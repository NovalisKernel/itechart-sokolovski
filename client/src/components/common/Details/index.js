import React from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import { ReactComponent as Topic } from 'assets/img/notes.svg';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';


function Details({closeDetails,contactId}){
    const contact = useSelector(state => state.contacts.data)[contactId];
    return(
        <div className={styles.details}>
            <div onClick={closeDetails}  className={styles.underPopUp}>

            </div>
            <div className={styles.popUp}>
                <CloseIcon onClick={closeDetails} className={styles.close}/>
                <h2>{contact.name} - {contact.job}</h2>
                <div className={styles.topic}>
                    <div className={styles.rowOnText}>
                        <Topic className={styles.rowImg}/>Priorit topics for this individua:
                    </div>
                    <div className={styles.text}>
                        {contact.topics}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;