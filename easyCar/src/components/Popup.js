import React, { Component, Fragment } from "react";
import { Button, Title } from "rbx";
import "../styles/Popup.scss";
class Popup extends Component {
  render() {
    function closePopup(show){
      
        e.target.parentNode.parentNode.parentNode.style.display = "none";
        
    }
    return (
      <Fragment>
        <div className="popupFragment">
          <div class="popup">
            <div class="image">

            </div>
            <div className="content">
                <Title>Quer saber mais sobre seu carro? Veja nosso conteúdo especial!</Title>
                <Button id="botaoPopup" color="primary">Acessar</Button>
                <Button id="botaoPopup" onClick={closePopup}>Não, Obrigado</Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Popup;
