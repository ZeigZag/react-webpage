import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Skills from './skills.js'
import Profile from './profile.js'
import Name from './name.js'
import Contact from './contact.js'
import 'bootstrap/dist/css/bootstrap.min.css';

  
  ReactDOM.render(
    <div>
      <Name name="Dylan Zeigler"/>
      <Profile/>
      <Skills/>
      <Contact address="100 Pennsylvania Ave"/>
    </div>,
    document.getElementById('root')
  );
  