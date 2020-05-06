import React from 'react';
import './images.css';
import img_4k from './images/4k.jpg';
import img_airbus from './images/airbus.jpg';
import img_map from './images/map.png';
import img_parasols from './images/parasols.jpg';
import img_piedpiper from './images/piedpiper.jpg';
import img_village from './images/village.png';




  export class Images extends React.Component {

    render() {
      return (
        <div>
            <img src={this.selectImage(this.props.images[0])} alt="Image1" />
            <img src={this.selectImage(this.props.images[1])} alt="Image2" />
            <img src={this.selectImage(this.props.images[2])} alt="Image3" />
            <img src={this.selectImage(this.props.images[3])} alt="Image4" />
        </div>
      );
    }

    selectImage(imageIndex){


        switch(imageIndex) {
            case 0:
                return img_4k;
            case 1:
                return img_airbus;
            case 2:
                return img_map;
            case 3:
                return img_parasols;
            case 4:
                return img_piedpiper;
            case 5:
                return img_village;
            default:
              return null;
          } 
    }

  }
  
  // ========================================

export default Images;