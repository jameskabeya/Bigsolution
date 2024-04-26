import React, { useState } from 'react';

function PayrollCalculator() {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [totalPay, setTotalPay] = useState(0);

  const handleHoursChange = (e) => {
    setHoursWorked(parseFloat(e.target.value));
  };

  const handleRateChange = (e) => {
    setHourlyRate(parseFloat(e.target.value));
  };

  const calculatePay = () => {
    const pay = hoursWorked * hourlyRate;
    setTotalPay(pay);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Payroll Calculator</h1>
      <div className="flex flex-col space-y-4">
        <label>
          Hours Worked:
          <input
            type="number"
            value={hoursWorked}
            onChange={handleHoursChange}
            className="border rounded p-2"
          />
        </label>
        <label>
          Hourly Rate:
          <input
            type="number"
            value={hourlyRate}
            onChange={handleRateChange}
            className="border rounded p-2"
          />
        </label>
        <button onClick={calculatePay} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Calculate Pay
        </button>
      </div>
      <div className="mt-8">
        {totalPay > 0 && (
          <p className="text-xl font-bold">
            Total Pay: ${totalPay.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default PayrollCalculator;
