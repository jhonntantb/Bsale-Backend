import { ISpGetProducts } from '../adapters/out/sp-interface/sp-get-products';
import { ProductSearchDto } from '../adapters/in/dtos/search-product.dto';
import { ProductByCategoryDto} from '../adapters/in/dtos/category-product.dto';
import { PaginationDto } from '../adapters/in/dtos/product.dto';

export interface IGetProductsRequest {
    getAllProducts(dto: PaginationDto ): Promise<ISpGetProducts[]>;
    getSearchProducts(searchDto: ProductSearchDto): Promise<ISpGetProducts[]>;
    getProductsByCategory(categoryDto: ProductByCategoryDto): Promise<ISpGetProducts[]>;
    getProductsWithDiscount(dto: PaginationDto ): Promise<ISpGetProducts[]>;
}