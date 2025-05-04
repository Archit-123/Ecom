import { Schema, model, models, Document, Model } from "mongoose";
export type Product = {
  productName: string;
  price: number;
  category: string;
  image: string;
};

export interface ProductDocument extends Product, Document {}

const ProductSchema = new Schema<ProductDocument>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

const ProductModel: Model<ProductDocument> =
  models.Product || model<ProductDocument>("Product", ProductSchema);

export default ProductModel;
