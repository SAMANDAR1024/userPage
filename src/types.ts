export type ProductStore = {
  productsData: ProductDataType[];
  cart: ProductDataType[];
  loading: boolean;
  fetchProducts: () => void;
  addToCart: (product: ProductDataType) => void;
};

export type Catigories_Product_Id = {
  items: | [] | {
        categoryId: number;
        createdAt: string;
        description: string;
        id: number;
        imageUrl: string;
        name: string;
        price: string;
        stock: number;
      }[];
  limit: number;
  page: number;
  totalItems: number;
};

export type ProductId = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  stock: number;
};

export type CatigoriaType = {
  createdAt: string;
  description: string;
  id: number;
  name: string;
};

export type ProductDataType = {
  id: number;
  name: string;
  imageUrl: string;
  stock: number;
  price: string;
  description: string;
  createdAt: string;
  categoryId: number;
};

export type BannerType = {
  id: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
};
