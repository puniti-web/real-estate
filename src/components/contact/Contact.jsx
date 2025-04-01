import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";
import ChatBot from "react-simple-chatbot";
import {Segment} from "semantic-ui-react";
import {ThemeProvider} from "styled-components";
import avatar from "../images/img.png"

const steps = [
    {
      id: '0',
      message: 'Welcome to Spaces!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'May I know your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'Hello {previousValue}, welcome!',
      trigger: '3',
    },
    {
      id: '3',
      message: 'Please provide your phone number:',
      trigger: 'phone',
    },
    {
      id: 'phone',
      user: true,
      trigger: 'bedroomRequirements',
    },
    {
      id: 'bedroomRequirements',
      message: 'What are your bedroom requirements?',
      trigger: 'bedroomInput',
    },
    {
      id: 'bedroomInput',
      user: true,
      trigger: 'budget',
    },
    {
      id: 'budget',
      message: 'What is your budget?',
      trigger: 'budgetInput',
    },
    {
      id: 'budgetInput',
      user: true,
      trigger: 'city',
    },
    {
      id: 'city',
      options: [
        { value: 'Delhi', label: 'Delhi', trigger: '6' },
        { value: 'Gurgaon', label: 'Gurgaon', trigger: '6' },
        { value: 'Noida', label: 'Noida', trigger: '6' },
        { value: 'Ahmedabad', label: 'Ahmedabad', trigger: '6' },
        { value: 'Chennai', label: 'Chennai', trigger: '6' },
        { value: 'Bengluru', label: 'Bengluru', trigger: '6' },
      ],
    },
    {
      id: '6',
      message: 'Our team will contact you shortly. Have a great day!',
      end: true,
    },
];

const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  botAvatar: avatar,
  floating: true,
};

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img} />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
      <div>
        <Segment floated="right">
        <ThemeProvider theme={theme}>
        <ChatBot 
        steps={steps} 
        headerTitle="May I help you?" 
        {...config} />
        </ThemeProvider>
        </Segment>
      </div>
    </>
  );
};

export default Contact;
