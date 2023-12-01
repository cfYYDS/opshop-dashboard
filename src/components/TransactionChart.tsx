import {ResponsiveContainer,BarChart,CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
const data = [
    {
      name:'acv',
      Expense:2000,
      Income:1000
    },{
      name:'xzc',
      Expense:2000,
      Income:1000
    },{
      name:'asd',
      Expense:2000,
      Income:1000
    },
  ]
const TransactionChart = () => {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>Transaction</strong>
        <div className='w-full mt-3 flex-1 text-xs'>
       
        <ResponsiveContainer width="90%" height={300}>
            <BarChart width={500} height={300} data={data}
            margin={{top: 20, right: 10, bottom: 0, left: -10}}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="Income" fill="#0ea5e9"/>
            <Bar dataKey="Expense" fill="#ea580c"/>
            </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default TransactionChart