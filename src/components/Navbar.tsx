import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <header id="header">
                <div className="logo"><Link activeClass="active" to="home" spy={true} smooth={true} duration={100}>LOGO</Link></div>
                <ul>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={100}>Home</Link></li>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={100}>About</Link></li>
                    <li><Link activeClass="active" to="services" spy={true} smooth={true} duration={100}>Services</Link></li>
                    <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={100}>Portfolio</Link></li>
                    <li><Link activeClass="active" to="team" spy={true} smooth={true} duration={100}>Team</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={100}>Contact</Link></li>
                </ul>
                <div className="toggle"></div>
            </header>
            <section id="home">
                <div>
                    <h2>Responsive website design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={100}>Read More</Link>
                </div>
            </section>
            <section id="about">
                <div>
                    <h2>About</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
                <img src="../images/myphoto.JPG" alt="" />
            </section>
            <section id="services">
                <div>
                    <h2>Our Services</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
            </section>
            <section id="portfolio">
                <div>
                    <h2>Portfolio</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
            </section>
            <section id="team">
                <div>
                    <h2>Our Team</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
            </section>
            <section id="contact">
                <div>
                    <h2>Contact Us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
            </section>
        </>
    )
}

export default Navbar