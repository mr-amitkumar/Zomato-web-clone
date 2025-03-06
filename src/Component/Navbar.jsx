import { Link } from "react-router-dom";
import styled from "styled-components";


const Main = styled.div`
  background: transparent;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 1;
`;
const MainHeader = styled.nav`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 0.9rem;
  font-weight: normal;
`;
const HeadNav = styled.ul`
  margin-left: 500px;
  color: white;
`;
const NavMenu = styled.li`
  list-style: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0px 20px;
  &:hover {
    color: lightgrey;
    transition: all 0.5s ease;
  }
`;

const Navbar = () => {
  return (
    <>
      <Main>
        <MainHeader>
          <Heading>
            <StyledLink to="#" style={{ marginRight: "30px" }}>
              Get The App
            </StyledLink>
          </Heading>

          <HeadNav>
            <NavMenu>
              <StyledLink to="/">Investor Relations</StyledLink>
              <StyledLink to="/restaurant">Restaurant Section</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/contact">Contact-Info</StyledLink>
            </NavMenu>
          </HeadNav>
        </MainHeader>
      </Main>

    </>
  );
};

export default Navbar;
