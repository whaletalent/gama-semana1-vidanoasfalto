import React, { Component, Fragment } from "react";
import { Button, Title } from "rbx";
import "../styles/Popup.scss";
class Popup extends Component {
  constructor(props){
    super(props);
    this.state = {
      opened: true
    }
  }
  close = (e) => {
    e.target.parentNode.parentNode.parentNode.style.display = "none";   
  }

  render() {

    return (
      <Fragment>
        {this.state.opened ? (    
          <div className="popupFragment">
            
          </div>
        ) : (
            null 
        )}
      </Fragment>
    );
  }
}

export default Popup;
