import React from 'react'
import aboutImg from '../images/aboutImg.jpg'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import { styled } from '@glitz/react'
import { media } from '@glitz/core'

const AboutSection = () => {
    return (
        <div>
            <ImgSidebar>
                <AboutImg src={aboutImg} alt="" />
            </ImgSidebar>
            <AboutContent>
                <div>
                    <H4new><Span>Hello</Span>, I'm</H4new>
                    <H3new>John Doe</H3new>
                    <H4new>I'm a Frontend Developer.</H4new>
                    <Pnew>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, consequuntur odio mollitia illo repellendus consequatur in dolor, eaque tempora possimus, perspiciatis natus soluta doloremque. Asperiores est eaque animi commodi voluptas.</Pnew>
                    <AboutBtn href="#">About Me</AboutBtn>
                </div>
                <SocialIcons>
                    <Li><a href="#"><SocialImages src={facebook} alt="" /></a></Li>
                    <Li><a href="#"><SocialImages src={twitter} alt="" /></a></Li>
                    <Li><a href="#"><SocialImages src={instagram} alt="" /></a></Li>
                </SocialIcons>
            </AboutContent>
        </div>
    )
}

export default AboutSection

const ImgSidebar = styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '380px',
    height: '100%',
})

const AboutImg = styled.img({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    ...media('(max-width: 960px)',{
        display: 'none',
    }),
})

const AboutContent = styled.div({
    position: 'absolute',
    top: 0,
    right: 0,
    width: 'calc(100% - 500px)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: {
        xy: '100px',
    },
    ...media('(max-width: 960px)',{
        padding: {
            xy: '25px',
        },
        width: '100%',
    }),
})

const H4new = styled.h3({
    fontSize: '1.5em',
    color: '#333',
    fontWeight: 300,
})

const Span = styled.span({
    fontSize: '1.3em',
    color: '#00bcd4',
    fontWeight: 700,
})

const H3new = styled.h3({
    fontSize: '3em',
    color: '#333',
    lineHeight: '1em',
})

const Pnew = styled.p({
    fontSize: '1.1em',
    margin: {
        x: 0,
        y: '20px',
    },
    fontWeight: 300,
})

const AboutBtn = styled.a({
    backgroundColor: '#00bcd4',
    color: '#fff',
    padding: {
        x: '30px',
        y: '10px',
    },
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 500,
    letterSpacing: '2px',
    ':hover': {
        backgroundColor: '#fff',
        color: '#00bcd4',
        border:
        {
            xy:
            {
                width: 1,
                style: 'solid',
                color: '#00bcd4'
            }
        },
    },
})

const SocialIcons = styled.ul({
    position: 'absolute',
    left: '100px',
    bottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const Li = styled.li({
    marginRight: '10px',
    listStyle: 'none',
})

const SocialImages = styled.img({
    transform: 'scale(0.5)',
    opacity: 0.7,
    ':hover': {
        opacity: 1
    },
})