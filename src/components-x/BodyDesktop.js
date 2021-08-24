import React, { useState } from 'react'
import woman from '../imgs/woman.png'
import heatWave from '../imgs/heat-wave.png'
import BrandIcon from "../svgs/s.svg";
import BrandIcon2 from "../svgs/s2.svg";
import styled from 'styled-components';


const Wrapper = styled.div`
    padding: 20px;
`
const InnerWrapper = styled.div`
    padding: 20px;
    position: relative;
    min-height: 800px;
    display: flex;
    justify-content: center;
`
const ImgCont = styled.div`
    position: absolute;
    width: 800px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // z-index: -1
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
    margin: 'auto',
    width: '600px'
}
const imgHeatwaveStyle = {
    display: 'block',
    margin: 'auto',
    position: 'absolute',
    width: '1000px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-1'
}
const Box = styled.div`
    padding: 10px;
    margin:${props => props.margin && props.margin}; 
    background: var(--lightGrey);
    position: relative;
    box-shadow: 4px 4px 10px rgba(84, 15, 22, 0.2);
    border-radius: 2px;
    max-width: 300px;
`
const Title = styled.div`
    font-size: 20px;
    color: var(--red);
    padding:  10px 0 10px 0;
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
    top:${props => props.leftCol ? '-14px' : '-10px'}; 
    right:${props => props.leftCol && '-124px'};
    left:${props => !props.leftCol && '0px'};
    transform: translateX(-50%);
    z-index: 1;
`
const SvgCont2 = styled.div`
    position: absolute;
    top:${props => props.top}; 
    right:${props => props.right}; 
    transform: translate(-50%, -50%);
    z-index: 1;
    &:hover {
        cursor: pointer;
    }
`

const Col = styled.div`
    ${props => props.leftCol ? `margin-right: ${props.amount}px;` : `margin-left: ${props.amount}px;`}
    min-width: 320px;
`
const amount = 120;

export default function Body({ isMobile, heatTherapyRef }) {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);

    let points = [{ top: '10%', right: '43%' }, { top: '43%', right: '53%' }, { top: '60%', right: '38%' }, { top: '93%', right: '38%' }]
    return (
        <Wrapper ref={heatTherapyRef}>
            <Header>How ThermaCare®works?</Header>
            <InnerWrapper>
                <ImgCont className="heat-wave">
                        <div style={imgWomanStyle}>
                        <SvgCont2 top={points[0].top} right={points[0].right} onClick={ () => setBox3(!box3) }>
                            <img src={BrandIcon2} alt="React Logo" />
                        </SvgCont2>
                        <SvgCont2 top={points[1].top} right={points[1].right} onClick={ () => setBox2(!box2) }>
                            <img src={BrandIcon2} alt="React Logo" />
                        </SvgCont2>
                        <SvgCont2 top={points[2].top} right={points[2].right} onClick={ () => setBox4(!box4) }>
                            <img src={BrandIcon2} alt="React Logo" />
                        </SvgCont2>
                        <SvgCont2 top={points[3].top} right={points[3].right} onClick={ () => { setBox1(!box1); setBox5(!box5); } }>
                            <img src={BrandIcon2} alt="React Logo" />
                        </SvgCont2>
                            <img src={woman} alt="" style={imgWomanStyle}/>
                        </div>
                        <img src={heatWave} alt="" style={imgHeatwaveStyle}/>
                </ImgCont>
                <Col amount={amount} leftCol={true}>
                    <Box leftCol={true} margin={"180px 0 0 0"} style={{display: box1 ? 'block': 'none'}}>
                        <SvgCont leftCol={true}>
                            <img src={BrandIcon} alt="React Logo" />
                        </SvgCont>
                        <Title>
                        Long lasting heat
                        </Title>
                        <P>ThermAid® is clinically proven to provide therapeutic muscle penetrating heat and up to 16 hours pain relief. That’s up to 8 hours while you wear the heat wrap plus an additional 8 hours of pain relief after you take it off.</P>
                    </Box>
                    <Box leftCol={true} margin={"50px 0 0 0"} style={{display: box2 ? 'block': 'none'}}>
                        <SvgCont leftCol={true}>
                            <img src={BrandIcon} alt="React Logo" />
                        </SvgCont>
                        <Title>
                        ThermAid® Patented Heat Cell Technology:
                        </Title>
                        <P>As soon as the pouch is opened, oxygen penetrates into the heat cells. The chemical reaction is triggered and commences producing heat. Constant temperature of approximately 40°C is generated, thanks to the continuous oxygen flow controlled by the membranes.</P>
                    </Box>
                </Col>
                <Col amount={amount} leftCol={false}>
                    <Box leftCol={true} margin={"97px 0 0 0"} style={{display: box3 ? 'block': 'none'}}>
                            <SvgCont leftCol={false}>
                                <img src={BrandIcon} alt="React Logo" />
                            </SvgCont>
                            <Title>
                        Pain relieving
                        </Title>
                        <P>ThermAid® Heat stimulates thermoreceptors thus blocking pain signals to the brain.</P>
                        </Box>
                     <Box leftCol={true}  margin={"130px 0 0 0"} style={{display: box4 ? 'block': 'none'}}>
                        <SvgCont leftCol={false}>
                            <img src={BrandIcon} alt="React Logo" />
                        </SvgCont>
                                <Title>
                        Increased blood circulation</Title>
                        <P>The ThermAid® provides constant heat which increases blood flow to tissues, giving analgesic effects which last even after the wrap has been removed. As muscles relax, more oxygen is provided to the damaged tissues, helping to restore aching muscles and joints.</P>
                    </Box>
                     <Box leftCol={true} margin={"100px 0 0 0"} style={{display: box5 ? 'block': 'none'}}>
                        <SvgCont leftCol={false} >
                            <img src={BrandIcon} alt="React Logo" />
                        </SvgCont>
                        <Title>
                            Muscles relaxing
                            </Title>
                            <P>ThermAid® heat wraps helps relax damaged, tight, and sore muscles, improves flexibility.</P>
                    </Box>
                </Col>
           </InnerWrapper>
        </Wrapper>
    )
}
