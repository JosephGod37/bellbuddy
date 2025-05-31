import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return <h2>Czas: {time.toLocaleTimeString()}</h2>;
};

export default Clock;
