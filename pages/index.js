import styled from 'styled-components'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import {createGlobalStyle} from "styled-components";
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
  cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto;
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
  <BrowserView>
      <Navbar variant='#fff' />
  <Container>
    <ImageContainer>
    <img
            src="https://res.cloudinary.com/instacloneapp/image/upload/v1622266435/shivansh.xyz/Shivansh_b8fhwp.png"
            height={300}
            width={300}
            style={{objectFit:'cover',objectPosition:' 0px -63px'}}
            className="br-20"
            alt="Shivansh"
            />
    </ImageContainer>
    <TextContainer>
      <Text>
      👋 Hi, my name is Shivansh Mehendiratta and I'm a final-year undergrad at CBS studying computer science. I'm excited about technology, finance, and startups and  I care about creating things that can make an impact at scale. 
        <br/>
        <br/>
      Presently, I’m leading product at Gomigo solving for ~70 million SMEs in the country. Previously, I interned as an analyst at Lumis Partners; did market research at TUZ Ventures; software engineering at Redesyn; and operations research at Ambit Capital. At CBS, I served as the Chapter Head at Collegiate Entrepreneurs Organisation, Delhi University; Core member at Nucleus, the analytics society of the college. My other interests include backpacking, long-distance running, and playing table-tennis.
        <br/>
        <br/>
        Feel free to reach out at <a href="mailto:shivansh.19521@sscbs.du.ac.in">shivansh.19521@sscbs.du.ac.in</a>! Or, schedule a quick chat <a href="https://calendly.com/shivansh-mehendiratta/30min">here</a>.

      </Text>
    </TextContainer>
  </Container>
  </BrowserView>
  <MobileView>
      <Container>
    
    <MobileTextContainer>
      <Text>
      👋 Hi, 
      <br/>
      <br/>
      
      You're at the right place with the wrong device :( 
      <br/>
      <br/>
        
        this isn't mobile friendly yet (wanted to get the first version up and running), 
        
      <br/>
      <br/>
        
        hence, would request you to visit this on your laptop/PC. 
      <br/>
      <br/>
      
      Thanks!
      <br/>
      Shivansh
      </Text>
    </MobileTextContainer>
  </Container>
  </MobileView>
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
      router.push('/experience')

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