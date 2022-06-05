import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { QueryTypes, Sequelize } from 'sequelize';
import { ICategoriesRepository } from './category.repository'
import { ISpGetCategory } from './sp-interface/sp-get-category';

@Injectable()
export class CategoryMySqlService implements ICategoriesRepository {
    constructor(
        @InjectConnection() private connection: Sequelize,
    ){}
     async getCategories(): Promise<ISpGetCategory[]> {
        try {
            const query = `SELECT name as categoryName FROM category;`;

            const categories: ISpGetCategory[] = await this.connection.query(query,{
                type: QueryTypes.SELECT,
                raw: true,
            })
            console.log({categories})

            return categories
            
        } catch (error) {
            console.log(error)
        } 
    }
}
