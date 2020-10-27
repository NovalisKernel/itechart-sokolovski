import React from 'react';
import styles from './styles.module.css';
import point from 'assets/img/vertical_point.png';
import { ReactComponent as Topic } from 'assets/img/notes.svg';
import ActionsModal from '../ActionsModal';
import { useState } from 'react';


function Table({ contacts, searchValue, openDetailsHandler }) {
    const [idActionModalOpen, setIdActionModal] = useState(null);
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
                    if (contact.name.indexOf(searchValue) === -1 && searchValue) {
                        return null;
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
                                <div onClick={() => openDetailsHandler(contact.id)} className={styles.details}>
                                    <Topic className={styles.topicIcon} />
                                    Details
                                </div>
                            </td>
                            <td className={styles.editTd}>
                                <img onClick={() => idActionModalOpen !== contact.id ? setIdActionModal(contact.id) : setIdActionModal(null)}
                                    className={styles.editImg} src={point} alt="" />
                                <ActionsModal id={contact.id} active={idActionModalOpen === contact.id ? true : false} />
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default Table;