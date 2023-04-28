import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div>
        <section>
          <h1>Phonebook</h1>
          <form onSubmit={this.handelSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                onChange={this.handelChange}
              />
            </label>
            <label htmlFor="">
              Number
              <input
                type="tel"
                name="number"
                value={number}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                // required
                onChange={this.handelChange}
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(contact => {
              return <li>{name}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}
