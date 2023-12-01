import BuyerProfileChart from './BuyerProfileChart'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid/>
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart/>
    <BuyerProfileChart/>
      </div>
    </div>
    )
}

export default Dashboard