import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "../assets/bg.jpg";
import OnlineOrder from "../assets/onilne-order.jpg";
import DiningTable from "../assets/dinning-table.jpg";
import LiveEvent from "../assets/live-event.png";

const Main = styled.div`
  background: transparent;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index:1;
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

// Home Part styling
const HomePage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
`;
const TitleH1 = styled.h1`
  font-size: 3.9rem;
  font-style: italic;
  font-weight: bold;
  color: white;
  text-align: center;
  font-family: sans-serif;
`;
const TitlePara = styled.p`
  color: white;
  font-size: 2rem;
`;

const HomeLink = styled.button`
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border: none;
  outline: none;
  &:hover {
    background-position: right center;
  }
`;

//Stylings for visitng pages

const PageGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  cursor: pointer;
`;

const GridItems = styled.div`
  border-radius: 10px;
  height: 220px;
  background: whitesmoke;
  width: 390px;
  gap:20px;
  margin-left:50px;
  margin-left: 20px;
  text-align: center;
  border: 1px solid lightgrey;


  &:hover {
    box-shadow: 0 0 10px lightgrey;
    transform: scale(1.04);
    transition:all 0.5s ease-in-out;
  }
`;

const GridHead = styled.h3`
  font-size: 18px;
  font-family: cambria;
  margin-top: 5px;
  margin-left: -250px;
  font-weight: 200;
`;

const GridPara = styled.p`
  margin-top: 2px;
  margin-left: -210px;
  font-weight: 100;
  font-family: cambria;
  padding: 0px 0px 0 100px;
  font-size: 0.9rem;
`;
const GridImg = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 150px;
  border-bottom: 2px solid lightgrey;
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
              <StyledLink to="/investor">Investor Relations</StyledLink>
              <StyledLink to="#">Restaurant Section</StyledLink>
              <StyledLink to="#">About</StyledLink>
              <StyledLink to="#">Contact-Info</StyledLink>
            </NavMenu>
          </HeadNav>
        </MainHeader>
      </Main>

      {/* Home Page Part */}

      <HomePage
        style={{
          backgroundImage: `URL(${BackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <TitleH1>Zomato</TitleH1>
        <TitlePara>Discover Best Food & Drinks Everywhere</TitlePara>

        <HomeLink to="/contact">Contact us </HomeLink>
      </HomePage>

      {/* visiting pages designes */}
      <PageGrid>
        <GridItems>
          <GridImg src={OnlineOrder} alt="Order Online" />
          <GridHead>Order Online</GridHead>
          <GridPara>Stay home and order to your doorsteps</GridPara>
        </GridItems>
        <GridItems>
          <GridImg src={DiningTable} alt="Order Online" />
          <GridHead>Order Online</GridHead>
          <GridPara>Stay home and order to your doorsteps</GridPara>
        </GridItems>
        <GridItems>
          <GridImg src={LiveEvent} alt="Order Online" />
          <GridHead>Order Online</GridHead>
          <GridPara>Stay home and order to your doorsteps</GridPara>
        </GridItems>
      </PageGrid>
    </>
  );
};

export default Navbar;
