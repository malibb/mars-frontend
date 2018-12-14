import React, { Component } from 'react';
import AirbnbLogo from '../../assets/airbnb-1.svg';
import './style.scss';

class NavbarComponent extends Component {
    state = {  }
    render() { 
        return ( 
          <nav>
            <div className="nav-wrapper bg-main">
              <ul>
                <a href="#" className="brand-logo">
                  <img 
                      src={AirbnbLogo}
                      height="25em"
                      alt="Airbnb Logo"
                      className="airbnb-logo"
                      />
                </a>
              </ul>
              <nav>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/me">Hola </a></li>
              <li><a href="/browse">Alojamientos</a></li>
              <li><a href="/logout">Logout</a></li>
                <li><a href="#">OnO</a></li>
              </ul>
              </nav>
            </div>
          </nav>
         );
    }
}
 
export default NavbarComponent;