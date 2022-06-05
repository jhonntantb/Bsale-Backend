import { Module } from '@nestjs/common';
import { ProductsController } from './adapters/in/products.controller';
import { ProductsMySqlService } from './adapters/out/products-mysql.service';
import { ProductsPersistenceService } from './adapters/out/products-persistence.service'
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model'

@Module({
  imports:[ SequelizeModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    ProductsMySqlService,
    ProductsPersistenceService
  ]
})
export class ProductsModule {}
