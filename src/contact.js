import React from 'react';
import './contact.css';


function ContactInfo(props) {
    return (
        <div class="contact-header">
            <p1 class="contact-info">{props.address}</p1>
        </div>
    );
}


  export class Contact extends React.Component {


    render() {
      return (
        <ContactInfo address={this.props.address}/>
      );
    }
  }

  export default Contact;