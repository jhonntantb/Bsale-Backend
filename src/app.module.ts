import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { Product } from './products/model/product.model'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
  }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      port: 3306,
      username: 'bsale_test',
      password: 'bsale_test',
      database: 'bsale_test',
      autoLoadModels: false,
      synchronize: true,
      ssl: false,
      models:[Product]
    }),
    ProductsModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
