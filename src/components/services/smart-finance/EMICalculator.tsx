import React, { useState } from 'react';
import Input from '../../ui/Input';

const EMICalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const p = amount;
    const r = rate / (12 * 100);
    const n = tenure;
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emi));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-6">EMI Calculator</h3>
      <div className="space-y-4">
        <Input
          label="Loan Amount (₹)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Input
          label="Interest Rate (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <Input
          label="Tenure (months)"
          type="number"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
        />
        <button
          onClick={calculateEMI}
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors duration-300"
        >
          Calculate EMI
        </button>
        {emi > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-lg font-semibold">
              Monthly EMI: ₹{emi.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;