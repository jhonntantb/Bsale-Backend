import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ICategoriesRepository } from './category.repository'
import { ISpGetCategory } from './sp-interface/sp-get-category';
import { Category} from  '../../model/category.model'


@Injectable()
export class CategoryMySqlService implements ICategoriesRepository {
    constructor(
        @InjectModel(Category) private categoryModel: typeof Category,
    ){}
     async getCategories(): Promise<ISpGetCategory[]> {
        try {
            const categories: ISpGetCategory[] = await this.categoryModel.findAll({
                attributes:[ 'id', 'name']
            })
            return categories
            
        } catch (error) {
            console.log(error)
        } 
    }
}
