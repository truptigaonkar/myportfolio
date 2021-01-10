import React from 'react'
import { styled } from '@glitz/react';
import { Ul } from '../Reused/Generic';
import { pseudo } from '@glitz/core';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import TechnologiesSection from './TechnologiesSection';

const Navbar = () => {
    return (
        <div>
            <Header>
                <Logo><LinkA href="home">John Doe</LinkA></Logo>
                <Ulnew>
                    <Li><LinkA href="#home">Home</LinkA></Li>
                    <Li><LinkA href="#about">About</LinkA></Li>
                    <Li><LinkA href="#experience">Experience</LinkA></Li>
                    <Li><LinkA href="#technologies">Technologies</LinkA></Li>
                    <Li><LinkA href="#assignments">Assignments</LinkA></Li>
                    <Li><LinkA href="#contact">Contact</LinkA></Li>
                </Ulnew>
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
        y: 0,
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111',
    zIndex: 1000,
    opacity: '0.7',
})

const Logo = styled.div({
    backgroundColor: '#00bcd4',
    fontSize: '20px',
    textDecoration: 'none',
    letterSpacing: '2px',
    fontWeight: 700,
    cursor: 'pointer',
})

const Ulnew = styled(Ul, {
    position: 'relative',
    display: 'flex',
})

const Li = styled.li({
    position: 'relative',
    listStyle: 'none',
})

const LinkA = styled.a({
    position: 'relative',
    textTransform: 'uppercase',
    padding: {
        x: '10px',
        y: '5px',
    },
    color: '#fff',
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
        color: '#00bcd4',
    },
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
    padding: {
        x: '200px',
        y: '200px',
    },
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
    marginTop: '-100px',
    marginBottom: '20px',
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