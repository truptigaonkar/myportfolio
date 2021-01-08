import React from 'react'
import { styled } from '@glitz/react';
import { H2, P, Ul } from '../Reused/Generic';
import { pseudo } from '@glitz/core';
import aboutImage from '../images/image1.jpg'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'

const Navbar = () => {
    return (
        <>
            <Header>
                <Logo><LinkA href="home">Logo</LinkA></Logo>
                <Ulnew>
                    <Li><LinkA href="#home">Home</LinkA></Li>
                    <Li><LinkA href="#about">About</LinkA></Li>
                    <Li><LinkA href="#services">Services</LinkA></Li>
                    <Li><LinkA href="#portfolio">Portfolio</LinkA></Li>
                    <Li><LinkA href="#team">Team</LinkA></Li>
                    <Li><LinkA href="#contact">Contact</LinkA></Li>
                </Ulnew>
            </Header>
            <Section id="home">
                <Slide1 src={image1} alt="image1" />
                <Slide2 src={image2} alt="image2" />
                <Slide3 src={image3} alt="image3" />
                <Slide4 src={image4} alt="image4" />
                <H2new>Responsive website design</H2new>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</P>
                <LinkA href="about">Read More</LinkA>
            </Section>
            <Section id="about" style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                    <H2new>About</H2new>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</P>
                </div>
                <img src={aboutImage} alt="aboutimage" className="aboutimage" width="300px" />
            </Section>
            <Section id="services">
                <H2new>Our Services</H2new>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</P>
            </Section>
            <Section id="portfolio">
                <H2new>Portfolio</H2new>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</P>
            </Section>
            <Section id="team">
                <H2new>Our Team</H2new>
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
    backgroundColor: '#205aff',
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
    padding: {
        x: '10px',
        y: '5px',
    },
    color: '#fff',
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
        color: '#205aff',
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

const Slide1 = styled.img({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    animationName: {
        '0%':  {opacity:0.4},
        '25%':  {opacity:0},
        '50%':  {opacity:0},
        '75%':  {opacity:0},
        '100%': {opacity:0.4} 
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
})

const Slide2 = styled.img({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    animationName: {
        '0%':  {opacity:0},
        '25%':  {opacity:0.4},
        '50%':  {opacity:0},
        '75%':  {opacity:0},
        '100%': {opacity:0.4} 
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
})

const Slide3 = styled.img({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    animationName: {
        '0%':  {opacity:0},
        '25%':  {opacity:0},
        '50%':  {opacity:0.4},
        '75%':  {opacity:0},
        '100%': {opacity:0} 
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
})

const Slide4 = styled.img({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    animationName: {
        '0%':  {opacity:0},
        '25%':  {opacity:0},
        '50%':  {opacity:0},
        '75%':  {opacity:0.4},
        '100%': {opacity:0} 
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
})