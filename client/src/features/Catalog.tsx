import { Product } from "../app/models/products";

interface Props {
products: Product[];
addProduct: () => void
}

export default function Catalog({products, addProduct}: Props) {
    return (
        <>
        <ul>
        {products.map(product=> (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
      </>
    )
}

//using Fragment <></> because it has multiple parents