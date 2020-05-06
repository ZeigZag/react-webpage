import React from 'react';
import './name.css';


function NameText(props) {
    return (
        <div class="header-name">
            <h1 class="name">{props.name}</h1>
        </div>
    );
}


  export class Name extends React.Component {


    render() {
      return (
        <NameText name={this.props.name}/>
      );
    }
  }

  export default Name;