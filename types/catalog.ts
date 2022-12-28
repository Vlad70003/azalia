export interface RatingTypes {
  count: number;
  rate: number;
}

export interface CatalogTypes {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: RatingTypes;
}
