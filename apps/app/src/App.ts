import { IProduct } from 'a';
import { Product } from 'domain';
export default class App extends HTMLElement {
    public sku: number;
    public constructor() {
        super();
        this.sku = 123;
        this.product = new Product(123, 'name', 123);
    }

    public product: IProduct;
}
