import React, { Component, Fragment } from "react";
import { Button, Title } from "rbx";
import "../styles/Popup.scss";
class Popup extends Component {
  render() {
    function closePopup(e){
        e.target.style.display = 'none'
    }
    return (
      <Fragment>
        <div className="popupFragment" onClick={closePopup}>
          <div class="popup">
            <div class="image">

            </div>
            <div className="content">
                <Title>Quer saber mais sobre seu carro? Veja nosso conteúdo especial!</Title>
                <Button>Acessar</Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Popup;
