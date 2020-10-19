import React from 'react';
import styles from './styles.module.css';
import point from 'assets/img/vertical_point.png';
import { ReactComponent as Topic } from 'assets/img/notes.svg';



function Table({contacts,searchValue}) {
    return (
        <table className={styles.contactTable}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Job Title</td>
                    <td>Priority Level</td>
                    <td>Promoter/Detractor</td>
                    <td>Decision Right</td>
                    <td>Relationship Owner</td>
                    <td>PriorityTopics</td>
                    
                    <td>&nbsp;</td>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => {
                    if(contact.name.indexOf(searchValue)===-1 && searchValue){
                        return;
                    }
                    return (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.job}</td>
                            <td>{contact.level}</td>
                            <td>{contact.promoter}</td>
                            <td>{contact.decision}</td>
                            <td>{contact.relatOwner}</td>
                            <td>
                                <div className={styles.details}>
                                    <Topic className={styles.topicIcon}/>
                                    Details
                                </div>       
                            </td>
                            <td><img className={styles.editImg} src={point} alt="" /></td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default Table;