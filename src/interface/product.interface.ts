interface IProduct {
  created_at: string;
  description: string;
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  rating: number;
  status: ProductStatusEnum;
}

interface IProductInCart extends IProduct {
  qty: number;
}
