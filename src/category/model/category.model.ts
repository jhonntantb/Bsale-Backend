import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'category' })
export class Category extends Model {
    @Column({ primaryKey: true })
    Id: number

    @Column({ allowNull: false, type: DataType.STRING(100) })
    name: string;
}