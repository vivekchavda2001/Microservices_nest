import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';


@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {

    }
    async all(): Promise<Product[]> {
        return await this.productRepository.find()
    }
    async create(data): Promise<Product> {
        return await this.productRepository.save(data)
    }
    async getById(userId: number) {

        return await this.productRepository.findOne({

            where: {

                id: userId,

            },

            select: ['id', 'image', 'title', 'likes'],

        });

    }
    async update(id: number, data): Promise<any> {
        return this.productRepository.update(id, data);
    }
    async delete(id: number): Promise<any> {
        return this.productRepository.delete(id);
    }

}
