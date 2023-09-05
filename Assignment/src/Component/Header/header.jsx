import React, { Component } from 'react'
import './header.css'

export default class  extends Component {
  render() {
    return (
        <>
        <div class="header">
        <div class="margin">
            <div class="padding">
                <div class="mainhead">
                    <div class="logo">REAL MADRID
                         </div>
                         <div class="nav">
                            <ul>
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#team">TEAM</a></li>
                                <li><a href="#gallery">GALLERY</a></li>
                                <li><a href="#test">TESTIMONIALS</a></li>
                                <li><a href="#contact">CONTACT US</a></li>
                            </ul>
                         </div>
                </div>
            </div>
        </div>
      </div>

      <section className="mainsection" id="home">
        <div className="margin">
            <div className="padding">
                <div className="mainhead1">
                    <div className="ground">
                       {/* <h1> WE LOVE THE GAME </h1> */}
                       <h2> WE ARE MADRID</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section11">
    <div class="margin">
        <div class="mainsection1">
            <h1>Get Connected </h1>
            <div class="connect">
                
                <div class="social">
                
                    <div class="icon">
                        <span class="fa-solid fa-phone"></span>
                    <h1>Phone</h1>
                    </div>
                    <div class="icon">
                        <span class="fa-brands fa-facebook-f"></span>
                    <h1>facebook </h1>
                    </div>
                    <div class="icon">
                        <span class="fa-brands fa-twitter"></span>
                    <h1>Twitter</h1>
                    </div>
                    <div class="icon">
                        <span class="fa-brands fa-linkedin-in"></span>
                    <h1>Linkdin</h1>
                    </div>
                </div>
                    <div class="social1">          
                    <div class="icon">
                        <span class="fa-solid fa-envelope"></span>
                        <h1>ab@mail.com</h1>
                    </div>
                    <div class="icon">
                        <span class="fa-brands fa-instagram"></span>
                        <h1>instagram</h1>
                    </div>
                    <div class="icon">
                        <span class="fa-brands fa-yahoo"></span>
                        <h1>yahoo</h1>
                    </div>
                    <div class="icon">
                        <span class="fa-brands fa-google-plus-g"></span>
                    <h1>Google+</h1>
                    </div>
                </div>
                
                <div class="tweet">
                    <h1>Latest Tweets</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum est cumque fugit asperiores nostrum, iure nam reprehenderit delectus modi fuga porro quo optio commodi beatae necessitatibus repudiandae non, sint praesentium.</p>
                </div>
            </div>
                
            </div>
        </div>
        
   </section>

</>
      
        
    )
  }
}
