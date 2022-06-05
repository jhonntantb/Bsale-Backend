import { Injectable } from '@nestjs/common';
import { IGetProductsRequest} from '../../application/get-products.request';
import { ProductsMySqlService } from './products-mysql.service';
import { ISpGetProducts } from './sp-interface/sp-get-products';
import { ProductSearchDto} from '../in/dtos/search-product.dto'
import { ProductByCategoryDto } from '../in/dtos/category-product.dto';
import { PaginationDto } from '../in/dtos/product.dto';
@Injectable()
export class ProductsPersistenceService implements IGetProductsRequest {
    constructor(private productMySqlServer: ProductsMySqlService) {}

    getAllProducts(dto: PaginationDto): Promise<ISpGetProducts[]> {
        return this.productMySqlServer.getAllProducts(dto);
    }
    getSearchProducts(searchDto: ProductSearchDto): Promise<ISpGetProducts[]> {
        return this.productMySqlServer.getSearchProducts(searchDto);
    }
    getProductsByCategory(categoryDto: ProductByCategoryDto): Promise<ISpGetProducts[]> {
        return this.productMySqlServer.getProductsByCategory(categoryDto);
    }
    
}
