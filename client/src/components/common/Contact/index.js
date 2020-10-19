import React from 'react';
import styles from './styles.module.css';
import point from 'assets/img/vertical_point.png';

function Contact({ contacts }) {
    return (
        <div className={styles.contact}>
            <div className={styles.title}>
                <h3 className={styles.name}>{contacts.name}</h3>
                <div className={styles.icons}>
                    <img src={point} alt=""/>
                </div>
            </div>
            <h3 className={styles.post}>{contacts.job}</h3>
            <p className={styles.decision}>Decision Right: {contacts.decision}</p>
            <p className={styles.owner}>Relationship Owner: {contacts.relatOwner}</p>
        </div>
    )
}

export default Contact;