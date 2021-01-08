import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMessage } from 'store/contacts/actions';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar() {
  const dispatch = useDispatch();
  const dialogMessage = useSelector(state => state.contacts.message);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!dialogMessage}
        autoHideDuration={6000}
        onClose={() => {
          dispatch(changeMessage(''));
        }}
        message={dialogMessage}
        action={
          <React.Fragment>
            <Button
              color="secondary"
              size="small"
              onClick={() => {
                dispatch(changeMessage(''));
              }}
            >
              OK
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                dispatch(changeMessage(''));
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
