import { LayoutStd } from "@/components/layout-std";
import { ProductForm } from "@/components/product-form";
import { Button } from "@/components/ui/button";
import { create } from "@/redux/product.slice";
import { CreateProductDto, CreateProductSchema } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export function ProductAddPage(){
  const dispatch = useDispatch()
  const form = useForm<CreateProductDto>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      name: "",
      description: "",
      qty: 0,
    },
  })
    
  function onSubmit(data: CreateProductDto) {
    dispatch(create({ data }))
    toast("Product created!")
    form.reset()
  }

  function onValidationFailed(){
    toast("Check all fields and then try again")
  }

  return (
    <LayoutStd activeMenuId="product-add" containerClassName="space-y-4">
      <FormProvider {...form}>
        <ProductForm />
      </FormProvider>
      <Button onClick={form.handleSubmit(onSubmit, onValidationFailed)}>Add New Product</Button>
    </LayoutStd>
  )
}