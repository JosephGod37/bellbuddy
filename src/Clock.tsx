import React, { useEffect, useState } from 'react';

const lessonDurationMinutes = 45;

const Clock: React.FC = () => {
    const [now, setNow] = useState(new Date());
    const [lessonEnd, setLessonEnd] = useState<Date>(() => {
        const start = new Date();
        return new Date(start.getTime() + lessonDurationMinutes * 60 * 1000);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getRemainingTime = () => {
        const diff = lessonEnd.getTime() - now.getTime();
        if (diff <= 0) return 'Lekcja zakończona';
        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        return `${mins} min ${secs < 10 ? '0' : ''}${secs} sek`;
    };

    const formatTimeZone = (timeZone: string) =>
        new Date().toLocaleTimeString('pl-PL', { timeZone });

    return (
        <div style={{ marginBottom: 20 }}>
            <h2>Aktualny czas: {now.toLocaleTimeString()}</h2>
            <h4>Pozostało do końca lekcji: {getRemainingTime()}</h4>
            <div style={{ marginTop: 10 }}>
                <strong>Strefy czasowe:</strong>
                <ul>
                    <li>Nowy Jork: {formatTimeZone('America/New_York')}</li>
                    <li>Tokio: {formatTimeZone('Asia/Tokyo')}</li>
                    <li>Londyn: {formatTimeZone('Europe/London')}</li>
                </ul>
            </div>
        </div>
    );
};

export default Clock;


