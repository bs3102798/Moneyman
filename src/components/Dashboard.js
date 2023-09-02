import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDates, setSelectedDates] = useState([]);

    const handleDayClick = (date) => {
        if (selectedDates.length < 5) {
            setSelectedDates([...selectedDates, date]);
        }
    };

    const handleRemoveDate = (dateToRemove) => {
        const updatedDates = selectedDates.filter((date) => date !== dateToRemove);
        setSelectedDates(updatedDates);
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
                <div className="selected-dates">
                    <h2>Selected Dates:</h2>
                    <ul>
                        {selectedDates.map((date) => (
                            <li key={date.toISOString()}>
                                {date.toDateString()}{' '}
                                <button onClick={() => handleRemoveDate(date)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;