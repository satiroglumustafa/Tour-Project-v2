import Product from "./Product"
import "./Products.css"

const Products = ( {arrayProducts} ) => {
    return(
        <>
        {arrayProducts.map( (product)=> {
            return(
                // <Product key = {product.id} id={product.id} description={product.description} price={product.price} image={product.image} />
                <Product key = {product.id} {...product} />
            )
        } )}
        </>
    )
}

export default Products