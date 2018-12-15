import React, { Component } from 'react';

class ImagecardComponent extends Component {
    state = {  }
    render() { 
        return ( 
                    
                    <div class="card">
                        <div class="card-image">
                        <img src="./img/2.jpg"></img>
                        <span class="card-title">{this.props.title}</span>
                        </div>
                        <div class="card-content">
                        <p>{this.props.description}</p>
                        </div>
                        <div class="card-action">
                        <a href="#">Ver más de {this.props.title}. -></a>
                        </div>
                    </div>
            );
    }
}
 
export default ImagecardComponent;