import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input 
        name="name" 
        value={name} 
        onChange={setName}
        type="text"
        required
      />

      <label>Email</label>
      <input 
        name="email" 
        value={email} 
        onChange={setEmail}  
        type="email" 
        required
      />

      <label>Phone</label>
      <input 
        name="phone" 
        value={phone} 
        onChange={setPhone}  
        type="tel"
        required
      />

      <input type="submit" value= 'Add Contact' /> 

    </form>
  );
};