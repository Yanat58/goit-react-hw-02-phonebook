import React, { Component } from 'react';

export class ContactForm extends Component {
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
    this.props.onSubmit(this.state)

    this.reset();
  };

  reset = () => {
    this.setState({name:'',number:'',})
    
  };

  render() {
    const {  name, number } = this.state;

    return (
          <form onSubmit={this.handelSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handelChange}
              />
            </label>
            <label htmlFor="">
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handelChange}
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
    );
  }
}
