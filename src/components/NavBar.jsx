import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import CardWidget from './CardWidget'
import Menu from './Menu'
import '../App.css'


const useStyles = makeStyles (theme => ({
  offset: theme.mixins.toolbar
}))

const NavBar = () => {
const classes = useStyles()
 
return (
  <div>
    <AppBar color='secondary'> 
      <Toolbar>     
      

        <Typography variant="h6">
        <p className='title'> IMAGEN </p> 
        </Typography>


    <CardWidget className='card'/>

    <Menu />



      </Toolbar>
    </AppBar>
    
    
    <div className={classes.offset}></div>
  </div>
  )
  
}

export default NavBar;