import { Product } from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

const newProd = new Product("", -5.98);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation Errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

const loadedProducts = plainToInstance(Product, products);

console.log(loadedProducts);
