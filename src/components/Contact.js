import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jjmpjx8', 'template_3xe7jee', formRef.current, {
        publicKey: 'LENxHErRB8C2e30Iv',
      })
      .then(
        () => {
          setSucces (true)
          setEmail('')
          setName('')
          setLastname('')
          setPhone('')
          setMessage('')
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
                      <input type="text" placeholder="First Name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" name="last_name" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
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
