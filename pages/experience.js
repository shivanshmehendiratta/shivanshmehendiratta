import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import {createGlobalStyle} from "styled-components";
import React, {useState,useEffect} from 'react'
import { data } from '../data/internshipdata';
import { useRouter } from 'next/router'

const GlobalStyle = createGlobalStyle`
  .br-20{
      border-radius: 20px;
  }
  .br-5{
      border-radius: 5px;
  }
  *{
    // font-family: 'Playfair Display', serif;
    font-family: 'Poppins', sans-serif;
    // color: white;
  }
  body{
      // background: black;
  }

`
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const CurrentPage = styled.h1`
  -webkit-transform: rotate(90deg);
  transform: rotate(270deg);
  position: absolute;
  // left: 80px;
  bottom: 0;
  font-size: 5em;
  margin-left: -30px;
  margin-bottom: -110px;
  // text-transform: uppercase;
  text-transform: lowercase;
  color: #c1c1c120;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto;
`
const Container = styled.div`
  display: flex;
  padding-top: 2em;
  flex-direction: row;
  width: 80vw;
  align-items: center;
  height: 80vh;
  margin:auto;
`
const ImageContainer = styled.div`
  // display: flex;
  width: 50%;
  text-align: right;
  padding-right: 5em;
`
const TextContainer = styled.div`
  display: flex;
  width: 50%;

`
const Text = styled.h1`
  font-weight: 400;
`
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
  box-shadow: ${props=>props.state=='active'?"0px 0px 1px rgba(0, 0, 0, 0.25)":""};

`
const Card = styled.div`
  display: flex;
  cursor: default;
  box-shadow: ${props=>props.state==='active'?"0px 0px 4px 2px rgba(0, 141, 221, 0.07)":""};
  border-radius: 10px;
  justify-content: ${props=>props.state==='active'?"flex-start":"flex-end"};
  width: ${props=>props.state==='active'?"100%":"100%"};
  // width: ${props=>props.state==='active'?"20vw":'18vw'};

`
const InnerCard = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  background: ${props=>props.state==='active'?"rgba(208, 235, 255, 0.75)":""};
  :hover{
    background: ${props=>props.state!=='active'?"rgba(208, 235, 255, 0.75)":""};
  }
  border-radius: 10px;
`
const CardImage = styled.div`
  margin: 10px;
  align-items: center;
  display: flex;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
`
const CardText = styled.div`
  padding-left: 20px;
  width: ${props=>props.state==='active'?"19vw":"15vw"};
`
const Role = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: ${props=>props.state==='active'?"#0035F0":""};
`
const Company = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: ${props=>props.state==='active'?"#0035F0":''};
`
const Divider = styled.div`
  width: 80%;
  margin-left: auto;
  height: 1px;
  background: #f1f1f1;
`
const DetailedView = styled.div`
  width: 50vw;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px 2px rgba(0, 141, 221, 0.07);
  border-radius: 10px;
`
const CoverImage = styled.div`
  display: flex;
  background-image: url(${props=>props.src});
  background-size: cover;
  height: 20vh;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`
const AboutRole = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  padding: 15px;
  flex-direction: column;
  margin-top: -20px;
`
const RoleHeading = styled.h1`
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 10px;
`
const RoleDetailsRow = styled.div`
  display: flex;
`
const Durations = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
`
const When = styled.h2`
  font-weight: normal;
  font-size: 12px;
`
const Duration = styled.p`
  display: flex;
  font-size: 9px;
  color: #818181;
`
const Location = styled.h2`
  font-weight: normal;
  font-size: 12px;
`
const AboutCompanyContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 20px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  padding: 15px;
  flex-direction: row;
`
const CompanyLogo = styled.div`
  // display: flex;
`
const AboutCompanyText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
`
const AboutCompanyHeading = styled.h1`
  display: flex;
  font-size: 14px;
  padding-bottom: 0.5em;
`
const AboutCompanyDescription = styled.h2`
  display: flex;
  font-weight: normal;
  font-size: 11px;
  color: #7C7C7C;
`
const BulletPointsContainer = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  margin: auto;
  background: #FFFFFF;
  // box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  padding: 15px;
  // flex-direction: row;
`
const Bullets = styled.div`
  display: flex;
`
const BulletPoints = styled.div`
  display: flex;
  padding-left: 1em;
  height: 100%;
  width: 100%;
  // flex-direction: column;
`
const BulletPoint = styled.p`
  font-size: 11px;
  font-weight: regular;
  color: #7c7c7c;
  padding-left: 1em;
