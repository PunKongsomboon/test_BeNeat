import { ProductStatusEnum } from "@/enum/productStatus.enum";

export interface IProduct {
  created_at: string;
  description: string;
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  rating: number;
  status: ProductStatusEnum;
}

export interface IProductInCart extends IProduct {
  qty: number;
}
