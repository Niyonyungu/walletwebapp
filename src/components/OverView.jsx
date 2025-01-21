import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'


const OverView = () => {

const data = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'July', income: 5300, expenses: 3000 },
]


const StatCard = ({
  title,
  value,
  change,
  icon,
  trend
}) => (
  <div className="card">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium">{title}</h3>
      <div className={`rounded-full p-2 Rwfs {trend === 'up' ? 'bg-green-100' : trend === 'down' ? 'bg-red-100' : 'bg-gray-100'}`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {icon === 'dollar-sign' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
          {icon === 'trending-up' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
          {icon === 'trending-down' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />}
          {icon === 'alert-circle' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
        </svg>
      </div>
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <p className={`text-xs Rwfs {trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>{change}</p>
  </div>
)


  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Balance"
        value="Rwfs 45,231.89"
        change="+20.1% from last month"
        icon="dollar-sign"
        trend="up"
      />
      <StatCard
        title="Income"
        value="Rwfs 3,592.00"
        change="+2.5% from last month"
        icon="trending-up"
        trend="up"
      />
      <StatCard
        title="Expenses"
        value="Rwfs 2,345.00"
        change="+18.2% from last month"
        icon="trending-down"
        trend="down"
      />
      <StatCard
        title="Budget Status"
        value="65%"
        change="of monthly budget used"
        icon="alert-circle"
        trend="neutral"
      />
      <div className="col-span-4 card">
        <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#0088FE" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill="#FF8042" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    
    </div>
  )
}

export default OverView
