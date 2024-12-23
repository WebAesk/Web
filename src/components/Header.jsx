import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../css/Header.css';
import Logo from '../assets/aesk2.png';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <header className="header">
            <div className="container">
                <img
                    src={Logo}
                    alt="Logo"
                    className="logo"
                    onClick={() => handleNavigate("/")}
                    style={{ cursor: 'pointer' }}
                />
                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <a
                        onClick={() => handleNavigate("/")}
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Home
                    </a>
                    <a
                        onClick={() => handleNavigate("/about")}
                        className={location.pathname === '/about' ? 'active' : ''}
                    >
                        About
                    </a>
                    <a
                        onClick={() => handleNavigate("/cars")}
                        className={location.pathname === '/cars' ? 'active' : ''}
                    >
                        Stars
                    </a>
                    <a
                        onClick={() => handleNavigate("/teams")}
                        className={location.pathname === '/teams' ? 'active' : ''}
                    >
                        Teams
                    </a>
                    <a
                        onClick={() => handleNavigate("/races")}
                        className={location.pathname === '/races' ? 'active' : ''}
                    >
                        Races
                    </a>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
            </div>
        </header>
    );
};

export default Header;