import React from "react";
import { connect } from 'react-redux';
import "./profile.css";
import "./profile-boder.jpg";

function ProfileComponent(props){
  return(
      <div className="profile-wrapper">
        <h3 className="profile-text"> <br/><br/><br/> Welcome <br/><br/><br/>{props.user.username} !</h3>
      </div>
  )
}

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, {})(ProfileComponent);
