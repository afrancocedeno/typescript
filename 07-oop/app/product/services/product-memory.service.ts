import { faker } from "@faker-js/faker";
import { IProductService } from "../models/product-service.model";
import { IProduct } from "../models/product.model";
import { ICreateProduct, IUpdateProduct } from "../dtos/product.dto";

export class ProductMemoryService implements IProductService {

    private products: IProduct[] = []

    getAll(): IProduct[] {

        return this.products

    }

    create(payload: ICreateProduct): IProduct {

        const newProduct = {

            ...payload,
            // id: faker.number.int({ max: 10 }),
            id: 10,
            // createdAt: faker.date.recent(),
            // updaterAt: faker.date.recent(),
            category: {
                id: payload.categoryId,
                name: faker.commerce.department(),
                image: faker.image.url()
            }
        }

        return this.add(newProduct)

    }

    add(payload: IProduct): IProduct {

        this.products.push(payload)

        return payload

    }

    update(id: IProduct['id'], payload: IUpdateProduct): IProduct {

        let indexFound = 0

        this.products = this.products.map((item, index) => {

            if (item.id === id) {

                indexFound = index

                return { ...item, ...payload }

            }

            return item

        })

        // return the new product in the array
        return this.products[indexFound]

    }

    findOne(id: IProduct['id']): IProduct | undefined {

        return this.products.find((item) => { return item.id === id ? item : undefined })

    }

}