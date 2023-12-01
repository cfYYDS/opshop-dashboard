import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/utils'
const recentOrderData = [
    {
        id:'1',
        product_id:'100',
        customer_id:'100',
        customer_name:'John',
        order_date:'2021-06-22',
        order_total:'1000',
        current_order_status:'PLACED',
        shipment_address:'123456789',
    },  {
        id:'2',
        product_id:'132',
        customer_id:'234',
        customer_name:'John',
        order_date:'2021-06-22',
        order_total:'1000',
        current_order_status:'OUT_FOR_DELIVERY',
        shipment_address:'123456789',
    },  {
        id:'3',
        product_id:'234',
        customer_id:'123',
        customer_name:'cf',
        order_date:'2021-06-22',
        order_total:'1000',
        current_order_status:'SHIPPED',
        shipment_address:'123456789',
    }
]
const RecentOrders = () => {
  return (
    <div className='bg-white  px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
        <strong className='text-gray-700 font-medium'>Recent Orders</strong>
        <div className='mt-3'>
            <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product ID</td>
                        <td>Customer Name</td>
                        <td>Order Date</td>
                        <td>Order Total</td>
                        <td>Shipping Address</td>
                        <td>Order Status</td>
                    </tr>
                </thead>
        <tbody>
            {recentOrderData.map(order=>(
                <tr key={order.id}>
                    <td>
                    <Link to={`/order/${order.id}`}>
                        #{order.id}
                        </Link>
                        </td>
                    <td>
                        <Link to={`/product/${order.product_id}`}>
                        {order.product_id}
                        </Link>
                        </td>

                    <td>   
                        <Link to={`/custom/${order.customer_name}`}>
                        {order.customer_name}
                        </Link></td>
                    <td>{new Date(order.order_date).toLocaleDateString()}</td>
                    <td>{order.order_total}</td>
                    <td>{order.shipment_address}</td>
                    <td>{getOrderStatus(order.current_order_status)}</td>
                </tr>
            ))}
        </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentOrders