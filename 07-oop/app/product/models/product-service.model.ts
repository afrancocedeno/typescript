import { IUpdateProduct, ICreateProduct } from "../dtos/product.dto"
import { IProduct } from "./product.model"

export interface IProductService {
    getAll(): IProduct[] | Promise<IProduct[]>
    create(payload: ICreateProduct): IProduct | Promise<IProduct>
    update(id: IProduct['id'], payload: IUpdateProduct): IProduct | Promise<IProduct>
    findOne(id: IProduct['id']): IProduct | undefined | Promise<IProduct | undefined> // or null in case product not found
}
