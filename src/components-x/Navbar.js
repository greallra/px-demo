import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../imgs/t-logo.png'
import logoWhite from '../imgs/logo-white.png'
import { FaPhoneAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Section, InnerWrapper, PushRight } from '../components/core/styled'
import Fade from 'react-reveal/Fade';
import { colors } from '../utils/constants'

const Row = styled.div`
    display: flex;
    width: 100%;
`
const Left = styled.div`
    display: flex;
   
`
const LogoWrapper = styled.div`

   
`
const Logo = styled.img`
  max-height: 80px;
  padding: 0 0 0 20px;
`
const NavItems = styled.div`  
  display: flex;
  align-items: center;
  color: ${ props => props.scrollYPostionAtTop ? 'white':'var(--red)'};
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
`
const NavItem = styled.div`
  padding: 0 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  
`
const MobWrapper = styled.div`
  display:flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px 0;
`

const BurgerIcon = styled(GiHamburgerMenu)`
   color: var(--darkRed);
  //  padding: 6px;
  //  margin: 6px;
   &:hover {
    background: var(--lightest-grey);
    cursor: pointer;
  }
`
const CloseIcon = styled(IoMdClose)`
  color: var(--white);
  //  border-radius: 15%; 
  //  padding: 6px;
  //  margin: 6px;
   &:hover {
    background: var(--lightest-grey);
    cursor: pointer;
  }
`
const MobNavItems = styled.div`
  display: ${ props => props.mobMenuOpen ? 'block':'none'};
  z-index: 1;
  position: absolute;
  top: 80px;
  width: 100%;
  background: #F2F2F2 !important;
  border: 1px solid var(--lightest-grey);
  opacity: ${ props => props.mobMenuOpen ? 'block':'none'};
  color: ${colors.red};
`
const MobNavItem = styled.div`
  color: #540F16;
  font-size: 16px;
  line-height: 62px;
  font-weight: 900;
  border-bottom: 1px solid #FFFFFF;
  padding: 12px;
  min-width: 120px;
  text-align: center;
  &:hover {
    text-decoration: underline;
    background: var(--superlight-grey);
    cursor: pointer;
  }
`
const MobileCont = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`
const fixedNavStyleTop = {
    position: 'fixed',
    zIndex: 1,
    // top: '45px',
    width: '100%',
    transition: 'top 0.3s linear',
    transition: 'background 0.3s linear',
    // boxShadow: '0px 1px 1px white',
    background: 'transparent',
    height: '80px',
}
const fixedNavStyleMoving = {
    position: 'fixed',
    zIndex: 1,
    top: '0',
    width: '100%',
    transition: 'top 0.3s linear',
    transition: 'background 0.3s linear',
    height: '80px',
    background: 'rgba(242, 242, 242, 0.85)',
    boxShadow: '0px 0px 20px rgba(84, 15, 22, 0.4)'
}


function NavBar({width, footerRef, heatTherapyRef, headerRef, scroll, scrollYPostionAtTop }) {
  const [ mobMenuOpen, setMobMenuOpen ] = useState(false)
  const mobile = width < 500;
  let fixedNavStyle = scrollYPostionAtTop ? fixedNavStyleTop : fixedNavStyleMoving;
  if(mobile && !mobMenuOpen) {
    fixedNavStyle = {...fixedNavStyle,
      background: 'rgba(242, 242, 242, 0.85)',
      boxShadow: '0px 0px 20px rgba(84, 15, 22, 0.4)'}
  }
  useEffect(() => {
   if(mobMenuOpen) {
    return fixedNavStyle = fixedNavStyleMoving;
   }
   fixedNavStyle = fixedNavStyleTop;
  }, [mobMenuOpen])


  return (
    <Section style={fixedNavStyle}>  
        {mobile ? 
        <MobWrapper>
       {/* Mobile  Nav*/}
          <MobileCont>
            <LogoWrapper><Logo src={mobMenuOpen ?  logoWhite : logo} /></LogoWrapper>
            {!mobMenuOpen ? <BurgerIcon onClick={ () => setMobMenuOpen(!mobMenuOpen)}/> : <CloseIcon onClick={ () => setMobMenuOpen(!mobMenuOpen)}/>}
          </MobileCont>
          <MobNavItems mobMenuOpen={mobMenuOpen}>         
            <Fade>
              <MobNavItem onClick={ () => scroll(headerRef) }>Home </MobNavItem> 
              <MobNavItem onClick={ () => scroll(headerRef) }>Products</MobNavItem>
              <MobNavItem onClick={ () => scroll(heatTherapyRef) }>Heat Therapy</MobNavItem>
              {/* <MobNavItem>GALLERY</MobNavItem> */}
              <MobNavItem onClick={ () => scroll(footerRef) }>FAQ</MobNavItem>
            </Fade>   
          </MobNavItems>   
        </MobWrapper>
        :   
        <InnerWrapper>
        {/* Desktop Nav*/}
          <Row>
            <Left>
              <LogoWrapper>{!scrollYPostionAtTop && <Logo src={logo} />}</LogoWrapper>
            </Left>    
            <PushRight>
                {/* <NumberWrapper><PhoneIcon color="var(--white)" size="10px"/><Number><Prefix>+</Prefix> <span>353 12 345 6788</span> </Number></NumberWrapper> */}
                <NavItems scrollYPostionAtTop={scrollYPostionAtTop}>
                  <NavItem onClick={ () => scroll(headerRef) }>Home </NavItem> 
                  <NavItem onClick={ () => scroll(headerRef) }>Products</NavItem>
                  <NavItem onClick={ () => scroll(heatTherapyRef) }>Heat Therapy</NavItem>
                  {/* <NavItem>GALLERY</NavItem><PipeSeparator /> */}
                  <NavItem onClick={ () => scroll(footerRef) }>FAQ</NavItem>
                </NavItems>    
            </PushRight>
          </Row>
        </InnerWrapper>   
        }
    </Section>
  );
}

export default NavBar;




        