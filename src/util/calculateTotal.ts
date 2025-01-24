import type { IProductInCart } from "@/interface/product.interface";

export const calculateTotal = (itemInCart: IProductInCart[]) => {
  return itemInCart.reduce(
    (sum, item) => sum + item.price * (item.qty || 0),
    0
  );
};
