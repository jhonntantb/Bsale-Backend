import { Module } from '@nestjs/common';
import { CategoryController } from './adapters/in/category.controller';
import { CategoryMySqlService} from './adapters/out/category-mysql.service';
import { CategoryPersistenceService }from './adapters/out/category-persistence.service'

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryMySqlService,
    CategoryPersistenceService,
  ]
})
export class CategoryModule {}
