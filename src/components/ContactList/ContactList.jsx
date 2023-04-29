import React from 'react';

export const ContactList = ({contacts}) =>{
 return (
    <ul>
        {contacts.map(({id, name, number}) => (            <li id={id}>
              <p>{name} {number}</p>
               
        </li>
        ))}
    </ul> 
 )
};


