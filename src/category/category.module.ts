import { Module } from '@nestjs/common';
import { CategoryController } from './adapters/in/category.controller';
import { CategoryMySqlService} from './adapters/out/category-mysql.service';
import { CategoryPersistenceService }from './adapters/out/category-persistence.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './model/category.model'

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [
    CategoryMySqlService,
    CategoryPersistenceService,
  ]
})
export class CategoryModule {}
