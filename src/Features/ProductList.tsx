import { Grid } from "@mui/material";
import ProductCart from "./ProductCart";
import { Product } from "../App/Models/Products";
interface Props{
  products: Product[]
}
export default function ProductList({products}:Props)
{
  return(
  <Grid container spacing={4}>
    {products.map((product) =>(
      <Grid item xs={4} key={product.id}>
      <ProductCart product={product}/>
      </Grid>
    ))}
  </Grid>
  )
}