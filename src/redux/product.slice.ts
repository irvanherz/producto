import { CreateProductDto, Product } from "@/types/product"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

type CreateProductPayload = {
  data: CreateProductDto
}

type UpdateProductPayload = {
  id: number
  data: CreateProductDto
}

type DeleteProductPayload = {
  id: number
}

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [] as Product[]
  },
  reducers: {
    create: (state, action: PayloadAction<CreateProductPayload>) => {
      const id = (state.data.at(-1)?.id || 0) + 1
      const createdAt = dayjs().toISOString()
      const updatedAt = createdAt
      const input = {...action.payload.data, id, createdAt, updatedAt}
      state.data.push(input)
    },
    update: (state, action: PayloadAction<UpdateProductPayload>) => {
      const targetIndex = state.data.findIndex(p => p.id === action.payload.id)
      if (targetIndex === -1) return
      const oldTarget = state.data[targetIndex]
      const updatedAt = dayjs().toISOString()
      state.data[targetIndex] = {...oldTarget, ...action.payload.data, updatedAt}
    },
    destroy: (state, action: PayloadAction<DeleteProductPayload>) => {
      const targetIndex = state.data.findIndex(p => p.id === action.payload.id)
      if (targetIndex === -1) return
      state.data.splice(targetIndex, 1)
    }
  }
})

export const { create, update, destroy } = productSlice.actions
export default productSlice.reducer