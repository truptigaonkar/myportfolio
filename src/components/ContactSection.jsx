import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const form = useRef();
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sv27ku6', 'template_y0lwjsm', form.current, 'AQ6lrgZkro1D86LKb')
        .then((result) => {
            console.log(result.text);
            setMessage(result.text);
            console.log('email sent');
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <form ref={form} onSubmit={sendEmail}>
      {message}
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
