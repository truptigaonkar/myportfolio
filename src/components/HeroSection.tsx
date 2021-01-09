import React from 'react'
import { styled } from '@glitz/react'
import './Navbar.css'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'

const HeroSection = () => {
    return (
        <>
            <div className="banner1">
                <img className="carouselImg" src={image1} alt="image1" />
                <div className="text-box text-box1">
                    <h1>Heading 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</p>
                </div>
            </div>
            <div className="banner2">
                <img className="carouselImg" src={image2} alt="image2" />
                <div className="text-box text-box2">
                    <h1>Heading 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</p>
                </div>
            </div>
            <div className="banner3">
                <img className="carouselImg" src={image3} alt="image3" />
                <div className="text-box text-box3">
                    <h1>Heading 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</p>
                </div>
            </div>
            <div className="banner4">
                <img className="carouselImg" src={image4} alt="image4" />
                <div className="text-box text-box4">
                    <h1>Heading 4</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur soluta. Aperiam eius sint cumque tempore earum sequi laudantium magnam, illo id accusamus harum, consectetur accusantium tempora blanditiis. Perferendis, et?</p>
                </div>
            </div>
        </>
    )
}

export default HeroSection

const HeroSectionnew = styled.section({
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

const Slide1 = styled.img({
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    animationName: {
        '0%': { opacity: 0.4 },
        '25%': { opacity: 0 },
        '50%': { opacity: 0 },
        '75%': { opacity: 0 },
        '100%': { opacity: 0.4 }
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
        '0%': { opacity: 0 },
        '25%': { opacity: 0.4 },
        '50%': { opacity: 0 },
        '75%': { opacity: 0 },
        '100%': { opacity: 0.4 }
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
        '0%': { opacity: 0 },
        '25%': { opacity: 0 },
        '50%': { opacity: 0.4 },
        '75%': { opacity: 0 },
        '100%': { opacity: 0 }
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
        '0%': { opacity: 0 },
        '25%': { opacity: 0 },
        '50%': { opacity: 0 },
        '75%': { opacity: 0.4 },
        '100%': { opacity: 0 }
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
})
