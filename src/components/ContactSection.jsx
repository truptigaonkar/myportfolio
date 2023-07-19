// Reference: https://www.youtube.com/watch?v=bMq2riFCF90
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, FormGroup, Input, Alert } from "reactstrap";

export const ContactSection = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sv27ku6",
        "template_y0lwjsm",
        form.current,
        "AQ6lrgZkro1D86LKb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Email sent!");
          console.log("email sent");
        },
        (error) => {
          console.log(error.text);
          setMessage(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ width: "38rem", margin: "20px" }}
      >
        {message && <Alert>{message}</Alert>}
        <FormGroup>
          <Input
            id="name"
            type="text"
            name="user_name"
            placeholder="Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="email"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="message"
            name="message"
            placeholder="Message"
            type="textarea"
            required
          />
        </FormGroup>
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};
