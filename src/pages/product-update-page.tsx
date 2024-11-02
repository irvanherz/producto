import { LayoutStd } from "@/components/layout-std";
import { ProductForm } from "@/components/product-form";
import { Button } from "@/components/ui/button";
import { update } from "@/redux/product.slice";
import { RootState } from "@/redux/store";
import { CreateProductDto, CreateProductSchema, Product } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

export function ProductUpdatePage(){
  const dispatch = useDispatch()
  const params = useParams()
  const productId = +(params.productId || '0')
  const product = useSelector<RootState,Product | undefined>(state => state.products.data.find(p => p.id === productId))

  const form = useForm<CreateProductDto>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      name: "",
      description: "",
      qty: 0,
    },
  })

  useEffect(() => {
    if(!product) return
    form.reset(product)
  }, [product])
    
  function onSubmit(data: CreateProductDto) {
    dispatch(update({ id: productId, data }))
    toast("Changes saved!")
  }
  
  function onValidationFailed(){
    toast("Check all fields and then try again")
  }

  return (
    <LayoutStd containerClassName="space-y-4">
      <FormProvider {...form}>
        <ProductForm />
      </FormProvider>
      <Button onClick={form.handleSubmit(onSubmit, onValidationFailed)}>Update Product</Button>
    </LayoutStd>
  )
}