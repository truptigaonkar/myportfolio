import React, { useState } from 'react'
import { styled } from '@glitz/react';
import { Ul } from '../Reused/Generic';
import { media, pseudo } from '@glitz/core';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import TechnologiesSection from './TechnologiesSection';
import { Link as LinkScroll } from "react-scroll";
import {FaTimes, FaBars} from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <Header>
                <Logo><LinkScroll to="home" spy={true} smooth={true} duration={100} onClick={closeMobileMenu}>John Doe</LinkScroll></Logo>
                <Ulnew style={{transform: click ? 'translateX(0)' : ''}}>
                    <Li><LinkScroll activeClass="active" to="home" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem'}}>Home</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="about" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem'}}>About</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="experience" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem'}}>Experience</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="technologies" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem'}}>Technologies</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="assignments" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem'}}>Assignments</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem'}}>Contact</LinkScroll></Li>
                </Ulnew>
                <BurgerMenu onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</BurgerMenu>
            </Header>
            <Hero id="home"><HeroSection /></Hero>
            <Section id="about"><AboutSection /></Section>
            <Section id="experience">
                <Title>
                    <H2>Experience</H2><br />
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Title>
                <ExperienceSection />
            </Section>
            <Section id="technologies">
                <Title>
                    <H2>Technologies</H2><br />
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Title>
                <TechnologiesSection />
            </Section>
            <Section id="assignments">
                <Title>
                    <H2>Assignments</H2><br />
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Title>
            </Section>
            <Section id="contact">
                <Title>
                    <H2>Contact Us</H2><br />
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Title>
            </Section>
            <Copyright>
                <CopyrightP>Copyright ©2021 JOHN DOE. All Rights Reserved.</CopyrightP>
            </Copyright>
        </div>
    )
}

export default Navbar

const Header = styled.header({
    position: 'fixed',
    width: '100%',
    height: '60px',
    padding: {
        x: '100px',
        y: '40px',
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    transitionProperty: '0.5s',
    ...media('(max-width: 991px)',{
        padding: {
            x: '50px',
            y: '20px',
        },
    }),
})

const Logo = styled.div({
    color: '#00bcd4',
    fontSize: '20px',
    textDecoration: 'none',
    letterSpacing: '2px',
    fontWeight: 700,
    cursor: 'pointer',
    padding: {
        x: '10px',
        y: '5px',
    },
})

const Ulnew = styled(Ul, {
    position: 'relative',
    display: 'flex',
    ...media('(max-width: 960px)',{
        position: 'absolute',
        display: 'block',
        top: '60px',
        left: 0,
        height: '100vh',
        backgroundColor: '#242222',
        width: '100%',
        transform: 'translateX(-100%)',
        transitionProperty: 'all 0.3s ease-in-out',
        textAlign: 'center'
    }),
})

const Li = styled.li({
    position: 'relative',
    listStyle: 'none',
    cursor: 'pointer',
    color: '#fff',
    textTransform: 'uppercase',
    padding: {x: '1rem',y: '.5rem',},
    ':hover': {
        color: '#00bcd4',
    },
    ...media('(max-width: 960px)',{
        textAlign: 'center',
        padding: {
            x: '2rem',
            y: '2rem',
        },
        width: '100%',
        ':hover': {
            backgroundColor: '#fff',
            color: '#242424',
            borderRadius: 0,
        },
    }),
})

const Hero = styled.section({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: {
        x: '200px',
        y: '200px',
    },
})

const Section = styled.section({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    ...pseudo(':nth-child(even)',
        {
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#111',
            color: '#fff',
        }),
})

const Title = styled.div({
    width: '100%',
    textAlign: 'center',
    marginTop: '80px',
    ...media('(max-width: 960px)',{
        fontSize: '10px',
        padding: {
            x: '10px',
            y: '10px',
        },
    }),
})

const H2 = styled.h2({
    position: 'relative',
    fontSize: '1.8em',
    fontWeight: 700,
    letterSpacing: '1px',
    color: '#fec503',    
    ':before':{
        content: '""',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        bottom: '-10px',
        width: '60px',
        height: '4px',
        backgroundColor: '#00bcd4',
    }
})

const P = styled.p({
    maxWidth: '700px',
    display: 'inline-block',
})

const Copyright = styled.div({
    color: '#fff',
    backgroundColor: '#111',
    textAlign: 'center',
    padding: {
        x: '10px',
        y: '10px',
    },
})

const CopyrightP = styled.p({
    margin: {
        x: 0,
        y: 0,
    },
    fontSize: '16px',
})

const BurgerMenu = styled.div({
    display: 'none',
    ...media('(max-width: 960px)',{
        color: '#fff',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(-100%, 60%)',
        fontSize: '1.8rem',
        cursor: 'pointer',
    }),
})