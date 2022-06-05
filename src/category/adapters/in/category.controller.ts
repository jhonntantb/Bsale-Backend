import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IGetCategoriesRequest } from '../../aplication/get-category.request';
import { CategoryPersistenceService } from '../out/category-persistence.service';
import { GetCategoryResponse } from './dtos/category.dto';

const entity = 'category';
@ApiTags(entity)
@Controller({
    path: entity,
    version: '1',
})
export class CategoryController {
    private getCategoriesRequest : IGetCategoriesRequest;

    constructor(
        categoriesPersistenceService: CategoryPersistenceService,
    ){
        this.getCategoriesRequest = categoriesPersistenceService;
    }
    
    @Get()
    @ApiOkResponse({type: GetCategoryResponse})
    async  getCategories(){
        const categories = await this.getCategoriesRequest.getCategories(); 
        return categories;
    }
}
