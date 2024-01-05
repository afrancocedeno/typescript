import axios from "axios";
import { ICreateProduct, IUpdateProduct } from "../dtos/product.dto";
import { IProductService } from "../models/product-service.model";
import { IProduct } from "../models/product.model";

export class ProductHttpService implements IProductService {

    private url = 'https://api.escuelajs.co/api/v1/products'

    async getAll(): Promise<IProduct[]> {

        const { data } = await axios.get<IProduct[]>(this.url)

        if (data) {
            return data
        }

        throw new Error("method error");

    }

    async create(payload: ICreateProduct): Promise<IProduct> {

        const { data } = await axios.post(this.url, payload)

        if (data) {
            return data
        }

        throw new Error("method error");

    }

    async update(id: IProduct['id'], payload: IUpdateProduct) {

        try {

            const { data } = await axios.put(`${this.url}/${id}`, payload)

            if (data) {

                return data

            }

        } catch (error) {

            console.error(error)

        }
    }

    async findOne(id: IProduct['id']): Promise<IProduct | undefined> {

        const { data } = await axios.get(`${this.url}/${id}`)

        return data
    }

}
