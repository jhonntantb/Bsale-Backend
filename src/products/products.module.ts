import { Module } from '@nestjs/common';
import { ProductsController } from './adapters/in/products.controller';
import { ProductsService } from './adapters/out/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
