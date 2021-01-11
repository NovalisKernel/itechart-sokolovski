import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar({ dialogMessage, closeHandler }) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!dialogMessage}
        autoHideDuration={6000}
        onClose={closeHandler}
        message={dialogMessage}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={closeHandler}>
              OK
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={closeHandler}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
