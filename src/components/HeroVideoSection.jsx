import React, {useState} from 'react'
// import video from '../videos/datavideo.mp4'
// import video from '../videos/datavideo1.mp4'
import video from '../videos/datavideo2.mp4'
// import video from '../videos/datavideo3.mp4'
// import video from '../videos/datavideo4.mp4'
import { styled } from '@glitz/react';
import { media } from '@glitz/core';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

const HeroVideoSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => setHover(!hover)
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video}></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Frontend Developer</HeroH1>
                <HeroP>Lorem ipsum dolor sit amet consectetur adipisicing elit.</HeroP>
                <HeroBtnWrappper>
                    <button onMouseEnter={onHover} onMouseLeave={onHover}>Know Me{hover ? <ArrowForward /> : <ArrowRight />}</button>
                </HeroBtnWrappper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroVideoSection

const HeroContainer = styled.div({
    background: '#0c0c0c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: {
        x: '30px',
        y: 0,
    },
    height: '900px',
    position: 'relative',
    zIndex: 1,
    ':before': {
        content: '""',
        position: 'absolute',
        top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    }
})

const HeroBg = styled.div({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
})

const VideoBg = styled.video({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: '#232a34',
    filter: 'brightness(50%)',
})

const HeroContent = styled.div({
    zIndex: 3,
    maxWidth: '1200px',
    position: 'absolute',
    padding: {
        x: '24pxpx',
        y: '8px',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const HeroH1 = styled.h1({
    color: '#fff',
    fontSize: '48px',
    textAlign: 'center',
    ...media('(max-width: 768px)',{
        fontSize: '40px',
    }),
    ...media('(max-width: 480px)',{
        fontSize: '32px',
    }),
})

const HeroP = styled.p({
    marginTop: '24px',
    color: '#fff',
    fontSize: '24px',
    textAlign: 'center',
    maxWidth: '600px',
    ...media('(max-width: 768px)',{
        fontSize: '24px',
    }),
    ...media('(max-width: 480px)',{
        fontSize: '18px',
    }),
})

const HeroBtnWrappper = styled.div({
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const ArrowForward = styled(MdArrowForward, {
    marginLeft: '8px',
    fontSize: '20px',
});

const ArrowRight = styled(MdKeyboardArrowRight, {
    marginLeft: '8px',
    fontSize: '20px',
});