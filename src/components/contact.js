import React from 'react';
import { useState } from 'react';

import * as classes from './styles/contact.module.css';
import { useGlobalContext } from './layout';

import CloseIcon from './closeIcon';

// COMPONENT
const Contact = () => {
  const [ status, setStatus ] = useState("Submit") 
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const { mount } = useGlobalContext();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...")
    if ([name, email, message].some((val) => val.length === 0)) return;
    if (name.length < 3) return;
    if (email.length < 6) return;
    if (message.length < 10) return;

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

    setName("");
    setEmail("");
    setMessage("");
    return;
  };

  return mount === "contact" && (
    <form onSubmit={handleSubmit} className={classes.contact}>
      <div>
        <CloseIcon />
      </div>
      <h2>Contact</h2>
      <label htmlFor='name'>Add your name*</label>
      <input name='name' type={"text"} id={"name"} value={name} onChange={handleName} required/>
      <label htmlFor='email'>then your email*</label>
      <input name='email' type={"email"} id={"email"} value={email} onChange={handleEmail} required/>
      <label htmlFor='message'>finally your message*</label>
      <textarea name='message' value={message} id={"message"} onChange={handleMessage} 
      placeholder={"Project inquiries, or even a tea-ffee."}
      required/>
      <button type='submit'>{status}</button>
    </form>
  );
};

export default Contact;