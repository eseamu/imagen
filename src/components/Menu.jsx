import React, {Component} from 'react';
import Category from './Category';

class Menu extends Component {




    render() {
        return(
            <div className='menu'>
                <ul>
                    <Category name ='SEGURIDAD INDUSTRIAL' items={['GUANTES','ARNECES','ANTIPARRAS','CASCOS','BORCEGOS']} /> 
     
                </ul>

            </div>
        )
    }
}

export default Menu;