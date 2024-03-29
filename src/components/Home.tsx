import React, { useState } from 'react'
import { styled } from '@glitz/react';
import { media, pseudo } from '@glitz/core';
// import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import TechnologiesSection from './TechnologiesSection';
import { Link as LinkScroll } from "react-scroll";
import {FaTimes, FaBars} from "react-icons/fa"
import HeroVideoSection from './HeroVideoSection';
import Footer from './FooterSection';
import { ContactSection } from './ContactSection';

const Home = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 60){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div>
            <Header css={color ? { backgroundColor: '#00bcd4', 
             padding: {
                x: '100px',
                y: '25px',
            },
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        }: {backgroundColor: 'transparent', padding: {
            x: '100px',
            y: '25px',
        },}}>
                <Logo><LinkScroll to="home" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{borderBottom: 0}}>Trupti Gaonkar</LinkScroll></Logo>
                <Ulnew style={{transform: click ? 'translateX(0)' : ''}}>
                    <Li><LinkScroll activeClass="active" to="home" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem', textDecoration: 'none',
}}>Home</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="about" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem' , textDecoration: 'none',}}>About</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="experience" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem' , textDecoration: 'none',}}>Experience</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="technologies" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem' , textDecoration: 'none',}}>Technologies</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="assignments" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem' , textDecoration: 'none',}}>Assignments</LinkScroll></Li>
                    <Li><LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={100} onClick={closeMobileMenu} style={{ padding: '1rem 1rem' , textDecoration: 'none',}}>Contact</LinkScroll></Li>
                </Ulnew>
                <BurgerMenu onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</BurgerMenu>
            </Header>
            {/* <Hero id="home"><HeroSection /></Hero> */}
           <div id="home"><HeroVideoSection /></div>
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
                    <H2>Get in touch</H2><br />
                    <P>Send me a message.</P>
                    <ContactSection />
                </Title>
            </Section>
            <Footer />
        </div>
    )
}

export default Home

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
    color: '#fff',
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

const Ulnew = styled.ul({
    position: 'relative',
    display: 'flex',
    marginBottom: 0,
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