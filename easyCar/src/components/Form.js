import React from "react";

import Firebase from "firebase";
import firebase from "../config/firebase-config";
import { CSVLink, CSVDownload } from "react-csv";
import "../styles/form.scss";

import dateFormatter from "../Helpers/DateFormatter";
import clientIp from "../Helpers/ClientIpGetter";
import {
  Fieldset,
  Button,
  Column,
  Input,
  Title,
  Field,
  Control,
  Label,
  Radio
} from "rbx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Leads: []
    };
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <Column.Group centered>
            <Column>
              <Fieldset class="leadCapture">
                <Title size={5}>Quer saber mais sobre seu carro?</Title>
                <Input type="hidden" ref="data_hora" />
                <Input
                  id="imputLead"
                  type="text"
                  ref="name"
                  placeholder="NOME"
                  required
                />
                <Input
                  id="imputLead"
                  type="text"
                  ref="lastName"
                  placeholder="SOBRENOME"
                  required
                />

                <Input
                  id="imputLead"
                  type="email"
                  ref="email"
                  placeholder="EMAIL@EXEMPLO.COM.BR"
                  required
                />
                {/* <Field horizontal>
                  <Field.Body>
                    <Field narrow>
                      <Control>
                        {[{option: "B2B", value: 'Tenho uma frota de veículos'},{option: "B2C", value: 'Tenho veículo pessoal'}].map(value => (
                          <Label key={value.option}>
                            <Radio required ref="member" name="member" value={value.option} /> {value.value}
                          </Label>
                        ))}
                      </Control>
                    </Field>
                  </Field.Body>
                </Field> */}
                <Button color="primary" size="large" type="submit">
                  Enviar
                </Button>
                <CSVLink
                  id="csv-link"
                  filename={"leads.csv"}
                  data={this.state.Leads}
                >
                  Download csv
                </CSVLink>
              </Fieldset>
            </Column>
          </Column.Group>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    let email = this.refs.email.value;
    let nome = this.refs.name.value + " " + this.refs.lastName.value;
    let ip = clientIp;
    //let tipo = this.refs.member.value
    let tipo = "B2C";
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
    this.refs.lastName.value = "";
    this.refs.data_hora.value = "";
    
    alert("Email cadastrado!");
  
  };
}

export default Form;
