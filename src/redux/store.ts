import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productSlice } from "./product.slice";

const persistConfig = {
  key: "root",
  storage,
};
  
const persistedProductSliceReducer = persistReducer(persistConfig, productSlice.reducer);

export const store = configureStore({
  reducer: {
    products: persistedProductSliceReducer,
  },
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>