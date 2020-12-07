import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { deletedContact } from 'store/contacts/actions';
import { editContact } from 'store/contacts/actions';


function ActionsModal({ closeActionsModal, active, id }) {
    // const cls = [styles.actionsModal];
    const dispatch = useDispatch();
    return (
        <>
            <div onClick={closeActionsModal} className={[styles.darkModal, active ? styles.active : ''].join(' ')}></div>
            <div className={[styles.actionsModal, active ? styles.active : ''].join(' ')}>
                <span onClick={() => {
                    dispatch(editContact(id));
                    closeActionsModal()
                }
                } className={styles.editText}>Edit</span>
                <span onClick={() => dispatch(deletedContact(id))} className={styles.deleteText}>Delete</span>
            </div>
        </>
    );
}

export default ActionsModal;
