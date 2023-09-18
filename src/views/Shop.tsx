import { Product } from '../components/Product'
import productsJSON from '../fake-db/products.json'

const Shop = () => {
  const products: (ProductInterface | ExtendedProductInterface)[] = productsJSON.products; //creates products variable to hold the products array from the JSON file

  return (
    <div className="shop">
      <h1>Produkter</h1>
      <ul className="product-list"> {products.map((product) => ( //maps through allProducts array
        <Product key={product.id} data={product} /> //passes product object through props
      ))}
      </ul>
    </div>
  )
}

export default Shop