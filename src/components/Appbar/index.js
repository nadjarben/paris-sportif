import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ModalLogin from '../ModalLogin'
import Drawer from '../Drawer'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Drawer className={classes.menuButton}  />
          <Typography variant="h6" className={classes.title}>
            Parions Euro
          </Typography>
          <ModalLogin />
        </Toolbar>
      </AppBar>
    </div>
  );
}