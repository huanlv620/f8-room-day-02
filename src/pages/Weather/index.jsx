import { useState } from 'react';
import clsx from 'clsx';
import styles from './Weather.module.scss';

const CONDITION_ICONS = {
    Nắng: '☀️',
    'Nhiều mây': '☁️',
    Mưa: '🌧️',
    'Giông bão': '⛈️',
    Gió: '🌬️',
    'Sương mù': '🌫️',
};

const weatherData = [
    { id: 'hanoi', name: 'Hà Nội', temp: 31, humidity: 68, condition: 'Nhiều mây' },
    { id: 'danang', name: 'Đà Nẵng', temp: 33, humidity: 62, condition: 'Nắng' },
    { id: 'hcm', name: 'TP. Hồ Chí Minh', temp: 32, humidity: 74, condition: 'Mưa' },
    { id: 'dalat', name: 'Đà Lạt', temp: 22, humidity: 80, condition: 'Sương mù' },
    { id: 'quangnam', name: 'Quảng Nam', temp: 34, humidity: 60, condition: 'Nắng' },
];

function clampValue(value, minValue, maxValue) {
    return Math.max(minValue, Math.min(maxValue, value));
}

function getRandomInt(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function Weather() {
    const [cities, setCities] = useState(weatherData);
    const [selectedCityId, setSelectedCityId] = useState(weatherData[0].id);
    const [lastUpdated, setLastUpdated] = useState(null);

    const selectedCity = cities.find((city) => city.id === selectedCityId);

    const refreshCityWeather = () => {
        setCities((prevCities) =>
            prevCities.map((city) =>
                city.id === selectedCityId
                    ? {
                          ...city,
                          temp: clampValue(city.temp + getRandomInt(-5, 5), -10, 50),
                          humidity: clampValue(city.humidity + getRandomInt(-5, 5), 0, 100),
                      }
                    : city,
            ),
        );
        setLastUpdated(new Date().toLocaleTimeString());
    };

    return (
        <div className={clsx(styles.weather)}>
            <header className={styles.header}>
                <h1 className={styles.title}>🌦️ Weather</h1>
            </header>

            <div className={styles.controls}>
                <select
                    className={styles.select}
                    value={selectedCityId}
                    onChange={(e) => setSelectedCityId(e.target.value)}
                >
                    {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                            {city.name}
                        </option>
                    ))}
                </select>
                <button className={styles.button} onClick={refreshCityWeather}>
                    Làm mới
                </button>
            </div>

            {selectedCity && (
                <div className={clsx(styles.card, styles[`condition-${selectedCity.condition}`])}>
                    <div className={styles.icon} title={selectedCity.condition}>
                        {CONDITION_ICONS[selectedCity.condition] || '🌡️'}
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.city}>{selectedCity.name}</h2>
                        <div className={styles.condition}>
                            Tình trạng: <strong>{selectedCity.condition}</strong>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.label}>Nhiệt độ</span>
                                <span className={styles.value}>{selectedCity.temp}°C</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.label}>Độ ẩm</span>
                                <span className={styles.value}>{selectedCity.humidity}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {lastUpdated && <footer className={styles.footer}>Cập nhật lúc: {lastUpdated}</footer>}
        </div>
    );
}

export default Weather;
