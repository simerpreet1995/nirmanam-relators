import React from "react";
import CustomLink from "../Button/CustomLink";
// import './App.css';
import WhyChooseImg from '../../images/homepage/why-choose/whyUs.jpg'

import styled from "styled-components";



const CustomCall = styled.a`
  text-decoration: none;
  background-color: #ec0808;
  color: #fff;
  padding: 0.4rem 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px 7px;
  box-shadow: 5px 7px 8px rgba(0, 0, 0, 0.7);

  &:hover {
    border-radius: 7px 3px;
    opacity: 0.8;
  }
`;

const H4 = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  /* word-spacing: 2px; */
  /* text-align: center; */
`;

function About() {
  return (
    <>
      <section className="about-container padding">
        <div className="container  ">
        <h3 className="main-heading  py-2">About US</h3>
          <div className="row " style={{alignContent: "center", justifyContent: "center",boxShadow: "3px 4px 4px 4px rgba(0,0,0,0.4)", borderRadius: "3px 4px"}}>
       
            <div className="col-md-10 py-5" style={{alignItems: "start", justifyContent:"start"}}>
            
              <H4>
              Welcome to the <span className="fw-bolder">Nirmanam Realtors</span>. We are here with a unique USP: <span className="fw-bolder">Property Trading and Property Exchange</span>. We offer services wherein you can trade or exchange your less useful property with beautiful property customized as per your needs in the lapse of nature or at peaceful, spiritual places in North India like Himachal Pradesh, Uttarakhand and Rajasthan.
              </H4>

              <H4>
              At <span className="fw-bolder">Nirmanam Realtors </span>, Our goal is to simplify the process to provide you with beautiful properties to invest in. We believe every property is valuable and our property options will generate a passive income for you.
              </H4>


              <H4>
              <span className="fw-bolder">The definition of "Trade-in"</span> in real estate refers to granting <span className="fw-bolder">permission to a realtor to list the properties on behalf of the Seller and finding the most profitable and best deals for sale.</span> 
              </H4>


              <H4>
              When it comes to <span className="fw-bolder"> Real Estate Property Trading</span>, We provide the best of beautiful ready-to-move-in options to trade your property to.
              </H4>


              <H4>
              For those interested in <span className="fw-bolder">Real Estate Property Exchange,</span>  we provide beautiful property options for you to explore to exchange your less useful properties with us, increase your investments and can be assisted by experts on strategic property acquisitions. We specialize in finding the best real estate options to buy in exchange for listing/selling any of your property instead of money.
              </H4>


              <H4>
              Explore our website to discover our range of services and resources designed to empower you wisely in real estate capital budgeting. Whether you are a first-time buyer, an urgent seller, a seasoned investor, or a real estate professional, we are here to be your source to provide you best properties to invest in. You just have to contact us and our team will dedicate itself to find you the best property options to trade or exchange your property with.
              </H4>

              
              <H4>
              Contact us today to embark on your real estate journey with <span className="fw-bolder">Nirmanam Realtors:  TRUST & COMMITMENT.</span> 


              </H4>

              {/* <p>
                Our team consists of experienced professionals with in-depth
                knowledge of the real estate industry. We are dedicated to
                delivering personalized solutions tailored to your specific
                requirements. When it comes to Real Estate Property Trading, we
                offer a streamlined and transparent platform where buyers and
                sellers can connect, negotiate, and complete transactions
                seamlessly.
              </p>

              <p>
                For those interested in Real Estate Property Exchange, we
                provide a comprehensive platform where property owners can
                explore opportunities to exchange their assets, maximizing their
                investments and facilitating strategic property acquisitions.
              </p>

              <p>
                Our Real Estate Property Liaising services cater to individuals
                or businesses seeking expert guidance in navigating the
                intricacies of the real estate market at the comfort of their
                home. Whether you need assistance with property research, market
                analysis, or legal and financial considerations, our team is
                here to support you every step of the way. We offer reliable
                real estate verification services to ensure the accuracy and
                authenticity of property information. With our meticulous
                approach and attention to detail, you can have peace of mind
                knowing that your real estate transactions are based on verified
                and trustworthy data.
              </p>

              <p>
                Explore our website to discover our range of services and
                resources designed to empower you in your real estate endeavors.
                Whether you are a first-time buyer, a seasoned investor, or a
                real estate professional, we are here to be your trusted partner
                in achieving your goals. You just have to contact us and our
                team will dedicate itself to cater to all your real estate
                property assistance. Contact us today to embark on your real
                estate journey with TRUST &amp; COMMITMENT.
              </p> */}

              {/* <span style={{fontSize: "0.8rem"}}>Note- Currently we are providing Real Estate Trading services only for properties valued up to 2.5 Cr.</span> */}


              {/* <h3 class="main-heading">Our Mission</h3>
              <h4>
                Our mission is to provide a reliable platform for land trading,
                where buyers and sellers can connect and make informed
                decisions. We strive to simplify the process of buying or
                selling land, eliminating any unnecessary hurdles or
                complexities.
              </h4>

              <div class="mb-5"></div> */}

              {/* <h3 class="main-heading">Why choose Nirmanam Realtors?</h3>
              <ul>
                <li>
                  <span class="fw-bold">Real Estate Trading: </span>Nirmanam
                  Realtors LLP provide the best Real Estate Trading services.
                  Concisely, Nirmanam Realtors LLP serves the interested Sellers
                  willing to buy the most suitable property having high Return
                  on Investment (ROI) and save tax on their capital gains or
                  profit after Sale of the Property.
                </li>

                <li>
                  <span class="fw-bold">Free Property Listings:</span>We offer
                  free listings for landowners who want to showcase their
                  properties to potential buyers. Our platform allows you to
                  upload detailed descriptions, high-quality images, and other
                  essential information to attract interested parties.
                </li>

                <li>
                  <span class="fw-bold">Real Estate Exchange:</span>Nirmanam
                  Realtors LLP provide the best Real Estate Exchange services.
                  Real Estate Exchange refers to the exchange of two properties
                  between two parties with no or minimal consideration in money
                  to match the value of both properties.
                </li>

                <li>
                  <span class="fw-bold">Property Search Filters:</span>Whether
                  you are looking for commercial land, residential plots,
                  agricultural parcels, or any other type of land, our search
                  filters make it easy to find exactly what you are looking for.
                  Narrow down your search based on price, location, size, and
                  more.
                </li>

                <li>
                  <span class="fw-bold">Real Estate Liaising:</span>We verify
                  the credibility of all land sellers on our platform to ensure
                  that buyers can trust the authenticity of the listings. We
                  strive to create a safe and secure environment for all
                  transactions. Our panel of lawyers and liaising team acts in
                  the best interest of our customer and takes care of all the
                  kind of verification through all the concerned adjudicated
                  authorities. That too, at the comfort of your home.
                </li>

                <li>
                  <span class="fw-bold">Quick Customer Care Support:</span>Our
                  dedicated customer support team is available to answer any
                  questions or concerns you may have. We are committed to
                  providing prompt and helpful assistance to make your land
                  trading experience as smooth as possible.
                </li>
              </ul> */}

              {/* <h3 class="main-heading">Contact Us</h3>
              <p>
                If you have any inquiries or need assistance, please don't
                hesitate to reach out to our customer support team. We are here
                to guide you through the land trading process and ensure that
                you have a positive experience with our platform.
              </p>

              <p>
                Thank you for choosing Nirmanam Realtors LLP:. We look forward
                to assisting you in your land buying or selling journey!
              </p> */}

              {/* <div class="read-more">
              <a href="#">Call Now</a>
            </div> */}
            </div>

            {/* <div className="col-md-6 p-0">
            <img className="img-fluid" src={WhyChooseImg} alt="" />
            </div> */}


          </div>
        </div>
      </section>
    </>
  );
}

export default About;
