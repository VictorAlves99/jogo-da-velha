import React, {Component} from 'react';
import './header.css';  

class Header extends Component{
    render(){
        return(
            <div>
                <header>
                    <h1>Jogo da Velha</h1>
                    <h3>Regras do jogo:</h3>
                </header>
            </div>
        );
    }
}

export default Header;