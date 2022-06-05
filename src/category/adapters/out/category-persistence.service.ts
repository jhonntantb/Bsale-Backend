import { Injectable } from '@nestjs/common';
import { IGetCategoriesRequest} from '../../aplication/get-category.request';
import { CategoryMySqlService } from './category-mysql.service';
import { ISpGetCategory } from './sp-interface/sp-get-category';

@Injectable()
export class CategoryPersistenceService implements IGetCategoriesRequest {
    constructor(private categoryMySqlServer: CategoryMySqlService) {}

    async getCategories(): Promise<ISpGetCategory[]> {
        return this.categoryMySqlServer.getCategories();
    }
}
