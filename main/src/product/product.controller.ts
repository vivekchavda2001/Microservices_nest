import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {

    }
    @Get()
    async all() {
        return this.productService.all()
    }

    @EventPattern('product_created')
    async product_Created(Product: any) {
        await this.productService.create({
            id: Product.id,
            title: Product.title,
            image: Product.image,
            likes: Product.likes
        })
        console.log('product Created Called');

    }

    @EventPattern('product_updated')
    async product_Updated(Product: any) {
        await this.productService.update(Product.id, {
            id: Product.id,
            title: Product.title,
            image: Product.image,
            likes: Product.likes
        })
        console.log('product updated  Called');

    }

    @EventPattern('product_deleted')
    async product_Deleted(id: number) {
        await this.productService.deleted(id)
        console.log('product Deleted  Called');
    }

}

