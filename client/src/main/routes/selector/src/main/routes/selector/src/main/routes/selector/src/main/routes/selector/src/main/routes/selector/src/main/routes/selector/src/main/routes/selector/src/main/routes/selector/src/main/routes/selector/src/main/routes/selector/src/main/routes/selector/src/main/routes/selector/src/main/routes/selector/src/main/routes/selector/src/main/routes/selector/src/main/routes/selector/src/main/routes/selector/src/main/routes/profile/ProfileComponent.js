import React from "react";
import { connect } from 'react-redux';

function ProfileComponent(props){
  return(
      <div>
        <h3>Welcome {props.user.username}</h3>
      </div>
  )
}

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, {})(ProfileComponent);