import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import Login from "./components/Login"
import Orders from "./components/Orders"
import Customers from "./components/Customers"
import Transaction from "./components/Transaction"
import Messages from "./components/Messages"
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index path="dashboard" element={<Dashboard />} />
      <Route  path="products" element={<Products />} />
      <Route  path="orders" element={<Orders />} />
      <Route  path="customers" element={<Customers />} />
      <Route  path="transactions" element={<Transaction />} />
      <Route  path="messages" element={<Messages />} />
      </Route>
      <Route path="login" element={<Login />}/>
    </Routes>
    </Router>
    )
}

export default App