import React from 'react'
import { styled } from '@glitz/react';
import { H2, P, Ul } from '../Reused/Generic';
import { pseudo } from '@glitz/core';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';

const Navbar = () => {
    return (
        <>
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
                <ExperienceSection />
            </Section>
            <Section id="technologies">
                <H2new>Technologies</H2new>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</P>
            </Section>
            <Section id="assignments">
                <H2new>Assignments</H2new>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</P>
            </Section>
            <Section id="contact">
                <H2new>Contact Us</H2new>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</P>
            </Section>
        </>
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

const H2new = styled(H2, {
    textTransform: 'uppercase',
})