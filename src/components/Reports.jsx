import React, {useState} from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';


const Reports = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];


    const [dateRange, setDateRange] = useState({
    from: '',
    to: ''
  });

  
  const expensesByCategory = [
    { name: 'Food', value: 500 },
    { name: 'Transport', value: 300 },
    { name: 'Entertainment', value: 200 },
    { name: 'Utilities', value: 400 },
    { name: 'Rent', value: 1000 },
  ];

  const incomeVsExpenses = [
    { name: 'Jan', income: 4000, expenses: 2400 },
    { name: 'Feb', income: 3000, expenses: 1398 },
    { name: 'Mar', income: 2000, expenses: 9800 },
    { name: 'Apr', income: 2780, expenses: 3908 },
    { name: 'May', income: 1890, expenses: 4800 },
    { name: 'Jun', income: 2390, expenses: 3800 },
  ];

  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Financial Reports</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
       
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4">Date Range</h2>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input
                  type="date"
                  name="from"
                  value={dateRange.from}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input
                  type="date"
                  name="to"
                  value={dateRange.to}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

     
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium">Total Income:</span>
              <span className="text-green-600 font-semibold">Rwfs 5,000</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium">Total Expenses:</span>
              <span className="text-red-600 font-semibold">Rwfs 2,400</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium">Net Savings:</span>
              <span className="text-[#0088ff] font-semibold">Rwfs 2,600</span>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Expenses by Category</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {expensesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

       
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incomeVsExpenses}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#8884d8" />
                <Bar dataKey="expenses" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
