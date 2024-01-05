import { ICategory } from "../../category/category.model";
import { IProduct } from "../models/product.model";

export interface ICreateProduct extends Omit<IProduct, 'id' | 'createdAd' | 'updatedAt' | 'category'> {
    categoryId: ICategory['id']
}

export interface IUpdateProduct extends Partial<ICreateProduct> {}