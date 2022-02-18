import './Navbar.css';
import logo from './logo.svg';
import {  FaXbox  } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img className='navbar__image' src={logo} alt='stream'></img>
      </div>
      <div className='navbar__links'>
        <ul className='navbar__links__list'>
        <li>
            <a className='items' href='/'>
                <FaXbox />
                <span className='text'>Home</span>
            </a>    
          </li>
          <li>
            <a className='items' href='/Profile'>
              <FaXbox />
              <span className='text'>Perfil</span>
            </a>
          </li>          
          <li>
            <a className='items' href='https://support.xbox.com/pt-BR/contact-us'>
              <FaXbox />
              <span className='text'>Suporte</span>
            </a>
          </li>
          <li>
            <a className='items' href='/WishList'>
                <FaXbox />
                <span className='text'>Lista de Desejos</span>
            </a>    
          </li>
          <li>
            <a className='items' href='/login'>
              <FaXbox />
              <span className='text'>Entrar</span>
            </a>              
          </li>
          <li>
            <a className='items' href='/Register'>
                <FaXbox />
                <span className='text'>Cadastro</span>
            </a>    
          </li>
        </ul>
      </div>
    </div>
  )
}