import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from  "cart/CartShow";

mountProducts("#container-products");
mountCart("#container-cart")

console.log("container");
