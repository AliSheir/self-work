import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.css';
import {Link} from 'react-router-dom';





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root} className='header-container'>
      <AppBar position="static" >
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <span className='logo'> <span className='logo-s-color'>S</span>ho<span className='logo-color'>ping He</span>re</span>
          </Typography>
          <Link className='header-btn' to='SignIn'> Sign In </Link>
          <Button className='header-btn' color="inherit">Sgin In</Button>
          <Button className='header-btn' color="inherit">About us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}