import React, { useRef, useState } from 'react'
import Navbar from '../components-x/Navbar'
import Header from '../components-x/Header'
import BodyDesktop from '../components-x/BodyDesktop'
import Body from '../components-x/Body'
import Footer from '../components-x/Footer'

import { useWindowDimensions } from '../utils/useWindow'
import Fade from 'react-reveal/Fade';
// import { useSelector, useDispatch } from 'react-redux'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import styled from 'styled-components';

import Golfer from '../imgs/golfer.png'


const Wrapper = styled.div`
    // background-image:${props => props.isMobile ? 'url(' + Golfer + ')' : 'none'}; 
`

export default function HomeScreen() {
    const { width } = useWindowDimensions();
    // const { fetching, success, error } = useSelector(store => store.apiReducer)
    // const dispatch = useDispatch()
    const [ scrollYPostionAtTop, setScrollYPostionAtTop ] = useState(true);


    //refs for smooth scroll
    const headerRef= useRef()
    const heatTherapyRef= useRef()
    const footerRef= useRef()

    //smooth scroll function
    function scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    //scroll position
    useScrollPosition(({ prevPos, currPos }) => {
        if(currPos.y < 0) setScrollYPostionAtTop(false)
        else setScrollYPostionAtTop(true)
    })
    const isMobile = width < 768;

    return (
        <Wrapper isMobile={isMobile}>
            <Navbar width={width} footerRef={footerRef} headerRef={headerRef} heatTherapyRef={heatTherapyRef} scroll={scroll} scrollYPostionAtTop={scrollYPostionAtTop}/>
            <Fade>  
                <Header isMobile={isMobile} headerRef={headerRef}/>
                {isMobile ? <Body heatTherapyRef={heatTherapyRef}/> : <BodyDesktop heatTherapyRef={heatTherapyRef}/>}
                <Footer isMobile={isMobile} footerRef={footerRef}/>  
             </Fade>
        </Wrapper>
    )
}