`
export default function Experience() {
  const happyPress = useKeyPress(40);
  
  const onCardClick = (cardNumber) =>{
    let arr = [...active]
    setAll(arr,'inactive')
    arr[cardNumber]='active'
    setActive(arr)
    setActiveInternship(data[cardNumber])
  } 
  
  function setAll(a, v) {
    var i, n = a.length;
    for (i = 0; i < n; ++i) {
      a[i] = v;
    }
  }

  
  var ARR = [];
  
  for(var i = 0; i < data.length; i++) {
    ARR.push('inactive');
  }
  ARR[0] = 'active'
  const [active, setActive] = React.useState(ARR)
  const [activeInternship,setActiveInternship] = React.useState(data[0])
  return (
    <>
  <Head>
    <title>Shivansh Mehendiratta</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet" />   */}
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet" />
  </Head>
  <Navbar variant='#000' />
  <GlobalStyle />
  <CurrentPage>Experience</CurrentPage>
  {/* <Title>My page</Title> */}
  <Container>
    <Cards>
      {data.map((internship,index)=>(<>
      <Card key={internship.serial} onClick={()=>onCardClick(index)} state={active[index]}>
        <InnerCard state={active[index]}>
          <CardImage>
            <img 
              src={internship.logo}
              height='50px'
              width='50px'
              className='br-5'
            />
          </CardImage>
          <CardText state={active[index]}>
            <Role state={active[index]}>
              {internship.role}
            </Role>
            <Company state={active[index]}>
              {internship.company}
            </Company>
          </CardText>
        </InnerCard>
      </Card>
      {index<(data.length-1)?<Divider></Divider>:""}
      </>))}
    </Cards>
    <DetailedView>
      <CoverImage src={activeInternship.coverImage}>
      </CoverImage>
      <AboutRole>
        <RoleHeading>
        {activeInternship.role}
        </RoleHeading>
        <RoleDetailsRow>
          <Durations>
            <When>
              {activeInternship.when}
            </When>
            <Duration>
              {activeInternship.duration}
            </Duration>
          </Durations>
          <Location>
            {activeInternship.location}
          </Location>
        </RoleDetailsRow>
      </AboutRole>
      <br/>
      <AboutCompanyContainer>
        <CompanyLogo>
          <Image
            src={activeInternship.logo}
            height='80px'
            width='80px'
            unoptimized
          />
        </CompanyLogo>
        <AboutCompanyText>
          <AboutCompanyHeading>
            About {activeInternship.company}
          </AboutCompanyHeading>
          <AboutCompanyDescription>
            {activeInternship.about}
          </AboutCompanyDescription>
        </AboutCompanyText>
      </AboutCompanyContainer>
      <br/>
      <BulletPointsContainer>
       
        <BulletPoints>
        <Bullets>
        <svg width="12" height="46" viewBox="0 0 12 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6.5" y1="10" x2="6.5" y2="46" stroke="#DEDEDE"/>
        <ellipse cx="6" cy="5.5" rx="6" ry="5.5" fill="#E8E8E8"/>
        <ellipse cx="6" cy="5.5" rx="6" ry="5.5" fill="#E8E8E8"/>
        <ellipse cx="6" cy="5.5" rx="6" ry="5.5" fill="#E8E8E8"/>
        </svg>


        </Bullets>
          <BulletPoint>
            {activeInternship.bullets[0]}
            <br/>
           
          </BulletPoint>
        </BulletPoints>
        <BulletPoints>
        <Bullets>
        <svg width="12" height="46" viewBox="0 0 12 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6.5" y1="10" x2="6.5" y2="46" stroke="#DEDEDE"/>
        <ellipse cx="6" cy="5.5" rx="6" ry="5.5" fill="#E8E8E8"/>
        <ellipse cx="6" cy="5.5" rx="6" ry="5.5" fill="#E8E8E8"/>
        <ellipse cx="6" cy="5.5" rx="6" ry="5.5" fill="#E8E8E8"/>
        </svg>


        </Bullets>
          <BulletPoint>
            {activeInternship.bullets[0]}
            <br/>
          </BulletPoint>
        </BulletPoints>
      </BulletPointsContainer>

    </DetailedView>
  </Container>
  </>
  )
}

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  const router = useRouter()
  // If pressed key is our target key then set to true
  function downHandler({ keyCode }) {
    if (keyCode === targetKey) {
      // setKeyPressed(true);
      router.push('/projects')

    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ keyCode }) => {
    if (keyCode === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}