import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { deletedContact, openDeleteModal } from 'store/contacts/actions';

export default function AlertDialog({ deleteContactId }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openDeleteModal(null));
  };

  return (
    <div>
      <Dialog
        open={!!deleteContactId}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you really want to delete this contact?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button
            onClick={() => {
              dispatch(deletedContact(deleteContactId));
            }}
            color="primary"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
