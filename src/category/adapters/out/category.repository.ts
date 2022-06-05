import { ISpGetCategory } from './sp-interface/sp-get-category';

export interface ICategoriesRepository {
    getCategories(): Promise<ISpGetCategory[]>;
}
