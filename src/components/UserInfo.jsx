import React from 'react'

const styles = {
  
    

    img: {
        borderRadius: '50px',
        width: '50px',
        height: '50px',
        marginRight: '10px',
        
    },

        name: {
        fontSize: '15px',
        display: 'flex',
        
    },

        course:{
            fontSize:'10px',
            color:'gray',
    
    },

        cardContenedor:{
            display:'flex',
            border: 'none',
            borderRadius:'5px',
            padding:'10px',
            margin:'15px 10px',
            alignItems:'center',
            justifyContent: 'space-evenly',
            position:'relative',
            bottom:'0px',
            background:'#9992',
     
    }
}




function UserInfo ({name, photo, course}) {
    return(
<div style={styles.cardContenedor}>
            <img src={photo} style={styles.img}/>
    <div>
        <span style={styles.name}>{name}</span>
        <span style={styles.course}>{course}</span>
        
    </div>
</div>

    )
}

export default UserInfo;