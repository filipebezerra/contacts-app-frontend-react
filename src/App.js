import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.name}>{contact.name}</li>
        ))}
      </ul>
    );
  }
}

class App extends Component {
  render() {
    const contacts = [
      { name: "Juliette" },
      { name: "John" },
      { name: "Phillip" },
      { name: "Marie" }
    ];
    return (
      <div className="App">
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
