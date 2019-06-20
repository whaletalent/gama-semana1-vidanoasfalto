import React, {Component }from 'react';
import {Modal} from 'react-bootstrap'
import {Button, Title} from 'rbx'
import Form from '../components/Form'
import '../styles/Popup.scss'
class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Form></Form>
             
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Não, Obrigado</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  export default class ModalButton extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <div>
          <Button
            color="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Receber Convite
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </div>
      );
    }
  }
  