import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <p className={css.contactName}>{name}:</p>
          <p className={css.contactNumber}>{number}</p>
          <button
            className={css.deletBtn}
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            <span>Delete</span>
          </button>
        </li>
      ))}
    </ul>
  );
};
