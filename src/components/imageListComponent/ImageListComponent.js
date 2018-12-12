import React, { Component } from 'react';
import ImageCard from './imagecardComponent/ImagecardComponent.js';
import './imagelist.css';

class ImageListComponent  extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      let options = this.props.options;
      return(
        <React.Fragment>
        <ul id="ImageList" >
         {options.map( (option, index) =>(         
            <li key={index}>
            <ImageCard name={option.name} src={option.src}></ImageCard>
            </li>
         ))
         }
         </ul>
        </React.Fragment>
      );
    }
}

export default ImageListComponent;