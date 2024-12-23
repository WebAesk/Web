import React from 'react';
import '../css/Car.css';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Cars from "../components/Cars.jsx";

const CarPage = () => {
    return (
        <>
            <Header />
            <Cars />
            <Footer />
        </>
    );
};

export default CarPage;
