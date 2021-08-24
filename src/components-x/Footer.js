import React from 'react'
import Img from "../imgs/footer-img.png";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: var(--darkRed);
    display: flex;
    padding: 20px;
    color: var(--white);
`
const MobWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const DesktopWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const Top = styled.div`

`
const Bottom = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
`
const Left = styled.div`
    display: flex;
    align-items: center;
`
const Right = styled.div`
 
`
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: underline;
`
const Item = styled.div`
    padding-right: 13px;
`

export default function Footer({ isMobile, footerRef}) {
    return (
        <Wrapper ref={footerRef}>
            {isMobile ?
            <MobWrapper>
                <Top>
                     <List>
                        <Item>Terms & Conditions</Item>
                        <Item>Privacy Policy</Item>
                        <Item>Cookie Policy</Item>
                    </List>
                </Top>
                <Bottom>
                    <div style={{paddingRight: 20}}>Copyright © 2021 Angel Pharma</div>
                    <img src={Img} alt="" />
                </Bottom>
            </MobWrapper>
            :
            <DesktopWrapper>
                <Left>
                    <div style={{paddingRight: 20}}>Copyright © 2021 Angel Pharma</div>
                    <img src={Img} alt="" />
                
                </Left>
                <Right>
                    <List>
                        <Item>Terms & Conditions</Item>
                        <Item>Privacy Policy</Item>
                        <Item>Cookie Policy</Item>
                    </List>
                </Right>
            </DesktopWrapper>
            }

            
        </Wrapper>
    )
}
