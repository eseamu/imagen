import React from 'react'
import UserInfo from './UserInfo'



const container = {
    
    borderRadius:'5px',
    width:'400px',
    height:'200px',
    backgroundColor:'#ECF0F1',
    margin:'0 2%',
    boxShadow: '1px 1px 5px #8E8E8E',
      
}


function Card ({messaje, user}){
    return(
    <div style={container}>
               {messaje}
        <UserInfo {... user}/>
    </div>
    )
}

export default Card;