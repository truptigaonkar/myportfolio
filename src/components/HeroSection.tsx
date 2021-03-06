import React from 'react'
import { styled } from '@glitz/react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import { media } from '@glitz/core'

const HeroSection = () => {
    return (
        <>
            <Banner1>
                <CarouselImg src={image1} alt="image1" />
                <Textbox1>
                    <H1new>Heading 1</H1new>
                    <Span></Span>
                    <Pnew>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</Pnew>
                </Textbox1>
            </Banner1>
            <Banner2>
                <CarouselImg src={image2} alt="image2" />
                <Textbox2>
                    <H1new>Heading 2</H1new>
                    <Span></Span>
                    <Pnew>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</Pnew>
                </Textbox2>
            </Banner2>
            <Banner3>
                <CarouselImg src={image3} alt="image3" />
                <Textbox3>
                    <H1new>Heading 3</H1new>
                    <Span></Span>
                    <Pnew>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</Pnew>
                </Textbox3>
            </Banner3>
            <Banner4>
                <CarouselImg src={image4} alt="image4" />
                <Textbox4>
                    <H1new>Heading 4</H1new>
                    <Span></Span>
                    <Pnew>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</Pnew>
                </Textbox4>
            </Banner4>
        </>
    )
}

export default HeroSection

const Banner = styled.div({
    height: '100vh',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden', /* Removing of image sliding to right and up */
    animationDuration: '12s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
})

const Banner1 = styled(Banner, {
    animationName: {
        '0%': { visibility: 'hidden' },
        '25%': { visibility: 'visible'},
        '50%': { visibility: 'hidden'},
        '75%': { visibility: 'hidden'},
        '100%': { visibility: 'hidden' }
    },
})

const Banner2 = styled(Banner, {
    animationName: {
        '0%': { visibility: 'hidden' },
        '25%': { visibility: 'hidden'},
        '50%': { visibility: 'visible'},
        '75%': { visibility: 'hidden'},
        '100%': { visibility: 'hidden' }
    },
})

const Banner3 = styled(Banner, {
    animationName: {
        '0%': { visibility: 'hidden' },
        '25%': { visibility: 'hidden'},
        '50%': { visibility: 'hidden'},
        '75%': { visibility: 'visible'},
        '100%': { visibility: 'hidden' }
    },
})

const Banner4 = styled(Banner, {
    animationName: {
        '0%': { visibility: 'hidden' },
        '25%': { visibility: 'hidden'},
        '50%': { visibility: 'hidden'},
        '75%': { visibility: 'hidden'},
        '100%': { visibility: 'visible' }
    },
})

const CarouselImg = styled.img({
    width: '120%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    animationName: {
        '100%': { width: '100%' },
    },
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    filter: 'brightness(30%)',
    ...media('(max-width: 960px)',{
        height: '100%',
    }),
})

const Textbox = styled.div({
    width: '600px',
    position: 'absolute',
    top: '200px',
    left: '100px',
    color: '#fff',
    transform: 'translateY(100px)',
    animationName: {
        '10%': { transform: 'translateY(0px)' },
        '100%': { transform: 'translateY(0px)' },
    },
    animationDuration: '12s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
})

const Textbox1 = styled(Textbox, {
    animationDelay: '0s',
})

const Textbox2 = styled(Textbox, {
    animationDelay: '3s',
})

const Textbox3 = styled(Textbox, {
    animationDelay: '6s',
})

const Textbox4 = styled(Textbox, {
    animationDelay: '9s',
})

const H1new = styled.h1({
  marginBottom: '30px',
})

const Pnew = styled.p({
    marginTop: '60px',
    lineHeight: '18px',
    fontSize: '14px',
})

const Span = styled.span({
    height: '3px',
    width: '100px',
    position: 'absolute',
    backgroundColor: '#00bcd4',
    left: 0,
})