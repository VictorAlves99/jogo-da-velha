import React, {Component} from 'react';
import './simbologia.css';  

class Simbolos extends Component{
    render(){
        return(
            <div className='simbolos'>
                <input type="text" placeholder="Digite o símbolo que você deseja usar"/>
            </div>
        );
    }
}

export default Simbolos;