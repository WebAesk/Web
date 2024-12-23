import React, { useState, useEffect } from 'react';
import '../css/races.css';

/**
 * Countdown bileşeni:
 * - "title": örneğin "Fighter UAV Competition"
 * - "targetDate": "2025-02-20T00:00:00" gibi
 */
function Countdown({ title, targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance <= 0) {
                // Tarih geçtiyse 0 atayalım
                setTimeLeft({
                    months: 0,
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            } else {
                // Toplam değerleri hesaplayalım
                const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
                const totalHours = Math.floor(distance / (1000 * 60 * 60));
                const totalMinutes = Math.floor(distance / (1000 * 60));
                const totalSeconds = Math.floor(distance / 1000);

                // Yaklaşık 1 ay = 30 gün
                const months = Math.floor(totalDays / 30);
                const days = totalDays % 30;

                const hours = totalHours % 24;
                const minutes = totalMinutes % 60;
                const seconds = totalSeconds % 60;

                setTimeLeft({ months, days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="race-countdown-container">
            <div className="race-countdown-title">{title}</div>
            <div className="race-countdown-values">
                <div className="race-countdown-block">
                    <div className="race-countdown-number">{timeLeft.months}</div>
                    <div className="race-countdown-label">Month</div>
                </div>
                <div className="race-countdown-block">
                    <div className="race-countdown-number">{timeLeft.days}</div>
                    <div className="race-countdown-label">Day</div>
                </div>
                <div className="race-countdown-block">
                    <div className="race-countdown-number">{timeLeft.hours}</div>
                    <div className="race-countdown-label">Hours</div>
                </div>
                <div className="race-countdown-block">
                    <div className="race-countdown-number">{timeLeft.minutes}</div>
                    <div className="race-countdown-label">Minutes</div>
                </div>
                <div className="race-countdown-block">
                    <div className="race-countdown-number">{timeLeft.seconds}</div>
                    <div className="race-countdown-label">Seconds</div>
                </div>
            </div>
        </div>
    );
}

function Races() {
    // Örnek yarışlar
    const racesData = [
        {
            id: 1,
            title: 'Fighter UAV Competition',
            date: '2025-02-20T00:00:00', // 20 Şubat 2025
            image: 'https://via.placeholder.com/600x400?text=Race+1',
            info: 'Lorem ipsum dolor sit amet, Yarış 1 açıklaması.'
        },
        {
            id: 2,
            title: 'Aerospace Marathon',
            date: '2025-06-10T00:00:00', // 10 Haziran 2025
            image: 'https://via.placeholder.com/600x400?text=Race+2',
            info: 'Duis aute irure dolor in reprehenderit, Yarış 2 açıklaması.'
        },
        {
            id: 3,
            title: 'Robotics World Cup',
            date: '2025-12-01T00:00:00', // 1 Aralık 2025
            image: 'https://via.placeholder.com/600x400?text=Race+3',
            info: 'Excepteur sint occaecat cupidatat, Yarış 3 açıklaması.'
        }
    ];

    return (
        <div className="races-genel">
            <div className="races-container">
                {racesData.map((race) => (
                    <div key={race.id} className="race-wrapper">
                        {/* Sol taraf (Üst görsel + Alt geri sayım) */}
                        <div className="race-left">
                            <div
                                className="race-left-top"
                                style={{ backgroundImage: `url(${race.image})` }}
                            />
                            <div className="race-left-bottom">
                                <Countdown title={race.title} targetDate={race.date} />
                            </div>
                        </div>

                        {/* Sağ taraf (bilgi) */}
                        <div className="race-right">
                            <div className="race-info">
                                <h2>Yarış {race.id}</h2>
                                <p>{race.info}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Races;
