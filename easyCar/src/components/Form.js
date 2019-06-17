import React from "react";

import Firebase from "firebase";
import config from "../config/firebase-config";
import { CSVLink, CSVDownload } from "react-csv";

import dateFormatter from '../Helpers/DateFormatter'
import clientIp from '../Helpers/ClientIpGetter'

class Form extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      Leads: [], userIp: ''
    };
  }
  componentWillMount(){
    var userIp = ''
    Promise.resolve( clientIp).then(res => {
      this.setState({userIp: res})
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
       
        <h1>Leads Inseridos</h1>
        
        <div className="LeadsData">
        {Leads.map(lead => (
            <div
            key={lead.email}
            >
                <h5>{lead.name}</h5>
                <p>{lead.email}</p>,
            </div>
        ))}
        </div>
        
            <h1>Ei, tu queres ser um lead?</h1>
            <form onSubmit={this.handleSubmit}>
             
                <input type="hidden" ref="userDatetime" />
                
                  <label>Coloca teu nome</label>
                  <input
                    type="text"
                    ref="name"
                    placeholder="Nome"
                    required
                  />
                 
                  <label>Coloca teu email</label>
                  <input
                    type="text"
                    ref="email"
                    placeholder="Email"
                    required
                  />
                
              <button type="submit">
                Eu quero sim, pfv
              </button>
            </form>
            <CSVLink data={Leads}>Download csv</CSVLink>;
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
