import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Car.css';
import CarsImages from '../assets/ExportFile/CarsImages.jsx';
const arabaZesXe = () => {
    const navigate = useNavigate();

    const handleSeeMore = () => {
        navigate('/');
    }

    return (
        <div>
            <div className='cars-genel'>
                <div className="araba-container" style={{
                    backgroundImage: `url(${CarsImages["electrayatay"]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="araba-overlay" >
                        <h2 className="araba-title">ELECTRA</h2>
                        <ul className="araba-specs">
                            <li><strong>Maximum Speed:</strong> 140 km/h</li>
                            <li><strong>Weight:</strong> 170 kg</li>
                            <li><strong>Battery:</strong> 6.1 kWh</li>
                            <li><strong>Motor Power:</strong> 1.8 kW</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='cars-genel'>
                <div className="araba-container" style={{
                    backgroundImage: `url(${CarsImages["castoryatay"]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="araba-overlay" >
                        <h2 className="araba-title">CASTOR</h2>
                        <ul className="araba-specs">
                            <li><strong>Maximum Speed:</strong> 140 km/h</li>
                            <li><strong>Weight:</strong> 170 kg</li>
                            <li><strong>Battery:</strong> 6.1 kWh</li>
                            <li><strong>Motor Power:</strong> 1.8 kW</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='cars-genel'>
                <div className="araba-container" style={{
                    backgroundImage: `url(${CarsImages["vegayatay"]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="araba-overlay" >
                        <h2 className="araba-title">VEGA</h2>
                        <ul className="araba-specs">
                            <li><strong>Maximum Speed:</strong> 140 km/h</li>
                            <li><strong>Weight:</strong> 170 kg</li>
                            <li><strong>Battery:</strong> 6.1 kWh</li>
                            <li><strong>Motor Power:</strong> 1.8 kW</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='cars-genel'>
                <div className="araba-container" style={{
                    backgroundImage: `url(${CarsImages["novayatay"]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="araba-overlay" >
                        <h2 className="araba-title">NOVA</h2>
                        <ul className="araba-specs">
                            <li><strong>Maximum Speed:</strong> 140 km/h</li>
                            <li><strong>Weight:</strong> 170 kg</li>
                            <li><strong>Battery:</strong> 6.1 kWh</li>
                            <li><strong>Motor Power:</strong> 1.8 kW</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default arabaZesXe;
