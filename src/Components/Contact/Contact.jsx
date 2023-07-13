import React, { useState } from "react";
import NavBarComponent from "../Navbar/NavBarComponent";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";

import ContactBanner from "../../images/contact/contact-banner.jpg";
import "./ContactStyle.css";
import LocationIcon from "../../images/contact/location-pin.png";
import "./ContactStyle.css";
import PhoneIcon from "../../images/contact/telephone.png";
import "./ContactStyle.css";
import EmailIcon from "../../images/contact/email.png";
import "./ContactStyle.css";
import CustomButton from "../Button/CustomButton";
import axios from 'axios'

function Contact() {

  const [name,setName] = useState("")
  const [number,setNumber] = useState("")
  const [email,setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")

  const handleSubmit = async() => {
    var now = new Date();
    /*  var type=$(".type_input").val();
      console.log(type);*/
      // get the current date and time
      var date = now.getDate(); // day of the month (1-31)
      var month = now.getMonth() + 1; // month (0-11, add 1 to get the actual month number)
      var year = now.getFullYear(); // four-digit year
      var hours = now.getHours(); // hours (0-23)
      var minutes = now.getMinutes(); // minutes (0-59)
      var seconds = now.getSeconds(); // seconds (0-59)
      
      // display the date and time
      var d=date + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
      
    let data = {name, number, subject, email,message, from: "Nirmanam relators", website: "https://nirmanamrealtors.com/"}
    let response = await axios.post("https://script.google.com/macros/s/AKfycbx7PxqFbbHSc3W5BFBYl2UoVAl7qihuYpHR2Fy3mA8eoonp50ip3Toyg8WCgOeRuunnDg/exec",{date:d,website:"https://nirmanamrealtors.com/",name:name,number:number,email:email,message:message,from:"Nirmanam relators"})

    if(response.data == 1){
      alert("we have received your message")
    }else{
      alert('error occured')
    }
    console.log(response)
  }

  return (
    <>
      {/* <NavBarComponent /> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0" style={{ height: "50%" }}>
            <img
              className="img-fluid"
              style={{ width: "100%", height: "60vh", objectFit: "cover" }}
              src={ContactBanner}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center align-content-center align-items-center">
          <div className="col-md-7">
            <form action="">
              <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your Name" />
              <br />

              <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your Email" />
              <br />

              <input onChange={(e)=>setNumber(e.target.value)}
                type="number"
                placeholder="Your Mobile Number"
                name="number"
                id=""
              />
              <br />

              <input onChange={(e)=>setSubject(e.target.value)} 
              type="text" placeholder="Subject" />
              <br />

              <textarea onChange={(e)=>setMessage(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>

              <CustomButton handleButtonValue={handleSubmit} >Submit</CustomButton>

            </form>
          </div>

          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img
                  className="img-fluid mb-2 mt-1"
                  style={{ height: "40px", width: "40px" }}
                  src={LocationIcon}
                ></Card.Img>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">
                  Address:
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.8rem" }}>
                  The Shubham Group Of Companies, A34, Okhla Industrial Area
                  Phase-1, Behind Hotel Crown Plaza, New Delhi - 110020
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}

                <Card.Img
                  className="img-fluid mb-2 mt-2"
                  style={{ height: "40px", width: "40px" }}
                  src={PhoneIcon}
                ></Card.Img>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">
                  Phone Number:
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.8rem" }}>
                  +91 8510850101
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}

                <Card.Img
                  className="img-fluid mb-2 mt-2"
                  style={{ height: "40px", width: "40px" }}
                  src={EmailIcon}
                ></Card.Img>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Subtitle className="mb-2 text-muted">
                  Email:
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.8rem" }}>
                  info@tsgcdelhi.com
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
