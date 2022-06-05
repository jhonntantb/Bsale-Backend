import {ISpGetCategory } from '../adapters/out/sp-interface/sp-get-category';

export interface IGetCategoriesRequest {
    getCategories(): Promise<ISpGetCategory[]>;
}