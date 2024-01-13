import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../App/Models/Products";
interface Props{
  product: Product
}
export default function ProductCart({product}: Props){
return(
  <>
      <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>
</>
)
}