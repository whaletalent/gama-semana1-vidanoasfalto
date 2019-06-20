import React, { Component, Fragment } from "react";
import { Notification, Button } from "rbx";
import "../styles/bannerMiddle.scss";
class BannerMiddle extends Component {
  render() {
    return (
      <Fragment>
        <div class="notification-area">
            <Notification id="banner">Receba as novidades em primeira mão 
                <Button color="primary">Vamos!</Button>
            </Notification>
        </div>
       
      </Fragment>
    );
  }
}

export default BannerMiddle;