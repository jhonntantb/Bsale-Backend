import { Module } from '@nestjs/common';
import { CategoryController } from './adapters/in/category.controller';
import { CategoryService } from './adapters/out/category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
