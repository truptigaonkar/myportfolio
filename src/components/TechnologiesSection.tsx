import React from 'react'
import image1 from '../images/technologi1.png'
import image2 from '../images/technologi2.png'
import image3 from '../images/technologi3.png'
import image4 from '../images/technologi4.png'
import image5 from '../images/technologi5.png'
import image6 from '../images/technologi6.png'
import './index.css'

const TechnologiesSection = () => {
    return (
        <div className="content">
            <div className="servicesBx">
                <img src={image1} alt=""/>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="servicesBx">
                <img src={image2} alt=""/>
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta similique quas beatae officiis nam doloribus non nemo quae cumque, voluptatem officia molestiae? </p>
            </div>
            <div className="servicesBx">
                <img src={image3} alt=""/>
                <h2>Android Apps</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta similique quas beatae officiis nam doloribus non nemo quae cumque, </p>
            </div>
            <div className="servicesBx">
                <img src={image4} alt=""/>
                <h2>Photography</h2>
                <p>Aliquid assumenda iure sit ab dolores odio quod!</p>
            </div>
            <div className="servicesBx">
                <img src={image5} alt=""/>
                <h2>Content Writing</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="servicesBx">
                <img src={image6} alt=""/>
                <h2>Video Editing</h2>
                <p>voluptatem officia molestiae? Aliquid assumenda iure sit ab dolores odio quod!</p>
            </div>
        </div>
    )
}

export default TechnologiesSection
