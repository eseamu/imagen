import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import CardWidget from './CardWidget'


const useStyles = makeStyles (theme => ({
  offset: theme.mixins.toolbar
}))

const NavBar = () => {
const classes = useStyles()
 
return (
  <div>
    <AppBar> 
      <Toolbar>     
        <Typography variant="h6">
         IMAGEN 
        </Typography>


    <CardWidget />


      </Toolbar>
    </AppBar>
    
    <div className={classes.offset}></div>
  </div>
  )
  
}

export default NavBar;