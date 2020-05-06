import React from 'react';
import './profile.css';
import img_profile from './images/profile.jpg';


function Headshot(props) {
    return (
        <div class="header">
            <img class="headshot" src={img_profile} alt="Headshot" />
        </div>
    );
}


  export class Profile extends React.Component {


    render() {
      return (
        <Headshot/>
      );
    }
  }

  export default Profile;