import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeSearchString,
  // getContacts,
  getPartContacts,
  createModalOpened,
  changeShowCounts,
  openFilterModal,
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
  SnackBar,
  FilterModal,
} from 'components/common';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

// import { MemoryRouter, Route } from 'react-router';
// import { Link } from 'react-router-dom';
// import Pagination from '@material-ui/lab/Pagination';
// import PaginationItem from '@material-ui/lab/PaginationItem';

import styles from './styles.module.css';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const showContactsCount = useSelector(state => state.contacts.showContactsCount);
  const currentPage = +useSelector(state => state.router.location.query.page);
  const filterLevel = useSelector(state => state.contacts.filterLevel);
  const filterPromoter = useSelector(state => state.contacts.filterPromoter);
  const filterDecision = useSelector(state => state.contacts.filterDecision);

  const showCountsChange = event => {
    dispatch(changeShowCounts(event.target.value));
  };

  useEffect(() => {
    dispatch(
      getPartContacts({
        page: currentPage || 1,
        count: showContactsCount,
        filterLevel,
        filterPromoter,
        filterDecision,
      })
    );
  }, [
    dispatch,
    currentPage,
    showContactsCount,
    filterDecision,
    filterLevel,
    filterPromoter,
  ]);

  const user = useSelector(state => state.auth.user);
  const isRequesting = useSelector(state => state.contacts.isRequestion);
  const showCreateModal = useSelector(state => state.contacts.createModalOpened);
  // const showEditModal = useSelector(state => state.contacts.editModalOpened);
  const contactsCount = useSelector(state => state.contacts.contactsCount);
  const deleteModalOpened = useSelector(state => state.contacts.deleteModalOpened);
  const contacts = useSelector(state => state.contacts.data);
  const editContactId = useSelector(state => state.contacts.editContactId);
  const searchString = useSelector(state => state.contacts.searchString);
  const filterContacts = searchString
    ? contacts.filter(contact => contact.name.includes(searchString))
    : contacts;
  const editorContact = contacts.filter(contact => contact.id === editContactId);
  const filterModalOpened = useSelector(state => state.contacts.filterModalOpened);
  const pageCount = Math.ceil(contactsCount / showContactsCount);
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
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
        <button type="submit" onClick={() => dispatch(logOut())}>
          LOGOUT
        </button>
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
              <img
                onClick={() => dispatch(openFilterModal())}
                className={styles.filter}
                src={filter}
                alt=""
              />
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
      {contacts.length !== 0 && (
        <div className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.allContacts}>{contactsCount} contacts</div>
            <div className={styles.contactLinks}>
              {pages.map(page => {
                return (
                  <button
                    onClick={() => {
                      dispatch(getPartContacts({ page, count: showContactsCount }));
                    }}
                    type="submit"
                    key={page}
                    className={
                      (currentPage === page && styles.contactLinkSelected) ||
                      styles.contactLink
                    }
                    disabled={currentPage === page}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
            <div className={styles.selectCountContacts}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Per page</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={showContactsCount}
                  onChange={showCountsChange}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      )}
      <SnackBar />
      {filterModalOpened && <FilterModal />}
    </div>
  );
}

export default Home;
