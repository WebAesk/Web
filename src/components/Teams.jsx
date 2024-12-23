import React from 'react';
import '../css/Teams.css';
import images from '../assets/ExportFile/importting.jsx';
function Teams() {
    return (
        <div className="teams-genel">
            <div className="teams-container">
                <div className="teams-section">
                    <h2>Yönetim</h2>
                    <div className="teams-grid">
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[3]})` }}
                            ></div>
                            <h3>İsim 1</h3>
                            <p>Ünvan 1</p>
                        </div>

                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>İsim 3</h3>
                            <p>Ünvan 3</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[3]})` }}
                            ></div>
                            <h3>İsim 4</h3>
                            <p>Ünvan 4</p>
                        </div>
                    </div>
                </div>

                <div className="teams-section">
                    <h2>Ekip 1</h2>
                    <div className="teams-grid">
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                    </div>
                </div>

                <div className="teams-section">
                    <h2>Ekip 2</h2>
                    <div className="teams-grid">
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[3]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[3]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[3]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[3]})` }}
                            ></div>
                            <h3>İsim</h3>
                            <p>Ünvan</p>
                        </div>
                    </div>
                </div>

                <div className="teams-section">
                    <h2>Destekleyenler</h2>
                    <div className="teams-grid">
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>Destekleyen İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>Destekleyen İsim</h3>
                            <p>Ünvan</p>
                        </div>
                        <div className="teams-card">
                            <div
                                className="teams-card-bg"
                                style={{ backgroundImage: `url(${images[2]})` }}
                            ></div>
                            <h3>Destekleyen İsim</h3>
                            <p>Ünvan</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Teams;
