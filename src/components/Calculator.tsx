import React, { useState } from "react";

export default function DepositCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [months, setMonths] = useState(12);
  const interestRate = 0.06; // 6% annual interest

  // Calculate compound interest (monthly compounding)
  const r = interestRate / 12;
  const balance =
    monthlyDeposit * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);

  const formattedBalance = balance.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });

  return (
    <div className=" flex items-center justify-center bg-p-[2px] rounded-2xl bg-linear-to-r from-red-800 via-purple-800 to-blue-900 hover:from-blue-900 hover:via-purple-800 hover:to-red-800 transition-all duration-700">
      <div className="bg- backdrop-blur-md p-8 m-4 rounded-2xl shadow-2xl w-[350px] text-blue-900 bg-white">
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Deposit Per Month ({monthlyDeposit.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })})
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
            className="w-full accent-red-700"
          />
          <div className="text-center text-sm mt-1">
            {monthlyDeposit.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">
            Deposit Time ({months} Months)
          </label>
          <input
            type="range"
            min="1"
            max="60"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full accent-red-700"
          />
          <div className="text-center text-sm mt-1">{months} months</div>
        </div>

        <div className="bg-white/20 p-6 rounded-xl text-center">
          <div className="text-4xl font-bold mb-1">{formattedBalance}</div>
          <div className="text-sm text-gray-200">
            Your balance after {months} months
          </div>
        </div>
      </div>
    </div>
  );
}
