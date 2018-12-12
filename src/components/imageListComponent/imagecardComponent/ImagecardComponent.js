import React, { Component } from 'react';

class ImagecardComponent extends Component {
    constructor(props) {
        super(props)
      }
      
    state = {  }
    render() { 
        return ( 
              <div class="row">
                    <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                        <img src={this.props.src}></img>
                        <span class="card-title"></span>
                        </div>
                        <div class="card-content">
                        <p></p>
                        </div>
                        <div class="card-action">
                        <a href="#">{this.props.name}</a>
                        </div>
                    </div>
                    </div>
                </div>
            );
    }
}
 
export default ImagecardComponent;