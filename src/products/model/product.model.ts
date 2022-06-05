import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'product' })
export class Product extends Model {
    @Column({ primaryKey: true })
    Id: number

    @Column({ allowNull: false, type: DataType.STRING(50) })
    name: string;

    @Column({ allowNull: false, type: DataType.STRING(255) })
    url_image: string;

    @Column({ allowNull: false, type: DataType.INTEGER })
    price: number;

    @Column({ allowNull: false, type: DataType.INTEGER })
    discount: string;

    @Column({ allowNull: false, type: DataType.INTEGER })
    category: string;
}