import React from 'react';
import Contador from './Contador'

class CardWithClass extends React.Component {


    state = {
        contador: 1,
    }

    
    componentWillMount(){
        console.log('El componente se va a renderizar')
    }
    
    componentDidMount(){
        console.log('Hola ya estoy renderizado');
        
    }

    componentDidUpdate(){
        if(this.state.contador < 0){
            alert('no puedes restar numeros neativos')
        }
        console.log('Hola me estoy actualizando', this.state.contador)

    }

    sumar = () => {
        this.setState({contador : this.state.contador + 1})
    }

    restar = () => {
        this.setState({contador : this.state.contador - 1})
    }

    render (){
        return(
        <div>
            <button onClick={this.restar}>RESTAR</button>
            
            <Contador contadorNumero = {this.state.contador} />
            <button onClick={this.sumar}>SUMAR</button>
        </div>

        )
    }


}
export default CardWithClass;
