import { graphql, useStaticQuery, Link } from "gatsby"
import React from 'react';
import FooterStyles from "../styles/FooterStyles";

const Footer = () => {


  return (
    <FooterStyles>
        
        <section className="footer-section">


          <div className="footer-container">
          {/* <div className="h2">COCO & ADAM</div> */}
          <div className="h2 title">COCO & ADAM'S WEDDING HOTEL ROOM BLOCK LANDING PAGE</div>
          {/* <div className="h2 title">COCO & ADAM'S WEDDING 
            <br></br>
            HOTEL ROOM BLOCK
            <br></br>
            LANDING PAGE
          </div> */}
    
            <div className="footer-contact">
     
     
            <div className="address">
            <div className="title">LIVE AQUA SAN MIGUEL</div>
                <Link to="https://maps.app.goo.gl/SPewu8qcqWfCZGUc7" target="_blank">
                  <p className="underline">Calzada de la Presa No. 85, Zona Centro, 37700</p>
                  <p>San Miguel de Allende, Guanajuato, Mexico</p>
                </Link> 

            </div>
            <a className="contact-link"href="mailto:reservacionesaqsm@posadas.com">reservacionesaqsm@posadas.com</a>
            <a className="contact-link"href="tel:+524151502300">+52 415 150 2300</a>
            <a className="contact-link"href="https://www.liveaqua.com/en/hotels-resorts/live-aqua-urban-resort-san-miguel-de-allende" target="_blank">Live Aqua Website</a>


            </div>
            <div className="team">
                <div className="title">Quick Links</div>

           
                <div className="team-items-container">
                  <div className="team-item">
                      <a href="https://adamandcoco.com/" target="_blank">Wedding Website</a>
                  ADAMANDCOCO.COM
                  </div>
          
                  {/* <div className="team-item">
                      <a href="https://www.liveaqua.com/en/hotels-resorts/live-aqua-urban-resort-san-miguel-de-allende" target="_blank">Live Aqua Website</a>
                    HOTEL WEBSITE
                    </div> */}

                    {/* <div className="team-item">
                      <a href="https://www.woodpartners.com/property-management/">Wood Partners</a>
                      Property Management 
                    </div> */}
                  </div>

                  </div>
                  </div>

                 <div className="copyright">
                    <svg fill="#F7F6F6" fillRule="evenodd" role="img" alt="Equal Housing Logo" aria-labelledby="svgeho" focusable="false" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1em" height=".884em" viewBox="0 0 15.2 10.72">
                        <title id="svgeho">Equal housing opportunity</title>
                        <defs><style>.cls-1</style></defs>
                        <path class="cls-1" d="M7.54,0,0,3.72V5.46H.84V10.7H14.19V5.46h1V3.72Zm5,9.12H2.48V4.34l5.06-2.6,5,2.6Z"></path>
                        <polygon class="cls-1" points="9.85 6.02 5.18 6.02 5.18 4.34 9.85 4.34 9.85 6.02 9.85 6.02"></polygon>
                        <polygon class="cls-1" points="9.85 8.44 5.18 8.44 5.18 6.76 9.85 6.76 9.85 8.44 9.85 8.44"></polygon>
                    </svg>

                    <span className="copyright-text"> © {new Date().getFullYear()}. All rights reserved.</span>
                  </div>
                {/* <div className="team-item">
                    <a href="https://reylenn.com/reylenn-properties">Reylenn Properties</a>
                  | Developer
                </div>
        
                <div className="team-item">
                    <a href="https://reylenn.com/reylenn-construction">Reylenn Construction</a>
                  | General Contractor
                  </div>

                  <div className="team-item">
                    <a href="https://reylenn.com/reylenn-properties">Wood Residential</a>
                  | Property Management 
                  </div> */}
          
        </section>

    </FooterStyles>  
    )
}; 

export default Footer;

