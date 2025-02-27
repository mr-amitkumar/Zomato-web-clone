import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled. div`
background:black;
`;
const MainHeader = styled.nav`
color:red;
`;
const HeadNav = styled.ul`
font-size:30px`;
const NavMenu = styled.li`
list-style:none;
`;
const StyledLink = styled(Link)`font-weight:bolder;
`;

const Contact= ()=>{
    return(
    <>
   <Main>
    <MainHeader>
        <StyledLink to="#">Get The App</StyledLink>

        <HeadNav>
            <NavMenu>
            <StyledLink to="#">Investor Relations</StyledLink>
            <StyledLink to="#">Restaurant Section</StyledLink>
            <StyledLink to="#">About</StyledLink>
            <StyledLink to="#">Contact-Info</StyledLink>
            
            </NavMenu>
        </HeadNav>
    </MainHeader>
    </Main>
    </>);
}

export default Contact;