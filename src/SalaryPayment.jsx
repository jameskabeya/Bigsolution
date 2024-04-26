import React, { useState } from 'react';

function SalaryPayment() {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [taxRate, setTaxRate] = useState(0); 
  const [netSalary, setNetSalary] = useState(0);

  const handleHoursChange = (e) => {
    setHoursWorked(parseFloat(e.target.value));
  };

  const handleRateChange = (e) => {
    setHourlyRate(parseFloat(e.target.value));
  };

  const handleTaxChange = (e) => {
    setTaxRate(parseFloat(e.target.value));
  };

  const calculateNetSalary = () => {
    const grossSalary = hoursWorked * hourlyRate;
    const deductions = grossSalary * taxRate;
    const net = grossSalary - deductions;
    setNetSalary(net);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Salary Payment</h2>
      <div className="mb-4">
        <label className="block mb-2">Hours Worked:</label>
        <input
          type="number"
          value={hoursWorked}
          onChange={handleHoursChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Hourly Rate:</label>
        <input
          type="number"
          value={hourlyRate}
          onChange={handleRateChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Tax Rate:</label>
        <input
          type="number"
          value={taxRate}
          onChange={handleTaxChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <button
        onClick={calculateNetSalary}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Calculate Salary
      </button>
      {netSalary > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Net Salary:</h3>
          <p className="text-gray-800">{netSalary}</p>
        </div>
      )}
    </div>
  );
}

export default SalaryPayment;
