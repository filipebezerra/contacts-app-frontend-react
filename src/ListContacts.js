import React, { Component } from 'react'

class ListContacts extends Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <ol className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ol>
    )
  }
}

export default ListContacts