import BackgroundImg from "../assets/bg.jpg";
import styled from "styled-components";
import OnlineOrder from "../assets/onilne-order.jpg";
import DiningTable from "../assets/dinning-table.jpg";
import LiveEvent from "../assets/live-event.png";
import DinningTabelBooking from "../assets/dinningtable-booking.jpg";
import SocialPost from "../assets/social.jpg";
import OpeningRes from "../assets/opening.jpg";
import SpecialItems from "../assets/special.jpg";


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
  gap: 20px;
  margin-left: 50px;
  margin-left: 20px;
  text-align: center;
  border: 1px solid lightgrey;

  &:hover {
    box-shadow: 0 0 10px lightgrey;
    transform: scale(1.04);
    transition: all 0.5s ease-in-out;
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
// styling for the colection parts of the zomato
const MakeCollection = styled.div`
display:flex;
flex-direction:column;
height:500px;
`;
const CollectionHead = styled.h4`
  font-size: 45px;
  font-weight: 100;
  margin-left: 6%;
`;
const CollectionPara = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin-left: 6%;
  color: grey;
`;

const CollectionGridDiv = styled.div`
  display: grid;
  cursor: pointer;
  gap: 20px;
  margin: 20px 10px 0 80px;
  grid-template-columns: repeat(5, 1fr);
`;

const CollectionDiv = styled.div`
  height: 340px;
  width: 280px;
  margin-top: 30px;
  border-radius: 6px;

  &:hover {
    transform: scale(1.03);
    transition: all 0.6s ease-in-out;
    box-shadow: 0 0 10px grey;
  }
`;

const CollectionImgHead = styled.h5`
  font-size: 19px;
  bottom: 0;
  color: whitesmoke;
  margin-top: 100%;
  margin-left: 6px;
`;
const CollectionImgPara = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-left: 6px;
  color: white;
`;

//Styling for the adding places

const HeadAdd = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  flex-direction: column;
`;

const HeadAddTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 100;
  margin-left: 6%;
`;
const HeadAddGrid = styled.div`
  display: grid;
  cursor: pointer;
  gap: 10px;
  margin: 20px 10px 0 80px;
  grid-template-columns: repeat(3, 1fr);
`;
const HeadGridItems = styled.div`
  height: 80px;
  width:350px;
  // background:green;
  border-radius: 9px;
  border: 1px solid lightgrey;
  box-shadow: 0 0 6px lightgrey;

  &:hover{
  transform:scale(1.02);
  transition:all 0.6s ease-in-out;
  box-shadow:0px 2px lightgrey;}
`;

const HeadAddSub = styled.h4`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: 200;
`;

const HeadAddPara = styled.p`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: 100;
  color: grey;
`;

const Investor= ()=>{
    return(
    <>
    
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

      {/* Making the collection part  */}

      <MakeCollection>
        <CollectionHead>Collections</CollectionHead>
        <CollectionPara>
          Explore the listed of top restaurants,cafe-pubs and bars in your
          loaclity
        </CollectionPara>
        <CollectionGridDiv>
          <CollectionDiv
            style={{
              backgroundImage: `url(${DinningTabelBooking})`,
              backgroundRepeat: "none",
              backgroundPosition: "center",
              backgroundSize: "cover",
              // opacity:"1",
            }}
          >
            <CollectionImgHead>Top trending spots</CollectionImgHead>
            <CollectionImgPara>29 Places ⇋</CollectionImgPara>
          </CollectionDiv>
          <CollectionDiv
            style={{
              backgroundImage: `url(${SocialPost})`,
              backgroundRepeat: "none",
              backgroundPosition: "center",
              backgroundSize: "cover",
              // opacity:"1",
            }}
          >
            <CollectionImgHead>Best Insta Worthy-places</CollectionImgHead>
            <CollectionImgPara>51 Places ⇋</CollectionImgPara>
          </CollectionDiv>
          <CollectionDiv
            style={{
              backgroundImage: `url(${OpeningRes})`,
              backgroundRepeat: "none",
              backgroundPosition: "center",
              backgroundSize: "cover",
              // opacity:"1",
            }}
          >
            <CollectionImgHead>New opened places</CollectionImgHead>
            <CollectionImgPara>67 Places ⇋</CollectionImgPara>
          </CollectionDiv>
          <CollectionDiv
            style={{
              backgroundImage: `url(${SpecialItems})`,
              backgroundRepeat: "none",
              backgroundPosition: "center",
              backgroundSize: "cover",
              // opacity:"1",
            }}
          >
            <CollectionImgHead>Iftar Specials</CollectionImgHead>
            <CollectionImgPara>14 Places ⇋</CollectionImgPara>
          </CollectionDiv>
        </CollectionGridDiv>
      </MakeCollection>

      {/* Adding the Places */}

      <HeadAdd>
        <HeadAddTitle>
          Popular loaclities in and around your locality
        </HeadAddTitle>
        <HeadAddGrid>
          <HeadGridItems>
            <HeadAddSub>Connaught places</HeadAddSub>
            <HeadAddPara>304 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub>Sector 29</HeadAddSub>
            <HeadAddPara>154 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub>Sector 18,Noida</HeadAddSub>
            <HeadAddPara>246 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub>Rajouri Garden</HeadAddSub>
            <HeadAddPara>462 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub>Saket</HeadAddSub>
            <HeadAddPara>385 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub>Dlf Cyber City</HeadAddSub>
            <HeadAddPara>159 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub>Connaught places</HeadAddSub>
            <HeadAddPara>304 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub>Golf Course Road</HeadAddSub>
            <HeadAddPara>167 Places</HeadAddPara>
          </HeadGridItems>
          <HeadGridItems>
            <HeadAddSub style={{textAlign:"center",marginTop:"25px"}}>See More ↆ</HeadAddSub>
          </HeadGridItems>
        </HeadAddGrid>
      </HeadAdd>
      </>);
}

export default Investor;