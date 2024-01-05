import { IBaseModel } from "../../base.model";
import { ICategory } from "../../category/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export interface IProduct extends IBaseModel {
    title: string;
    price: number;
    description: string;
    category: ICategory;
    images: string[];
    // image: string;
    // stock: number;
    // size?: Sizes;
    // color: string;
    // isNew: boolean;
    // tags: string[];
}
