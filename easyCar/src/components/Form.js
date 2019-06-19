import React from "react";

import Firebase from "firebase";
import config from "../config/firebase-config";
import { CSVLink, CSVDownload } from "react-csv";
import "../styles/form.scss";

import dateFormatter from "../Helpers/DateFormatter";
import clientIp from "../Helpers/ClientIpGetter";
import { Fieldset, Button, Column, Input } from "rbx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      Leads: []
    };
  }
  componentWillMount() {
    var userIp = clientIp;
    console.log(userIp)
  }
  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }
  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("Dados salvos");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log("Dados recebidos");
  };
  render() {
    const { Leads } = this.state;
    return (
      <div className="LeadsContainer">
        <form onSubmit={this.handleSubmit}>
          <Column.Group centered>
            <Column size="half">
              <Fieldset>
                <Input type="hidden" ref="data_hora" />
                <Input
                  className="leadCapture"
                  type="text"
                  ref="name"
                  placeholder="Seu Nome"
                  required
                />

                <Input
                  className="leadCapture"
                  type="email"
                  ref="email"
                  placeholder="email@exemplo.com"
                  required
                />

                <Button className="le-boton" type="submit">Enviar</Button>
              </Fieldset>
            </Column>
          </Column.Group>
        </form>
        <h1 className="promise">prometemos não enviar nenhum tipo de spam :)</h1>
         <CSVLink id="csv-link" filename={"leads.csv"} data={this.state.Leads}>Download csv</CSVLink>;
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    let email = this.refs.email.value;
    let nome = this.refs.name.value;
    let ip = clientIp
    let tipo = "B2C"
    let data_hora;

    if (data_hora && nome && email) {
      const { Leads } = this.state;
      Leads[leadIndex].name = nome;
      Leads[leadIndex].email = email;
      const leadIndex = Leads.findIndex(data => {
        return data.data_hora === data_hora;
      });
      this.setState({ Leads });
    } else if (nome && email) {
      const data_hora = dateFormatter;
      const { Leads } = this.state;
      Leads.push({ nome, email, ip, tipo, data_hora });
      this.setState({ Leads });
    }
    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.data_hora.value = "";
    console.log(this.state.Leads);
  };
}

export default Form;
