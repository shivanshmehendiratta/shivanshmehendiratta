import React, { useState } from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import Link from 'next/link'
import ReactGA from 'react-ga';
import { useRouter } from "next/router";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #fff;
  // background: ${props => props.variant};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const Logo = styled.h1`
  font-weight: 400;
  // color: ${props => props.variant==='#fff'?({ theme }) => theme.colors.greyDark:'#fff'};
  color: ${({ theme }) => theme.colors.greyDark}
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  li:nth-child(2) {
    margin: 0px 20px;
  }
  li:nth-child(4) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Socials = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  cursor: url('https://res.cloudinary.com/instacloneapp/image/upload/c_scale,h_32/v1622269574/shivansh.xyz/pointer_v8dsps.png'), auto;

`;

// const Link = styled.a`
//   color: white;
//   text-decoration: none;

//   :hover {
  //     text-decoration: underline;
  //   }
  // `;
  
  const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  
  @media (min-width: 769px) {
    display: none;
  }
  `;
  
  const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;
  
  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
  `;
  
  const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  
  @media (min-width: 769px) {
    display: none;
  }
  `;
  
  const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  
  li {
    opacity: ${props => (props.open ? 1 : 0)};
    // font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
  
  li:nth-child(2) {
    margin: 50px 0px;
  }
  `;
  const Navbar = ({variant}) => {
    const router = useRouter()
    console.log(router.pathname)
    const ItemLink = styled.a`
      // color: ${props => props.variant==='#fff'?({ theme }) => theme.colors.greyDark:'#fff'};
      color: ${props=> (router.pathname=== props.path ? '#0065FF' : ({ theme }) => theme.colors.greyDark)};
    
    `;
    
    const [toggle, toggleNav] = useState(false);
    const [launchCrisp, setLaunchCrisp] = useState(false);
    React.useEffect(()=>{
      if(launchCrisp===true)
      {window.$crisp = [];
        window.CRISP_WEBSITE_ID = "beab1b2a-5647-4e15-979b-9f48bb88a136";
  (function () {
    var d = document;
    var s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
  window.$crisp.push(["do", "chat:open"]);
}
},[launchCrisp])
React.useEffect(()=>{
  ReactGA.initialize('G-WS5Z0WM77W');
  ReactGA.pageview( window.location.pathname + window.location.search);
},[])
  return (
    <>
      <Nav variant={variant}>
        <Logo variant={variant}>
            Shivansh Mehendiratta
        </Logo>
        <Menu>
          <Item>
            <Link href="/">
            <ItemLink path='/' variant={variant}>
              about
            </ItemLink>
            </Link>
          </Item>
          <Item>
            <Link href="/experience">
            <ItemLink path='/experience' variant={variant}>
            experience
            </ItemLink>
            </Link>
          </Item>
          <Item>
            <Link href="/projects">
            <ItemLink path='/projects' variant={variant}>
            projects
            </ItemLink>
            </Link>
          </Item>
          <Item>
            <Link href="/blog">
            <ItemLink path='/blog' variant={variant}>
            blog
            </ItemLink>
            </Link>
          </Item>
          <Item onClick={()=>setLaunchCrisp(true)}>
            
              contact
            
          </Item>
        </Menu>
        <Socials>
          {/* <Item>
            <ItemLink variant={variant} target="#" href="https://www.instagram.com/igor_dumencic/">
              Instagram
            </ItemLink>
          </Item> */}
          <Item>
            <ItemLink variant={variant} target="#" href="mailto:shivansh.19521@sscbs.du.ac.in">
              Mail
            </ItemLink>
          </Item>
          <Item>
            <ItemLink variant={variant} target="#" href="https://www.linkedin.com/in/shivanshmehendiratta/">
              Linkedin
            </ItemLink>
          </Item>
        </Socials>
        {/* <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon> */}
      </Nav>
      {/* <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Instagram
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Behance
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Github
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay> */}
    </>
  );
};

export default Navbar;


function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}