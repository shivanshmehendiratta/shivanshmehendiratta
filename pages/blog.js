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
  padding-top: 8em;
  flex-direction: column;
  width: 50%;
  margin: auto;
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
const Blog = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1em;
  padding-top: 1em;
  :hover{
      background: #fafafa;
  }
  padding-left: 0.5em;
  padding-right: 0.5em;
`
const Date = styled.h1`
  width: 30%;
  font-size: 1em;
  font-weight: 400;
  color: #777;
`
const Title = styled.h1`
  font-size: 1em;
  font-weight: 400;
  color: #222;
`
const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #f1f1f1;
`
const Count = styled.h1`
    font-size: 1em;
    font-weight: 400;
    color: #222;
    padding-bottom: 1em;
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
  <Navbar variant='#fff' />
  <GlobalStyle />
  <CurrentPage>blog</CurrentPage>
  {/* <Title>My page</Title> */}
  <Container>
    <Count>
        1 post :)
    </Count>

    <Divider></Divider>

    <Blog onClick={()=>window.open("https://www.linkedin.com/pulse/luxurious-commodities-alternative-investment-strategy-mehendiratta/", "_blank")}>
        <Date>
            Februrary 19, 2021
        </Date>
        <Title>
            Luxurious commodities as Alternative Investment Strategy: How the rich make money looking richer?
        </Title>
    </Blog>
    <Divider></Divider>

    {/* <Blog>
        <Date>
            Februrary 19, 2021
        </Date>
        <Title>
            Luxurious commodities as Alternative Investment Strategy: How the rich make money looking richer?
        </Title>
    </Blog>
    <Divider></Divider> */}
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
      router.push('/')

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