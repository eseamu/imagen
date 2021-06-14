import React from 'react';
import Card from './Card';


 const referensData = [
    {
        messaje: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis saepe numquam quos earum magnam corrupti facilis animi unde commodi.',
        user: { 
                    name: 'Jano AmelioOrtiz',
                    course: 'Web Developer',
                    photo: 'https://picsum.photos/id/237/200/300'
            }
         },

    {
        messaje: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        user: { 
                    name: 'Esequiel Amuchastegui',
                    course: 'FrontEnd Developer',
                    photo: 'https://picsum.photos/id/237/200/300'
            }
         },  
         
    {
        messaje: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        user: { 
                    name: 'Marcos Amuchastegui',
                    course: 'Ing. Civil',
                    photo: 'https://picsum.photos/id/237/200/300'
            }
         }, 
         


 ]

 class CardContainer extends React.Component {
     state = {
         referens: referensData,
     }
         render(){
             return(
                <div style={{display:'flex',
                             margin:'10px',
                             }}>
                 
                 {this.state.referens.map((item)=> <Card {...item}/>)}
                 </div>  
                
                    )
                 } 
     }
 

export default CardContainer;