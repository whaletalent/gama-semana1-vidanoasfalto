import React, { Component, Fragment } from "react";
import { Button, Title } from "rbx";
import "../styles/Popup.scss";
class Popup extends Component {
  render() {
    function closePopup(e){
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
                <Button id="botaoPopup" color="primary">Tenho uma frota de veículos</Button>
                <Button id="botaoPopup" color="primary">Veículo pessoal</Button>
                <Button id="botaoPopup" onClick={closePopup}>voltar</Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Popup;
