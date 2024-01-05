import { faker } from "@faker-js/faker";
import { ProductMemoryService } from "./product/services/product-memory.service";
import { ProductHttpService } from "./product/services/product-http.service";

const productMemoryService = new ProductMemoryService()

// productMemoryService.getAll()

/* console.log('products start');

console.log(productMemoryService.getAll());

productMemoryService.create({

    title: 'primer producto',
    price: 100,
    description: 'primera descripcion de producto',
    images: [],
    categoryId: faker.number.int({max: 10})

})

console.log('product added');

console.log(productMemoryService.getAll());

productMemoryService.update(10, {

    title: 'primer producto modificado'

})

console.log('product updated');

console.log(productMemoryService.getAll());

console.log(productMemoryService.findOne(10));
 */

const productHttpService = new ProductHttpService()
// create singleton

console.log('get products start');

// with top level await
const products = await productHttpService.getAll()
console.log(products.length);
console.log(products[0]);

console.log('create products');

const updatePayload = {
    title: "new title for first product"
  }

// with top level await
const updatedProduct = await productHttpService.update(252, updatePayload)
console.log(updatedProduct);
