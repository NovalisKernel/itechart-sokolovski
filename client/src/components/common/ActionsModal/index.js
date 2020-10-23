import React from 'react';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';
import {deleteContact} from 'store/contacts/actions';

function ActionsModal({active,id}) {
    const cls = [styles.actionsModal];
    const dispatch = useDispatch();
    if(active){
        cls.push(styles.active)
    }
    return(
        <div className={cls.join(' ')}>
            <span className={styles.editText}>Edit</span>
            <span className={styles.createText}>Create new relationship play</span>
            <span onClick={()=>dispatch(deleteContact(id))} className={styles.deleteText}>Delete</span>
        </div>
    );
}

export default ActionsModal;
