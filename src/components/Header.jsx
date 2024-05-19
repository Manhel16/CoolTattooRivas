import React from 'react';
import {Link} from '../Link'
import "../App.css"

export default function header() {
    return (
      <header id="header">
      <div className="center">
          <div id="logo">
              <Link to='/'>
              <img src="https://cooltattoorivas.com/wp-content/uploads/2015/07/cooltattoorivas-500x500.jpg" className="app-logo" alt="Logotipo" />
              </Link>
              <span id="brand">
                  Cool Tattoo
              </span>
          </div>
          
          <nav id="menu">
              <ul>
                  <li>
                      <Link to='/'>Inicio</Link>
                  </li>
                  <li>
                    <Link to='/biblioteca'>Biblioteca</Link>
                  </li>
                  <li>
                    <Link to="/bisuteria">Bisuteria</Link>
                  </li>
                  <li>
                      <Link to='/about'>Sobre nosotros</Link>
                  </li>
                  <li>
                      <Link to="/contacto">Contacto</Link>
                  </li>
                  {/* <li>
                    <LoginButton />
                  </li>                            */}
              </ul>
          </nav>
  
          <div className="clearfix"></div>
      </div>
  </header>
    )
  }