import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDayClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <section id="about">
            <div>
                <h1>Calendar</h1>
                <div className="box">
                    <div className="calendar-container">
                        <Calendar onClickDay={handleDayClick} value={selectedDate} />
                    </div>
                    <button onClick={() => setSelectedDate(null)}>Clear Highlight</button>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
