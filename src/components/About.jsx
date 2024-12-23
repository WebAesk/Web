import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import slide1 from '../assets/VEGA.jpg';
import slide2 from '../assets/NOVA.jpg';
import slide3 from '../assets/CASTOR.jpg';
import slide4 from '../assets/ELECTRA.jpg';

const About = () => {
    const slides = [slide1, slide2, slide3, slide4]; // Fotoğraflar listesi
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Her 3 saniyede bir fotoğraf değişir

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <div className="home">
            <div className="row">
                <div className="info">
                    <h1>ABOUT PAGEEEEEEEEEEEEEEEE</h1>
                    <p>In the 21st century, where energy consumption...</p>
                    <button className="about-button">About Us</button>
                </div>
                <div className="slider">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            className={`slide-image ${index === currentSlide ? "active" : ""}`}
                        />
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="info">
                    <h1>Welcome to the Champions Team – YTU AESK</h1>
                    <p>In the 21st century, where energy consumption...</p>
                    <button className="about-button">About Us</button>
                </div>
                <div className="slider">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            className={`slide-image ${index === currentSlide ? "active" : ""}`}
                        />
                    ))}
                </div>
            </div><div className="row">
                <div className="info">
                    <h1>Welcome to the Champions Team – YTU AESK</h1>
                    <p>In the 21st century, where energy consumption...</p>
                    <button className="about-button">About Us</button>
                </div>
                <div className="slider">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            className={`slide-image ${index === currentSlide ? "active" : ""}`}
                        />
                    ))}
                </div>
            </div>

        </div>

    );
};

export default About