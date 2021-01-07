import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <header id="header">
                <a href="#" className="logo">LOGO</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="toggle"></div>
            </header>
            <section id="home">
                <div>
                    <h2>Responsive website design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                    <a href="#">Read More</a>
                </div>
                <img src="hero.jpg" alt="" />
            </section>
            <section id="about">
                <div>
                    <h2>About</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
                <img src="hero.jpg" alt="" />
            </section>
            <section id="services">
                <div>
                    <h2>Our Services</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
                <img src="hero.jpg" alt="" />
            </section>
            <section id="portfolio">
                <div>
                    <h2>Portfolio</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
                <img src="hero.jpg" alt="" />
            </section>
            <section id="team">
                <div>
                    <h2>Our Team</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
                <img src="hero.jpg" alt="" />
            </section>
            <section id="contact">
                <div>
                    <h2>Contact Us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate aspernatur quis esse quam nihil facilis reprehenderit, ratione omnis dolores nemo, ipsum exercitationem porro deleniti! Voluptas sit molestias rerum exercitationem.</p>
                </div>
                <img src="hero.jpg" alt="" />
            </section>
        </>
    )
}

export default Navbar
