import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jjmpjx8', 'template_3xe7jee', formRef.current, {
        publicKey: 'LENxHErRB8C2e30Iv',
      })
      .then(
        () => {
          setSucces (true)
        },
        (error) => {
          setError (true)
        },
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <div>
                <h2>Get In Touch</h2>
                <form ref={formRef} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name="user_name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" name="last_name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="email" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name="phone" required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message" required></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                  {error && "Error"}
                  {succes && "Email send"}
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
