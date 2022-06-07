import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument, Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Products') private readonly productModel: Model<ProductDocument>
    ) { }
    async all() {
        return this.productModel.find().exec()
    }
    async create(data): Promise<Product> {
        return new this.productModel(data).save();
    }
    async findOne(id: number): Promise<Product> {
        return await this.productModel.findOne({ id });
    }
    async update(id, data): Promise<Product> {
        return this.productModel.findOneAndUpdate({ id }, data);
    }
    async deleted(id): Promise<void> {
        await this.productModel.deleteOne({ id });
    }

}
