/* eslint-disable react/no-danger */
import 'isomorphic-fetch';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'dva';
import { IconButton, SnackbarContent } from '@material-ui/core';

const styles = theme => ({
  margin: {
    marginTop: 16,
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});
class Notifications extends React.Component {
  handleClose = () => {
    this.props.dispatch({ type: 'global/closeNotify' });
  };

  render() {
    const { classes, data: { key, visible, message, type, duration } } = this.props;
    return (
      <Snackbar
        className={classes.margin}
        key={key}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{ 'aria-describedby': 'notification-message' }}
        open={visible}
        autoHideDuration={duration}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={classes[type]}
          aria-describedby="client-snackbar"
          message={<span id="notification-message" dangerouslySetInnerHTML={{ __html: message }} />}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
  }
}
export default connect(state => ({
  data: state.global.notify,
}))(withStyles(styles)(Notifications));