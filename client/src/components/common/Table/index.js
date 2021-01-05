import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import point from 'assets/img/vertical_point.png';
import { ReactComponent as Topic } from 'assets/img/notes.svg';
import { sortContacts } from 'store/contacts/actions';
import styles from './styles.module.css';
import ActionsModal from '../ActionsModal';

function Table({ contacts, openDetailsHandler }) {
  const [idActionModalOpen, setIdActionModal] = useState(null);
  const dispatch = useDispatch();

  return (
    <table className={styles.contactTable}>
      <thead>
        <tr className={styles.tableHead}>
          <td onClick={() => dispatch(sortContacts('name'))}>Name</td>
          <td onClick={() => dispatch(sortContacts('decision'))}>Priority Level</td>
          <td onClick={() => dispatch(sortContacts('job'))}>Job Title</td>
          <td onClick={() => dispatch(sortContacts('promoter'))}>Promoter/Detractor</td>
          <td onClick={() => dispatch(sortContacts('level'))}>Decision Right</td>
          <td onClick={() => dispatch(sortContacts('relatOwner'))}>Relationship Owner</td>
          <td>PriorityTopics</td>

          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.job}</td>
              <td>{contact.level}</td>
              <td>{contact.promoter}</td>
              <td>{contact.decision}</td>
              <td>{contact.relatOwner}</td>
              <td>
                <div
                  onClick={() => openDetailsHandler(contact.id)}
                  className={styles.details}
                >
                  <Topic className={styles.topicIcon} />
                  Details
                </div>
              </td>
              <td className={styles.editTd}>
                <img
                  onClick={() =>
                    idActionModalOpen !== contact.id
                      ? setIdActionModal(contact.id)
                      : setIdActionModal(null)
                  }
                  className={styles.editImg}
                  src={point}
                  alt=""
                />
                <ActionsModal
                  closeActionsModal={() => setIdActionModal(null)}
                  id={contact.id}
                  active={idActionModalOpen === contact.id ? true : false}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
