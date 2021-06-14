import React from 'react';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {IconButton} from '@material-ui/core'

class CardWidget extends React.Component {
    render (){
        return(
          <IconButton
              color="inherit"
              aria-label="menu"
            >
              <CreditCardIcon />
          </IconButton>
        )
}
}


export default CardWidget;