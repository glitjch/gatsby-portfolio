import React from 'react';
import { useState } from 'react';

import * as classes from './styles/contact.module.css';

const Contact = () => {
const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ message, setMessage ] = useState("");

const handleName = (e) => {
  setName(e.target.value);
};
const handleEmail = (e) => {
  setEmail(e.target.value);
};
const handleMessage = (e) => {
  setMessage(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault()

}

  return (
    <form onSubmit={handleSubmit} className={classes.contact}>
      <h2>Contact</h2>
      <label htmlFor='name'>Add your name</label>
      <input name='name' value={name} onChange={handleName}/>
      <label htmlFor='email'>then your email</label>
      <input name='email' value={email} onChange={handleEmail}/>
      <label htmlFor='message'>finally your message</label>
      <textarea name='message' value={message} onChange={handleMessage}/>
      <button type='submit'>send</button>
    </form>
  );
};

export default Contact;