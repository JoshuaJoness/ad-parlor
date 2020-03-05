import React from 'react';
import logo from './adparlor-logo.svg'

function Nav() {
  return (
    <div>
      <div style={{height: 60, width: '100%', backgroundColor:'#34495E'}}>
        <img src={logo} alt="Ad Parlor logo" style={{display:'inline-block', height: 35, marginLeft:100, marginTop: 10}}></img>
        <div style={{display:'flex', position:'absolute', top: 6, left: 300, color: 'white'}}>
          <p>MEDIA BUYING</p>
          <p style={{marginLeft:30}}>CREATIVE AT SCALE</p>
          <p style={{marginLeft:30}}>AUDIT SERVICES</p>
        </div>
        <div style={{display:'flex', position:'absolute', top: 0, right: 100, top:8, color: 'white', fontSize: 14}}>
          <p>AD MOCKUPS</p>
          <p style={{marginLeft:30}}>ABOUT</p>
          <p style={{marginLeft:30}}>BLOG</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
