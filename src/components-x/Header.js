import React, { useState } from 'react'
import styled from 'styled-components';
import Background from '../imgs/bg-banner.png'
import LogoWhite from '../imgs/logo-white.png'
import Golfer from '../imgs/golfer.png'

const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    padding:${props => props.isMobile ? '120px 10px 0px 50px' : '200px 10px 0px 50px'}; 
    background: var(--darkRed);
    color: var(--white);
    background-image: url(${Background});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    overflow: hidden;
`
   
const LeftCol = styled.div`
    max-width: 450px;
    min-height: 500px;
`
 
const RightCol = styled.div`
    display: flex;
    max-width: 450px;
    min-height: 500px;
`
const HeaderTitle = styled.div`  
    font-size:${props => props.isMobile ? '44px' : '64px'}; 
    font-style: normal;
    font-weight: 300;
    line-height:${props => props.isMobile ? '50px' : '80px'}; 
    letter-spacing: 0em;
    text-align: left;
    padding: 0 0 20px 0;
`
const HeaderText = styled.div`
    font-size:${props => props.isMobile ? '16px' : '20px'}; 
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    min-height: 150px;
`
const TextSlider = styled.div`
    padding: 0 0 50px 0;
    transition: opacity 0.3s;
`
const DotsCont = styled.div`
    padding: 50px 0;

`
const Dot = styled.div`
    margin:5px;
    height: 15px;
    width: 15px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    &:hover {
        box-shadow: 0 3px 10px white;
        cursor: pointer;
    }
`
const DotActive = styled.div`
    margin:5px;
    height: 14px;
    width: 14px;
    border: 1px solid white;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 3px 10px white;
    &:hover {
        box-shadow: none;
        cursor: pointer;
    }
`
const texts = [
   'ThermAid® heat wraps for more targeted pain relief. Clinical trials show that ThermAid® heat wraps are more effective than the maximum daily dosage of either Paracetamol or Ibuprofen for long lasting pain relief.',
   'ThermAid® heat wraps provides therapeutic muscle penetrating heat and long lasting pain relief for up to 16 hours. That’s up to 8 hours while you wear the heat wrap plus an additional 8 hours of pain relief after you remove it.',
   'ThermAid® heat wraps uses Patented Heat Cell Technology for deep penetrating heat.'
]
 

export default function Header({ isMobile , headerRef }) {
    const [ activeText, setActiveText ] = useState(0);
    return (
        <HeaderSection ref={headerRef} isMobile={isMobile}>
                   {/* {isMobile && <img src={Golfer} alt="" style={{ position: 'absolute' }}/>} */}
        <LeftCol isMobile={isMobile}>
            {!isMobile && <img src={LogoWhite} alt=""  style={{ paddingBottom: 20 }}/>}
            <HeaderTitle isMobile={isMobile}>Heat wraps foreffective pain relief</HeaderTitle>
            <TextSlider isMobile={isMobile}>
                <HeaderText isMobile={isMobile}>
                    {texts.length > 0 && texts.filter( (text, i) => i === activeText)}
                </HeaderText>
                <DotsCont>
                    {texts.length > 0 && texts.map( (text, i) => i === activeText ? <DotActive onClick={ () => setActiveText(i) }/> : <Dot onClick={ () => setActiveText(i) } key={i}/> )}
                </DotsCont>
            </TextSlider>
        </LeftCol>
        <RightCol>
        {!isMobile && <img src={Golfer} alt="" />}
        </RightCol>
    </HeaderSection>
    )
}
