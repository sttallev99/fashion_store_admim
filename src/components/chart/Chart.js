import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './chart.css';

const Chart = ({title, data}) => {
    
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='name' stroke='fff0bd'/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Active User" stroke="#8884d8" />
       
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
