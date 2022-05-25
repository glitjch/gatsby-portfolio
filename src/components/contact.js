import React from 'react';
import { useState } from 'react';

import * as classes from './styles/contact.module.css';

const Contact = () => {
const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ message, setMessage ] = useState("");

const handleName = (e) => {
  setName(e.target.value)
}

  return (
    <form onSubmit={()=> {}} className={classes.contact}>
      <label htmlFor='name'>Add your name</label>
      <input name='name' value={name} onChange={handleName}/>
      <label htmlFor='email'>then your email</label>
      <input name='email'/>
      <label htmlFor='message'>finally your message</label>
      <input name=',essage'/>
      <button type='submit'>send</button>
    </form>
  );
};

export default Contact;