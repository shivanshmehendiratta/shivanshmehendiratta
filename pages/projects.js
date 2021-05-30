import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import {createGlobalStyle} from "styled-components";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'


const GlobalStyle = createGlobalStyle`
  .br-20{
      border-radius: 20px;
  }
  #style-1::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    /* border-radius: 10px; */
    background-color: #fafafa;
  }
  
  #style-1::-webkit-scrollbar {
    width: 8px;
    background-color: #fafafa;
  }
  
  #style-1::-webkit-scrollbar-thumb {
    /* border-radius: 10px; */
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background-color: #cccccc;
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
//   padding-top: 8em;
  margin-top: 2%;
  flex-direction: row;
  width: 90%;
//   overflow: scroll;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: auto;
`
const Project = styled.div`
  display: flex;
//   width: 750px;
  flex-direction: column;
  margin-right: 1em;
  width: ${props=>props.width};
`
const ProjectImage = styled.div`
//   width: 40vw;
//   height: 20vh;
// width: 850px;

`
const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
//   max-width: ;
`
const Heading = styled.h1`
  font-weight: 700;
  font-size: 1em;
`
const Description = styled.h3`
  font-weight: 400;
  color: #505F79;
  font-size: 12px;
  width: 600px;
`
const Actions = styled.h3`
    font-weight: 400;
    font-size: 12px;
`

export default function Blog() {
  const happyPress = useKeyPress(40);
  return (
  <div>
  <Head>
    <title>Shivansh Mehendiratta</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet" />
  </Head>
  <Navbar variant='#fff' />
  <GlobalStyle />
  <CurrentPage>projects</CurrentPage>
  {/* <Title>My page</Title> */}
  <Container id="style-1">
    <Project>
        <ProjectImage>
            <img
                src='https://res.cloudinary.com/instacloneapp/image/upload/v1622213341/shivansh.xyz/edgar-project_vgihye.jpg'
                width={600}
                height={400}
            />
        </ProjectImage>
        <ProjectText>
            <Heading>
                MrktDB
            </Heading>
            <Description>
            A platform to analyze past 20-year US SEC EDGAR filings (13D/F/G) of 8000 companies, retrieved from the U.S. Securities and Exchange 
          Commission’s EDGAR database.
            </Description>
            {/* <Actions>
                Learn More ↗
            </Actions> */}
        </ProjectText>
    </Project>
  
    <Project>
        <ProjectImage>
            <img
                src='https://res.cloudinary.com/instacloneapp/image/upload/v1622216555/shivansh.xyz/myst_xnfado.jpg'
                width={600}
                height={400}
            />
        </ProjectImage>
        <ProjectText>
            <Heading>
                myst.club
            </Heading>
            <Description>
                An invite-only social networking platform for college students to discover students to discover students, courses, college clubs, events and more.
            </Description>
            {/* <Actions>
                Learn More ↗
            </Actions> */}
        </ProjectText>
    </Project>
  
  </Container>
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
      router.push('/blog')

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