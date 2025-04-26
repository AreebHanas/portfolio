import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/SendRounded";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./contact.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const contactRef = useRef();

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    tl.from(".contact_header", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        ".cards .MuiCard-root",
        {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .from(
        ".direct_mail",
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, { scope: contactRef });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_i7kphfo",
        "template_3xagb7s",
        formRef.current,
        "mr0PF0q1JF8EwM-po"
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#007bff",
          });
          setIsLoading(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error sending email 😵", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#d33",
          });
          setIsLoading(false); // Stop loading
        }
      );
  };

  return (
    <div id="contact" ref={contactRef}>
      <div className="contact_container">
        <div className="contact_header">
          <h4>Contact Me</h4>
          <p>Feel free to reach out!</p>
        </div>
        <div className="adjust_space">
          <div className="contact_detail">
            <div className="talk_to_me">
              <div className="sub">Talk to me</div>
              <div className="cards">
                <Card className="mail">
                  <EmailIcon className="email_icon" />
                  <h5>Email</h5>
                  <p className="contact_info">arbofficial02@gmail.com</p>
                  <a
                    className="media_url"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=arbofficial02@gmail.com&su=Let's%20Work%20Together&body=Hey%20Areeb%2C%20I%20saw%20your%20portfolio%20and..."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="write_me">write me</p>
                    <SendIcon className="arrow" />
                  </a>
                </Card>
                <Card className="phone">
                  <WhatsAppIcon className="whatsapp_icon" />
                  <h5>Whatsapp</h5>
                  <p className="contact_info">+94 714-841-954</p>
                  <a
                    className="media_url"
                    href="https://api.whatsapp.com/send?phone=94714841954"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="write_me">write me</p>
                    <SendIcon className="arrow" />
                  </a>
                </Card>
                <Card className="linkedin">
                  <LinkedInIcon className="linkedin_icon" />
                  <h5>Linkedin</h5>
                  <p className="contact_info">Areeb Hanas</p>
                  <a
                    className="media_url"
                    href="https://www.linkedin.com/in/arbofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="write_me">write me</p>
                    <SendIcon className="arrow" />
                  </a>
                </Card>
              </div>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="direct_mail">
              <div className="sub">Write me your project</div>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                className="text_field"
              >
                <div className="name">
                  <TextField
                    id="outlined-multiline-static"
                    label="Name"
                    multiline
                    rows={1}
                    placeholder="Enter your name"
                    value={formData.name}
                    name="name"
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="email">
                  <TextField
                    id="outlined-multiline-static"
                    label="Mail"
                    multiline
                    rows={1}
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="name">
                  <TextField
                    id="outlined-multiline-static"
                    label="Project"
                    multiline
                    rows={4}
                    placeholder="Write your project"
                    name="message"
                    value={formData.message}
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="btn_adjst">
                  <button
                    className={`send_btn ${isLoading ? "loading" : ""}`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="loader_container">
                        <div className="loader"></div>
                        <div className="loader"></div>
                        <div className="loader"></div>
                      </div>
                    ) : (
                      <>
                        Send &nbsp;&nbsp;{" "}
                        <SendIcon fontSize="small" className="send_mail_icone" />{" "}
                      </>
                    )}
                  </button>
                </div>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
