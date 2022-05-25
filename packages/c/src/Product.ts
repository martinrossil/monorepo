import { IProduct } from 'a';

export default class Product implements IProduct {
    public id: number;
    public name: string;
    public sku: number;
    public constructor(id: number, name: string, sku: number) {
        this.id = id;
        this.name = name;
        this.sku = sku;
    }
}
