import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const data = useLoaderData();
  const [totalAmount, setTotalAmount] = useState(0);
  const [donationAmount, setDonationAmount] = useState(0);

  useEffect(() => {
    const amount = data.reduce((acc, current) => acc + current.price, 0);
    setTotalAmount(amount);

    const donationProducts = JSON.parse(localStorage.getItem('products'));

    if (donationProducts) {
      const doAmount = donationProducts.reduce((acc, current) => acc + current.price, 0);
      setDonationAmount(doAmount);
    } else {
      setDonationAmount(0);
    }
  }, [data]);

  const chartData = [
    { name: 'Total Amount', value: totalAmount },
    { name: 'Donation Amount', value: donationAmount },
  ];

  const COLORS = ['#FF444A', '#00C49F'];
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle);
    const y = cy + radius * Math.sin(-midAngle);
    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className='flex flex-col sm:flex-col lg:flex-row justify-center items-center gap-10 text-2xl'>
        <h2>Total Amount: $<span className='text-red-500 font-bold'>{totalAmount.toFixed(2)}</span> </h2>
        <h2>Donation Amount: $<span className='text-green-400 font-bold'>{donationAmount.toFixed(2)}</span> </h2>
      </div>
      
    </div>
  );
};

export default Statistics;
