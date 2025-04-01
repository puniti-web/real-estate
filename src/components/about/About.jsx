import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import logo from "./logo.png"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            <p>Welcome to Spaces! WE are Puniti,Pari,Shivani, the founders and driving force behind this venture. Our journey began with a simple yet profound goal: to empower individuals from all walks of life, from the middle class to the affluent, in their pursuit of the perfect home, all while keeping affordability at the forefront.</p>
            <p>At Spaces, we believe that everyone deserves to find their dream home without breaking the bank. With a keen eye for detail and a passion for real estate, we've made it our mission to bridge the gap between quality and affordability. Our commitment to this principle has garnered us a solid track record of success.</p>
            <p>We understand that finding the right home is not just about bricks and mortar; it's about finding a place where memories are made, where families thrive, and where dreams take flight. That's why we pour our heart and soul into every interaction, ensuring that each client receives personalized attention and guidance every step of the way.</p>
            <p>Whether you're a first-time buyer or a seasoned investor, we're here to make your home-hunting journey a seamless and enjoyable experience. So, welcome to Spaces by Parth Sharma—where your happiness is our top priority. Let's embark on this exciting journey together and find your happy place!</p>
            <p>Happy Homehunting!</p>
            <p>Founders, Spaces</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={logo} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}
export default About
