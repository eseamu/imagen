import React, {useState} from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../App.css'

export default function ItemCount({initial, stock, onAdd}){

    const [count, setCount] = useState(initial)
    
     const agregar = () => {
         if(count < stock){
            setCount(count +1)
         }
    }
    const restar = () => {
        if(count > initial){
            setCount(count -1)
         }
    }
    return(
        <div className='item-count'>
            <p>stock total: {stock}</p>
            <p>stock disponible: {stock - count} </p>
            <div className='contador'>
                <button className='button-count' onClick={restar} >-</button>
                {count}
                <button className='button-count' onClick={agregar}>+</button>
            </div>
            <button className='button-carrito' onClick={()=> onAdd(count)}><AddShoppingCartIcon/> Agregar al carrito</button>
            

        </div>
    )   
}