export interface Product {
  is?: number;
  name?: string;
  image?: string;
  description: string;
}
export interface getProductResponse {
  data: {
    count: number;
    categories: Product[];
  };
}
