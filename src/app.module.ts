import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      port: 3306,
      username: 'bsale_test',
      password: 'bsale_test',
      database: 'bsale_test',
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
