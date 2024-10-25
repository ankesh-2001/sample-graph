// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
// ];

// const BarChartComponent = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarChartComponent;


// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Sample data with date and time
// const data = [
//   { name: '2024-10-21 10:00', uv: 4000, pv: 2400, amt: 2400 },
//   { name: '2024-10-21 11:00', uv: 3000, pv: 1398, amt: 2210 },
//   { name: '2024-10-21 12:00', uv: 2000, pv: 9800, amt: 2290 },
//   { name: '2024-10-21 13:00', uv: 2780, pv: 3908, amt: 2000 },
//   { name: '2024-10-21 14:00', uv: 1890, pv: 4800, amt: 2181 },
// ];

// // Formatter function to split date and time into two lines
// const formatXAxis = (tickItem) => {
//   const date = new Date(tickItem);
//   const formattedDate = date.toLocaleDateString(); // Extracts date part
//   const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Extracts time part

//   return (
//     <tspan>
//       <tspan x="0" dy="1.2em" style={{ fontSize: '12px', fill: '#333' }}>{formattedDate}</tspan>
//       <tspan x="0" dy="1.2em" style={{ fontSize: '10px', fill: '#888' }}>{formattedTime}</tspan>

//     </tspan>
//   );
// };

// const BarChartComponent = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" tickFormatter={formatXAxis} interval={0} />
//         <YAxis />
//         <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
//         <Legend />
//         <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarChartComponent;


// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Sample data with date and time
// const data = [
//   { name: '2024-10-21 10:00', uv: 4000, pv: 2400, amt: 2400 },
//   { name: '2024-10-21 11:00', uv: 3000, pv: 1398, amt: 2210 },
//   { name: '2024-10-21 12:00', uv: 2000, pv: 9800, amt: 2290 },
//   { name: '2024-10-21 13:00', uv: 2780, pv: 3908, amt: 2000 },
//   { name: '2024-10-21 14:00', uv: 1890, pv: 4800, amt: 2181 },
// ];

// // Formatter function to split date and time into two lines using a string
// const formatXAxis = (tickItem) => {
//   const date = new Date(tickItem);
//   const formattedDate = date.toLocaleDateString(); // Get only the date part
//   const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get only the time part

//   return `${formattedDate}\n${formattedTime}`; // Return as a string with a line break
// };

// const BarChartComponent = () => {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <BarChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 50 }}  // Add margin to the bottom
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis 
//           dataKey="name" 
//           tickFormatter={formatXAxis} 
//           interval={0} 
//           tick={{ fontSize: 12 }} // Set font size for better readability
//         />
//         <YAxis />
//         <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
//         <Legend />
//         <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarChartComponent;





import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data with date and time
const data = [
  { name: '2024-10-21 10:00', uv: 4000, pv: 2400, amt: 2400 },
  { name: '2024-10-21 11:00', uv: 3000, pv: 1398, amt: 2210 },
  { name: '2024-10-21 12:00', uv: 2000, pv: 9800, amt: 2290 },
  { name: '2024-10-21 13:00', uv: 2780, pv: 3908, amt: 2000 },
  { name: '2024-10-21 14:00', uv: 1890, pv: 4800, amt: 2181 },
];

// Custom tick renderer function to render date and time on two lines
const renderCustomAxisTick = ({ x, y, payload }) => {
  const date = new Date(payload.value);
  const formattedDate = date.toLocaleDateString(); // Get the date part
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get the time part

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
      <tspan x="0" dy="1em" className="axis-date">{formattedDate}</tspan>
      <tspan x="0" dy="1.5em" className="axis-time">{formattedTime}</tspan>
      </text>
    </g>
  );
};

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 50 }} // Add margin to the bottom
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          tick={renderCustomAxisTick}  // Use the custom tick renderer
          interval={0}
        />
        <YAxis />
        <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;


