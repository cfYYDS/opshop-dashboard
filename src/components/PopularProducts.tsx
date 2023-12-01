import { Link } from "react-router-dom"

const popularProductsData = [
  {
    id:'123',
    product_name:'cf',
    product_thumbnail:'https://source.unsplash.com/100x100?laptop',
    product_price:'$1499.90',
    product_stock:341
  },{
    id:'456',
    product_name:'new_cf',
    product_thumbnail:'https://source.unsplash.com/100x100?laptop',
    product_price:'$12312.90',
    product_stock:213
  }
]
const PopularProducts = () => {
  return (
    <div className="bg-white w-[18.5rem] px-4 pt-3 pb-4 rounded-sm border border-gray-200 ">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {
          popularProductsData.map(product=>(
            <Link to={`/product/${product.id}`} className="flex hover:no-underline" key={product.id}>
              <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
                <img className="w-full h-full object-cover" src={product.product_thumbnail} alt={product.product_name} />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm text-gray-800">{product.product_name}</p>
                <span className={`text-sm font-medium ${product.product_stock===0?'text-orange-500':'text-green-500'}`}>{product.product_stock===0?'Out of stock':product.product_stock+' in stock'}</span>
              </div>
              <div className="text-xs text-gray-400 pl-2">{product.product_price}</div>
            </Link>
            ))
        }
      </div>
    </div>
  )
}

export default PopularProducts