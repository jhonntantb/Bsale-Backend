import { ISpGetProducts } from './sp-interface/sp-get-products';
import { ProductSearchDto } from '../in/dtos/search-product.dto';
import { ProductByCategoryDto } from '../in/dtos/category-product.dto'

export interface IProductsRepository {
    getAllProducts(): Promise<ISpGetProducts[]>;
    getSearchProducts( searchdto: ProductSearchDto): Promise<any[]>;
    getProductsByCategory( categoryDto: ProductByCategoryDto): Promise<ISpGetProducts[]>;
}