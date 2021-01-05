import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeSearchString,
  getContacts,
  createModalOpened,
} from 'store/contacts/actions';
import { logOut } from 'store/auth/actions';
import { empty, searchicon, filter, grid, row } from 'assets';
import {
  EditContact,
  Details,
  Modal,
  List,
  Table,
  Button,
  Input,
  AlertDialog,
} from 'components/common';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const query = dispatch(getContacts());
    if (!localStorage.getItem('token')) {
      dispatch(logOut());
    }
  }, [dispatch]);

  const user = useSelector(state => state.auth.user);
  const isRequesting = useSelector(state => state.contacts.isRequestion);
  const showCreateModal = useSelector(state => state.contacts.createModalOpened);
  // const showEditModal = useSelector(state => state.contacts.editModalOpened);
  const deleteModalOpened = useSelector(state => state.contacts.deleteModalOpened);
  const contacts = useSelector(state => state.contacts.data);
  const editContactId = useSelector(state => state.contacts.editContactId);
  const searchString = useSelector(state => state.contacts.searchString);
  const filterContacts = searchString
    ? contacts.filter(contact => contact.name.includes(searchString))
    : contacts;
  const editorContact = contacts.filter(contact => contact.id === editContactId);

  // const [modalState, setModalState] = useState(false);
  const [isContactsTable, setIsContactsTable] = useState(true);

  const showTable = target => {
    setIsContactsTable(true);
  };
  const showList = target => {
    setIsContactsTable(false);
  };

  const [searchValue, setSearchValue] = useState('');
  const searchInputHandler = value => {
    setSearchValue(value);
    dispatch(changeSearchString(value));
  };

  const [isDetails, setIsDetails] = useState(null);

  return (
    <div className={styles.home}>
      <div className={styles.menu}>
        <span className={styles.userName}>{user.userName}</span>{' '}
        <button onClick={() => dispatch(logOut())}>LOGOUT</button>
      </div>
      {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )}
      {contacts.length !== 0 && editContactId && (
        <EditContact contact={editorContact[0]} />
      )}
      {showCreateModal && <Modal closeModal={() => dispatch(createModalOpened(false))} />}
      {isDetails && (
        <Details contactId={isDetails} closeDetails={() => setIsDetails(null)} />
      )}
      {deleteModalOpened && <AlertDialog deleteContactId={deleteModalOpened} />}

      {contacts.length === 0 ? (
        <div className={styles.main}>
          <div className={styles.emptyContact}>
            <h1>Power Base</h1>
            <p>Identify the people in this account that matter</p>
            <Button
              handleClick={() => {
                dispatch(createModalOpened(true));
              }}
              text="Add New Priority Contact"
            />
          </div>
          <img src={empty} alt="" />
        </div>
      ) : (
        <div className={styles.notEmptyContact}>
          <h2>Power Base</h2>
          <div className={styles.actionRow}>
            <div className={styles.sort}>
              <Input
                type="text"
                placeholder="Search"
                value={searchString}
                handleChange={e => searchInputHandler(e.target.value)}
              />
              <img className={styles.searchIcon} src={searchicon} alt="" />
              <img className={styles.filter} src={filter} alt="" />
              <img
                onClick={e => showTable(e.target)}
                className={isContactsTable ? styles.active : styles.notActive}
                src={row}
                alt=""
              />
              <img
                onClick={e => showList(e.target)}
                src={grid}
                className={isContactsTable ? styles.notActive : styles.active}
                alt=""
              />
            </div>
            <Button
              handleClick={() => {
                dispatch(createModalOpened(true));
              }}
              text="Add New Priority Contact"
            />
          </div>

          {isContactsTable ? (
            <Table
              openDetailsHandler={id => setIsDetails(id)}
              contacts={filterContacts}
              searchValue={searchValue}
            />
          ) : (
            <List
              openDetailsHandler={id => setIsDetails(id)}
              contacts={filterContacts}
              searchValue={searchValue}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
