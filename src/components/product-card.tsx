import { ProductDeleteButton } from "@/pages/product-delete-button"
import { Product } from "@/types/product"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps){
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardDescription className="text-xs text-muted-foreground">Qty: {product.qty}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <div className="flex-1">
          <ProductDeleteButton product={product}>
            <Button size='sm' variant='destructive' className="w-full">Delete</Button>
          </ProductDeleteButton>
        </div>
        <div className="flex-1">
          <Link to={`/products/${product.id}/edit`} className="w-full">
            <Button size='sm' className="w-full">Edit</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}