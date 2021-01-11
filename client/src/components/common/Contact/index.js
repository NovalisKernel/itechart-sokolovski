import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { openDeleteModal,editContact} from 'store/contacts/actions';
import { ReactComponent as Edit } from 'assets/img/pencil.svg';
import { ReactComponent as Delete } from 'assets/img/delete.svg';
import { ReactComponent as Topic } from 'assets/img/notes.svg';



function Contact({ contact, openDetailsHandler }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.contact}>
            <div className={styles.title}>
                <h3 className={styles.name}>{contact.name}</h3>
                <div className={styles.icons}>
                    <Edit onClick={() => dispatch(editContact(contact.id))} className={styles.actionSvg} />
                    <Delete onClick={() => dispatch(openDeleteModal(contact.id))} className={styles.actionSvg} />
                </div>
            </div>
            <h3 className={styles.post}>{contact.job}</h3>
            <p className={styles.decision}>Decision Right: {contact.decision}</p>
            <p className={styles.owner}>Relationship Owner: {contact.relatOwner}</p>
            <div className={styles.detractorAndDetails}>
                <Topic onClick={() => openDetailsHandler(contact.id)} className={styles.topic} />
            </div>
        </div>
    )
}

export default Contact;