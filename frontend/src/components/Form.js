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
      developers: []
    };
  }
  componentDidMount() {
    this.getUserData();
    let userIp = clientIp;
    console.log(userIp)
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
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log("DATA RETRIEVED");
  };
  render() {
    const { developers } = this.state;
    return (
      <div className="LeadsContainer">
       
        
        <h1>Leads Inseridos</h1>
        
        <div className="LeadsData">
        {developers.map(developer => (
            <div
            key={developer.userDatetime}
            >
            
                <h5>{developer.name}</h5>
                <p>{developer.email}</p>
                <button
                onClick={() => this.removeData(developer)}
                >
                Remover
                </button>
                <button
                onClick={() => this.updateData(developer)}
                >
                Editar
                </button>
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
                  />
                
                
                  <label>Coloca teu email</label>
                  <input
                    type="text"
                    ref="email"
                    placeholder="Email"
                  />
                
              
              <button type="submit">
                Eu quero sim, pfv
              </button>
            </form>
            <CSVLink data={developers}>Download csv</CSVLink>;
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let userDatetime = this.refs.userDatetime.value;
    
    

    if (userDatetime && name && email) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.userDatetime === userDatetime;
      });
      developers[devIndex].name = name;
      developers[devIndex].email = email;
      this.setState({ developers });
    } else if (name && email) {
        
        const userDatetime = dateFormatter
      const { developers } = this.state;
      developers.push({ userDatetime, name, email });
      this.setState({ developers });
    }
    console.log(this.state)
    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.userDatetime.value = "";
  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.userDatetime !== developer.userDatetime;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.userDatetime.value = developer.userDatetime;
    this.refs.name.value = developer.name;
    this.refs.email.value = developer.email;
  };
}

export default Form;
