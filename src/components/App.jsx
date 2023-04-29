import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  // addContact =(name, number)=> {
  //   console.log(name);
  //   console.log(number);
  // }
  handlerSubmitForm=({ name, number})=>{
    // console.log(data);
    const contact={
      id: nanoid(),
      name,
      number,
    }
  }
  render() {
    const { contacts } = this.state;

    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <h1>Phonebook</h1>
  <ContactForm onSubmit={this.handlerSubmitForm} />

  <h2>Contacts</h2>
 
  <ContactList contacts={contacts}/>
        
      </div>
    );
  }
}
