import React, { Component, Fragment } from "react";
import { Notification, Button } from "rbx";
import "../styles/bannerMiddle.scss";
import ModalButton from '../components/ModalButton'
class BannerMiddle extends Component {
  render() {
    return (
      <Fragment>
        <div class="notification-area">
            <Notification id="banner">Receba as novidades em primeira mão 
                <ModalButton/>
            </Notification>
        </div>
       
      </Fragment>
    );
  }
}

export default BannerMiddle;