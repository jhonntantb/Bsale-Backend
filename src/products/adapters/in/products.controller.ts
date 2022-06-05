import { Controller, Get, DefaultValuePipe, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductsPersistenceService } from '../out/products-persistence.service';
import { IGetProductsRequest } from '../../application/get-products.request';
import { ProductSearchDto } from './dtos/search-product.dto';
import { ProductByCategoryDto } from './dtos/category-product.dto';
import { ProductSearchResponse } from './dtos/product.dto';
import { PaginationDto } from '../in/dtos/product.dto'


const entity = 'products';
@ApiTags(entity)
@Controller({
    path: entity,
    version: '1'
})
export class ProductsController {
    private getproductRequest:  IGetProductsRequest
    constructor(
        productPersistenceService: ProductsPersistenceService
    ){
        this.getproductRequest = productPersistenceService
    }

    @Get()
    @ApiOkResponse({type:  ProductSearchResponse})
    async getAllProducts(
        @Query('start', new DefaultValuePipe('0')) start: string,
        @Query('size', new DefaultValuePipe('10')) size: string,
    ) {
        const query: PaginationDto = {start, size}
        const products = await this.getproductRequest.getAllProducts(query)
        return products;
    };

    @Get('search')
    @ApiOkResponse({type:  ProductSearchResponse})
    async getSearchProducts(
        @Query('start', new DefaultValuePipe('0')) start: string,
        @Query('size', new DefaultValuePipe('10')) size: string,
        @Query('search', new DefaultValuePipe('')) search: string,
    ) {
        const query: ProductSearchDto ={search, start, size} 
        const products = await this.getproductRequest.getSearchProducts(query)
        return products;
    }

    @Get('category')
    @ApiOkResponse({type:  ProductSearchResponse})
    async getProductsByCategoy(
        @Query('categoryId', new DefaultValuePipe('2')) categoryId: string,
        @Query('start', new DefaultValuePipe('0')) start: string,
        @Query('size', new DefaultValuePipe('10')) size: string,

    ) {
        const query: ProductByCategoryDto ={categoryId, start, size} 
        const products = await this.getproductRequest.getProductsByCategory(query)
        return products;
    }
}
