import React from 'react'
import woman from '../imgs/woman.png'
import heatWave from '../imgs/heat-wave.png'
import BrandIcon from "../svgs/s.svg";
import styled from 'styled-components';


const Wrapper = styled.div`
    padding: 20px;
  
`
const ImgCont = styled.div`
    margin: 90px 0;
    position:relative;
    position: 'absolute'
    // display: flex;
    // ${ props => props.mobile ? 'padding: 0px;' : 'padding: 30px;'}
    // width: 100%;
    // justify-content:space-evenly;
    // flex-wrap: wrap;
  
`
const Header = styled.div`
    color: var(--red);
    padding: 40px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;

`
const imgWomanStyle = {
    display: 'block',
    margin: 'auto'
}
const imgHeatwaveStyle = {
    display: 'block',
    margin: 'auto',
    position: 'absolute',
    width: '800px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-1'
}
const Box = styled.div`
    padding: 20px;
    margin: 80px 0;
    background: var(--lightGrey);
    position: relative;
    box-shadow: 4px 4px 10px rgba(84, 15, 22, 0.2);
    border-radius: 2px;
`
const Title = styled.div`
    font-size: 20px;
    color: var(--red);
    padding:  60px 0 10px 0;
    text-align: center;
`
const P = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--darkRed);

`
const SvgCont = styled.div`
    position: absolute;
    top: -62px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`


export default function Body({ isMobile, heatTherapyRef }) {
    return (
        <Wrapper ref={heatTherapyRef}>
            <Header>How ThermaCare®works?</Header>
            <ImgCont className="heat-wave">
                    <img src={woman} alt="" style={imgWomanStyle}/>
                    <img src={heatWave} alt="" style={imgHeatwaveStyle}/>
            </ImgCont>

            <Box>
                <SvgCont leftCol={true}>
                    <img src={BrandIcon} alt="React Logo" />
                </SvgCont>
                <Title>
                Long lasting heat
                </Title>
                <P>ThermAid® is clinically proven to provide therapeutic muscle penetrating heat and up to 16 hours pain relief. That’s up to 8 hours while you wear the heat wrap plus an additional 8 hours of pain relief after you take it off.</P>
            </Box>
            <Box>
                <SvgCont leftCol={true}>
                    <img src={BrandIcon} alt="React Logo" />
                </SvgCont>
                <Title>
                ThermAid® Patented Heat Cell Technology:
                </Title>
                <P>As soon as the pouch is opened, oxygen penetrates into the heat cells. The chemical reaction is triggered and commences producing heat. Constant temperature of approximately 40°C is generated, thanks to the continuous oxygen flow controlled by the membranes.</P>
            </Box>
            <Box>
                <SvgCont leftCol={true}>
                    <img src={BrandIcon} alt="React Logo" />
                </SvgCont>
                <Title>
                Pain relieving
                </Title>
                <P>ThermAid® Heat stimulates thermoreceptors thus blocking pain signals to the brain.</P>
            </Box>
            <Box>
                <SvgCont leftCol={true}>
                    <img src={BrandIcon} alt="React Logo" />
                </SvgCont>
                <Title>
                Increased blood circulation</Title>
                <P>The ThermAid® provides constant heat which increases blood flow to tissues, giving analgesic effects which last even after the wrap has been removed. As muscles relax, more oxygen is provided to the damaged tissues, helping to restore aching muscles and joints.</P>
            </Box>
            <Box>
                 <SvgCont leftCol={true}>
                    <img src={BrandIcon} alt="React Logo" />
                </SvgCont>
                <Title>
                Muscles relaxing
                </Title>
                <P>ThermAid® heat wraps helps relax damaged, tight, and sore muscles, improves flexibility.</P>
            </Box>
        </Wrapper>
    )
}
