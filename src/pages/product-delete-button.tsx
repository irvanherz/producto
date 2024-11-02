import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { destroy } from "@/redux/product.slice";
import { Product } from "@/types/product";
import { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";

type ProductDeleteButtonProps = {
  product: Product;
  children: ReactElement
};
export function ProductDeleteButton({ product, children }: ProductDeleteButtonProps) {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(destroy({ id: product.id }))
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your product from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
