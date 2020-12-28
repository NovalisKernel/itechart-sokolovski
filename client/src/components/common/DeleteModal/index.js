import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import {openDeleteModal,deletedContact} from 'store/contacts/actions'
//import styles from './styles.module.css';

export default function AlertDialog() {
  const dispatch = useDispatch();
  const deleteContactId = useSelector(state => state.contacts.deleteModalOpened);

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={!!deleteContactId}
        onClose={()=>dispatch(openDeleteModal(null))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"DELETING CONTACT"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>dispatch(openDeleteModal(null))} color="primary">
            NO
          </Button>
          <Button onClick={()=>dispatch(deletedContact(deleteContactId))} color="primary">
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}