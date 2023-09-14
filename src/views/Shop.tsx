import { allProducts } from "../products"
import { Product }from '../components/Product'

const Shop = () => {
  return (
    <div className="shop">
      <h1>Products</h1>
        <ul className="product-list"> {allProducts.map((product) => ( //maps through allProducts array
            <Product key={product.id} data={product}/> //passes product object through props
        ))}
        </ul>
    </div>
  )
}

export default Shop