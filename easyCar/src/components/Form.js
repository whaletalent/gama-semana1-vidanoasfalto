import React from "react";

import Firebase from "firebase";
import config from "../config/firebase-config";
import { CSVLink, CSVDownload } from "react-csv";
import './form.scss'

import dateFormatter from '../Helpers/DateFormatter'
import clientIp from '../Helpers/ClientIpGetter'
import { Fieldset, Field, Button, Column, Input } from 'rbx'

class Form extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      Leads: []
    };
  }
  componentWillMount(){
    var userIp = ''
    Promise.resolve( clientIp).then(res => {
      userIp = res
    });
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
                    <Input type="hidden" ref="userDatetime" />
                      <Input
                        className="leadCapture"
                        type="text"
                        ref="name"
                        placeholder="Seu Nome"
                        required
                      />
                    
                      <Input
                        className="leadCapture"
                        type="text"
                        ref="email"
                        placeholder="email@exemplo.com"
                        required
                      />
                    
                  <Button type="submit">
                    Enviar
                  </Button>
                </Fieldset>
              </Column>
            </Column.Group>
            </form>
            {/* <CSVLink data={Leads}>Download csv</CSVLink>; */}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let userDatetime 
    var userIp = this.state.userIp;

    if (userDatetime && name && email) {
      const { Leads } = this.state;
      const leadIndex = Leads.findIndex(data => {
        return data.userDatetime === userDatetime;
      });
      Leads[leadIndex].name = name;
      Leads[leadIndex].email = email;
      this.setState({ Leads });
    } else if (name && email) {
        
      const userDatetime = dateFormatter
      const { Leads } = this.state;
      Leads.push({ userDatetime, name, email, userIp });
      this.setState({ Leads });
    }
    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.userDatetime.value = "";
    console.log(this.state.Leads)
  };
}

export default Form;
