import React, { Component } from 'react';

class NavbarComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Logo</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="login.html">Iniciar Sesión</a></li>
                <li><a href="registry.html">Registrate</a></li>
                <li><a href="#">OnO</a></li>
              </ul>
            </div>
          </nav>
         );
    }
}
 
export default NavbarComponent;