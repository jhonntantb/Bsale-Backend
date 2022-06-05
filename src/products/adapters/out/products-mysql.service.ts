import { Injectable } from '@nestjs/common';
import { IProductsRepository } from './products.repository'
import { ISpGetProducts } from './sp-interface/sp-get-products';
import { InjectModel } from '@nestjs/sequelize';
import { Product} from '../../model/product.model'
import { Op } from 'sequelize';
import { ProductSearchDto } from '../in/dtos/search-product.dto';
import { ProductByCategoryDto }from '../in/dtos/category-product.dto';
import { PaginationDto } from '../in/dtos/product.dto'


@Injectable()
export class ProductsMySqlService implements IProductsRepository {
    constructor(
        @InjectModel(Product) private productModel: typeof Product,
    ){}

    async getAllProducts(dto: PaginationDto): Promise<any> {
        try {
            const products: any[] = await this.productModel.findAll({
                attributes:['name', 'url_image', 'price', 'discount', 'category']
            })
            const count = await this.productModel.count();
            return {totalItems: count, start:dto.start, size: dto.size, results:products}
        } catch (error) {
            console.log("error",error)
        }
    }
    async getSearchProducts(searchDto: ProductSearchDto): Promise<any> {
        try {
            const products: any[] = await this.productModel.findAll({
                where: {
                    name:{
                        [Op.like]: `%${searchDto.search}%`,
                    }
                },
                attributes:['name', 'url_image', 'price', 'discount', 'category'],
                limit: parseInt(searchDto.size),
                offset: parseInt(searchDto.start),

            })
            const count = await this.productModel.count({
                where: {
                    name:{
                        [Op.like]: `%${searchDto.search}%`,
                    }
                }
            });
            return {totalItems: count, start:searchDto.start, size: searchDto.size, results:products}
        } catch (error) {
            console.log('error',error)
        }
    }
    async getProductsByCategory( dto: ProductByCategoryDto): Promise<any> {
        try {
            const products: any[] = await this.productModel.findAll({
                where:{
                    category: parseInt(dto.categoryId)
                },
                attributes:['name', 'url_image', 'price', 'discount', 'category'],
                limit: parseInt(dto.size),
                offset: parseInt(dto.start),
            })
            const count = await this.productModel.count( {
                where:{
                    category: parseInt(dto.categoryId)
                }
            });
            return {totalItems: count, start:dto.start, size: dto.size, results:products}
        } catch (error) {
            console.log(error)
        }
    }
}
