import { Model } from 'mongoose';
import { ProductDocument, Product } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(data: any): Promise<Product>;
    findOne(id: number): Promise<Product>;
    update(id: any, data: any): Promise<Product>;
    deleted(id: any): Promise<void>;
}
