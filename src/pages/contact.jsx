
import { Box, Heading,Text,FormControl,FormLabel, Input } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact=()=>{
    const form = useRef();
    AOS.init();

  const sendEmail = (e) => {
    e.preventDefault();
    //  console.log("hi")
    emailjs.sendForm('service_98wg5h9', 'template_g97t89j', form.current, 'NDFlDk_dFPHEsJ9Wd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
    <Box bgColor="#111111" id="contact">
        <Box pt="50px">
            <Heading color='white'>Contact Me</Heading>
        </Box>
        <Box display={{base:'block',md:'block',lg:'flex'}} width={{base:"100%",md:"80%", lg:"80%"}} margin='auto'  justifyContent='space-around' mt='100px' p='20px' >
            <Box color='white' display='flex' width={{base:"100%",md:"60%", lg:"40%"}} margin="auto" flexDirection='column' textAlign='start' pl='5%' gap='20px'   p='30px' mb={{base:'50px',md:'50px'}} mt="0"  border='1px solid #7DA2A9' borderRadius='20px' data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <Text fontSize='20px' fontWeight='bold'>Get in Touch</Text>
                <Box display="flex" gap="20px">
                  <FontAwesomeIcon icon={faEnvelope} color='white' fontSize={30}></FontAwesomeIcon><Link>kunwarkartik@gmail.com</Link>
                </Box>
                <Box display="flex" gap="20px">
                  <FontAwesomeIcon icon={faLinkedinIn} color='white' fontSize={30}></FontAwesomeIcon><a href="https://www.linkedin.com/in/kartik-kunwar/" target="_blank">Linked in</a>
                </Box>
                <Box display="flex" gap="20px">
                  <FontAwesomeIcon icon={faGithub} color='white' fontSize={30}></FontAwesomeIcon><a href="https://github.com/kartikkunwar" target="_blank">GitHub</a>
                </Box>
                <Box display='flex' gap="20px">
                  <FontAwesomeIcon icon={faPhone} color='white' fontSize={30}></FontAwesomeIcon><Text >+91 7060950662</Text>
                </Box>
            </Box>
            <Box width={{base:"100%",md:"60%", lg:"40%"}} margin="auto" border='1px solid #7DA2A9' borderRadius='20px' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
              <StyledContactForm >
                  <form ref={form} onSubmit={sendEmail}>
                      <label>Name</label>
                      <input type="text" name="user_name" />
                      <label>Email</label>
                      <input type="email" name="user_email" />
                      <label>Message</label>
                      <textarea name="message" className="msg" />
                      <input type="submit" value="Send" />
                  </form>
              </StyledContactForm>
            </Box>
        </Box>
    </Box>
    
    )
}

const StyledContactForm = styled.div`
  width:100%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    // border:1px solid white;
    padding:20px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      color:white;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;