import React from 'react'
import style from '../styles/login.module.css'
import {Link} from 'react-router-dom'
function login(){
    return(
             <div className={style.login}>
            <h1>Entrar no Canário</h1>
            <input type="text" placeholder='Digite seu nome' />
            <input type="email" placeholder='Canário@gmail.com' />
            <input type="number" placeholder='Digite sua senha' />
            <button>Avançar</button>
            <ul>
                <li><Link to='/Home'>AVANÇAR</Link></li>
            </ul>
            <h6>Não tenho conta? <a href="#">Inscreva-se</a></h6>
        </div>
    )
}
export default login