import styled from "styled-components";
// import { Link } from "react-router-dom";
import ZomatoSide from "../assets/Zomato-Side.jpg";

const Main =styled.div`
background:#f2f2f2;
height:100vh;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`;

const MainContact = styled.div`
margin-left:10%;
height:500px;
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const MainImage = styled.div`
background:red;
margin-right:0%;
`;
const Image = styled.img`
height:614px;
width:600px;
`;
const ContactHead = styled.h4`
Color:#cf142f;
font-size:2.4rem;

`;
const ContactDet = styled.div`
text-align:center;

`;
const DetFi = styled.div`
margin-top:20px

`;
const DetH3 = styled.h4`
Color:#cf142f;
font-size:1.5rem;
letter-spacing:2px;

`;
const DetP = styled.p`
Color:black;
font-size:1rem;
margin-top:10px;

`;

const Contact = () =>{

    return(
        <>
           <Main>
                <MainContact>
                  <ContactHead> !! Contact Us !!</ContactHead>
                  <ContactDet>
                      <DetFi>
                      <DetH3>📍 Address</DetH3>
                      <DetP>Delhi,Gurgaon,1351 Street</DetP>
                      </DetFi>
                      <DetFi>
                      <DetH3> 📞 Contact</DetH3>
                      <DetP>+00 1234 98765 00</DetP>
                      </DetFi>
                      <DetFi>
                      <DetH3>📧 Email</DetH3>
                      <DetP>zomato@gmail.com</DetP>
                      </DetFi>
                  </ContactDet>
                </MainContact>
                <MainImage>
                  <Image src = {ZomatoSide} alt="ZoamtoSideBanner" />
                </MainImage>
           </Main>
        </>
    );
}

export default Contact;