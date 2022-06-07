import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<(import("./product.model").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    product_Created(Product: any): Promise<void>;
    product_Updated(Product: any): Promise<void>;
    product_Deleted(id: number): Promise<void>;
}
