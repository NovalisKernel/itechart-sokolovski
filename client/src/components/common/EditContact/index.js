import React from 'react';
import styles from './styles.module.css';
import Input from '../Input';
import Textarea from '../Textarea';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import Button from '../Button';
import {useSelector,useDispatch} from 'react-redux';
import {editContact} from 'store/contacts/actions';
import {deleteContact} from 'store/contacts/actions';



function EditContact({contact}){
    const editContactId = useSelector(state=>state.contacts.editContactId);
    const dispatch = useDispatch();
    return(
        <div className={styles.modal}>
            <div className={styles.modalInfo}>
                <div className={styles.titleRow}>
                    <h2 className={styles.title}>Edit Priority Contact</h2>
                    <CloseIcon className={styles.close} onClick = {()=>dispatch(editContact(-1))}/>
                </div>
                <div className={styles.contactBlock}>
                    <div className={styles.contactGeneralText}>
                        <h2 className={styles.contactName}>{contact.name}</h2>
                        <span className={styles.contactJob}>{contact.job}</span>
                    </div>
                    <h4 onClick={()=>dispatch(deleteContact(editContactId))} className={styles.deleteText}>Delete the contact</h4>
                </div>
                <div className={styles.doubleInputField}>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Decision Rights</span>
                        <Input value={contact.decision}/>
                    </div>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Promoter/Detractor</span>
                        <Input value={contact.promoter}/>
                    </div>
                </div>
                <div className={styles.doubleInputField}>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Priority Level</span>
                        <Input value={contact.level}/>
                    </div>
                    <div className={styles.aloneInputField}>
                        <span className={styles.aloneInputText}>Relationship Owner</span>
                        <Input value={contact.relatOwner}/>
                    </div>
                   
                </div>
                <h2 className={styles.textAreaTitle}>Priority topics for this individual</h2>
                <Textarea value={contact.topics} className={styles.textBox}/>
                <div className={styles.bottomBtns}>
                    <Button text="Cancel" isCancel={true} handleClick = {()=>dispatch(editContact(-1))}/>
                    <Button text="Save"/>

                </div>
            </div>
        </div>
    )
}

export default EditContact;