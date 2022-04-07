import styled from 'styled-components'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { createGlobalStyle } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { BrowserView, MobileView } from 'react-device-detect';


const GlobalStyle = createGlobalStyle`
  .br-20{
      border-radius: 20px;
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
  /* cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto; */
`
const Container = styled.div`
  display: flex;
  padding-top: 4em;
  flex-direction: row;
  align-items: center;
  height: 80vh;
  width: 70%;
  font-size: 14px;
  margin: auto;
`
const ImageContainer = styled.div`
  width: 50%;  
  // height: 100%;
  text-align: right;
  padding-right: 5em;
`
const TextContainer = styled.div`
  display: flex;
  width: 50%;

`
const MobileTextContainer = styled.div`
  display: flex;
  width: 100%;

`
const Text = styled.h1`
  font-weight: 400;
`

export default function Home() {
  const [width,setWidth] = useState(null)
  useEffect(()=>{
    setWidth(window.innerWidth)
  },[])
  const happyPress = useKeyPress(40);
  return (
    <div>
      <Head>
        <title>Shivansh Mehendiratta</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <CurrentPage>About</CurrentPage>
      {/* <Title>My page</Title> */}
      
    {width>850? <>
        <Navbar variant='#fff' />
        <Container>
          <ImageContainer>
            <img
              src="https://res.cloudinary.com/instacloneapp/image/upload/v1630155979/shivansh.xyz/w_dvufyz.jpg"
              height={300}
              width={300}
              style={{ objectFit: 'cover', objectPosition: ' 0px -10px' }}
              className="br-20"
              alt="Shivansh"
            />
          </ImageContainer>
          <TextContainer>
            <Text>
              👋 Hi, my name is Shivansh Mehendiratta and I'm a final-year undergrad at CBS studying computer science. I'm excited about technology, finance, and startups and  I care about creating things that can make an impact at scale.
              <br />
              <br />
              I'm the co-founder at <a href="https://apps.apple.com/US/app/id1576564074?mt=8">Fitteo</a>, a marketplace for workouts, making quality fitness education accessible to the masses. Previously, I led product at <a href="https://scrut.io">Scrut</a> (formerly Gomigo) helping companies mantain a strong security posture and get ISO 27001, SOC2, GDPR, HIPAA compliant. During my sophomore year, I interned as an analyst at Lumis Partners; did market research at TUZ Ventures; software engineering at Redesyn; and operations research at Ambit Capital. My other interests include practising yoga, long-distance running, and being brutal at the table-tennis table.
              <br />
              <br />
              Feel free to reach out at <a href="mailto:shivansh.19521@sscbs.du.ac.in">shivansh.19521@sscbs.du.ac.in</a>! Or, schedule a quick chat <a href="https://calendly.com/shivansh-mehendiratta/30min">here</a>.

            </Text>
          </TextContainer>
        </Container>
      </>:<>
          <MobileTextContainer>
          <div style={{display:'flex',width:'80%',margin:'70px auto'}}>
            <Text>
              👋 Hi, my name is Shivansh Mehendiratta and I'm a final-year undergrad at CBS studying computer science. I'm excited about technology, fitness, and startups and  I care about creating things that can make an impact at scale.
              <br />
              <br />
              I'm the co-founder at <a href="https://apps.apple.com/US/app/id1576564074?mt=8">Fitteo</a>, a marketplace for workouts, making quality fitness education accessible to the masses. Previously, I led product at <a href="https://scrut.io">Scrut</a> (formerly Gomigo) helping companies mantain a strong security posture and get ISO 27001, SOC2, GDPR, HIPAA compliant. During my sophomore year, I interned as an analyst at Lumis Partners; did market research at TUZ Ventures; software engineering at Redesyn; and operations research at Ambit Capital. My other interests include practising yoga, long-distance running, and being brutal at the table-tennis table.
              <br />
              <br />
              Feel free to reach out at <a href="mailto:shivansh.19521@sscbs.du.ac.in">shivansh.19521@sscbs.du.ac.in</a>! Or, schedule a quick chat <a href="https://calendly.com/shivansh-mehendiratta/30min">here</a>.
            </Text>
          </div>
          </MobileTextContainer>
      </>}
    </div>
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