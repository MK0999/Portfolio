import React from 'react';
import  { useState } from 'react';

import '../styles/contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
 const Contact = ()=> {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);

  const handleChange = (e)=>{
const inputName = e.target.name;
const inputValue = e.target.value;
console.log(`inputName: ${inputName}, inputValue: ${inputValue}`);
 // Based on the input type, we set the state of either email,name,message
 if(inputName === 'name'){
  setName(inputValue);
 }else if(inputName === 'email'){
  setEmail(inputValue);
 }else if (inputName ==='message'){
  setMessage(inputValue)
 }
  };


 const handleformSubmit = (e) => {
e.preventDefault();
 
  if(!validateEmail(email)){
    setErrorMessage('enter valid email')
    return;
  };
  if(name.length < 5){
setErrorMessage('Enter 5 or more characters for name')
return;
  };
if( message.length < 5){
  setErrorMessage('Enter proper Message');
  return;
}

setErrorMessage('Form has been submitted successfully');
setMessageVisible(true);

    // Clear the message after 3 seconds
    setTimeout(() => {
      console.log('Inside setTimeout');
      setMessageVisible(false);
    }, 2000);

  setName('');
  setEmail('');
  setMessage('');
 };


  

  return (
    <div>
    <Form>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name}
          name="name"
          onChange={handleChange} type="text" placeholder="Name" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control   value={email}
          name="email" type="email"  onChange={handleChange} placeholder="Enter email" />
        
      </Form.Group>

     
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Message</Form.Label>
        <Form.Control value={message}
          name="message"
          onChange={handleChange} type="text" placeholder="" />
      </Form.Group>
       
     
      <Button variant="primary" onClick={handleformSubmit} type="submit">
        Submit
       
      </Button>
      {(errorMessage && messageVisible) && (
      <div>
      <p className='error'>{errorMessage}</p></div>
    )}
      </Form>
     
    </div>
   
   
  )
 }
 export default Contact;