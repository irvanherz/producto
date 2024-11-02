import { z } from "zod"

export type Product = {
  id: number
  name: string
  description: string
  qty: number
  createdAt?: string
  updatedAt?: string
}

export type  CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>

export type  UpdateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>

export const CreateProductSchema = z.object({
  name: z.string().min(1, { message: "Product name invalid" }).max(50, { message: "Product name too long" }),
  description: z.string().min(1, { message: "Product description invalid" }).max(500, { message: "Product description too long" }),
  qty: z.coerce.number().min(0,{ message: "Product quantity invalid" })
})

export const UpdateProductSchema = z.object({
  name: z.string().min(2, { message: "Product name invalid" }).max(50, { message: "Product name too long" }),
  description: z.string().min(2, { message: "Product description invalid" }).max(500, { message: "Product description too long" }),
  qty: z.coerce.number().min(0,{ message: "Product quantity invalid" })
})
