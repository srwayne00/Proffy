import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/58096734?s=460&u=d9c470a286c3347597f9975f91130fe4d89cf72a&v=4" alt="Wagner Oliveira"/>
                <div>
                    <strong>Wagner Oliveira</strong> 
                    <span>Química</span>
                </div>
            </header>
                <p> 
                    Entusiasta das melhores tecnologias de química avançada. 
                    <br/><br/>
                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas 
                    através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões. 
                </p>
            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 80,00</strong> 
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article> 
    );
}

export default TeacherItem;