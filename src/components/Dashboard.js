import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar';
import { Link } from 'react-router-dom';
import DataForm from './DataForm';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [billName, setBillName] = useState('');
    const [billCost, setBillCost] = useState('');
    const [billInfo, setBillInfo] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const handleDayClick = (date) => {
        setSelectedDate(date);
    };

    const handleAddBill = () => {
        if (selectedDate && billName && billCost) {
            setBillInfo([...billInfo, { date: selectedDate.toDateString(), name: billName, cost: parseFloat(billCost) }]);
            setBillName('');
            setBillCost('');
        }
    };

    const handleRemoveBill = (index) => {
        const updatedBills = [...billInfo];
        updatedBills.splice(index, 1);
        setBillInfo(updatedBills);
    };

    const calculateTotalCost = () => {
        const total = billInfo.reduce((acc, bill) => acc + bill.cost, 0);
        return total.toFixed(2);
    };

    const handleSubmit = () => {
        const calculatedTotalCost = calculateTotalCost();
        setTotalCost(calculatedTotalCost);

        console.log('Submit button clicked');
    };

    return (
        <section id="about">
            <div>
                <h1>Calendar</h1>
                <div className="box">
                    <div className="calendar-container">
                        <Calendar onClickDay={handleDayClick} value={selectedDate} />
                    </div>
                    <div className="bill-section">
                        <input
                            type="text"
                            placeholder="Name of Bill"
                            value={billName}
                            onChange={(e) => setBillName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Cost"
                            value={billCost}
                            onChange={(e) => setBillCost(e.target.value)}
                        />
                        <button onClick={handleAddBill}>Add Bill</button>
                        <button onClick={() => setSelectedDate(null)}>Clear Highlight</button>
                    </div>
                    <div className="bill-list">
                        <h2>Bill List</h2>
                        <ul>
                            {billInfo.map((bill, index) => (
                                <li key={index}>
                                    <span>Date: {bill.date}</span>
                                    <span>Name: {bill.name}</span>
                                    <span>Cost: ${bill.cost.toFixed(2)}</span>
                                    <button onClick={() => handleRemoveBill(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div>Total Cost: ${calculateTotalCost()}</div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <div>
                <DataForm totalCost={totalCost} />
            </div>
        </section>
    );
};

export default Dashboard;
