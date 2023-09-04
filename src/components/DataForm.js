import React from 'react';

function DataForm({ totalCost, calculateTotalCost }) {
    const handleDataFormSubmit = () => {

        console.log('Total Cost from DataForm:', totalCost);


        const recalculatedTotalCost = calculateTotalCost();
        console.log('Recalculated Total Cost:', recalculatedTotalCost);
    };

    return (
        <div>
            <h2>Data Form</h2>
            <p>Total Cost from Dashboard: ${totalCost}</p>
            <button onClick={handleDataFormSubmit}>Submit DataForm</button>
        </div>
    );
}

export default DataForm;
