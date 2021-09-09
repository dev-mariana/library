import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './book/books.module';
import { Book } from './book/interfaces/book.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_Heroku_HOST,
      port: 3306,
      username: process.env.DB_Heroku_USERNAME,
      password: process.env.DB_Heroku_PASSWORD,
      database: process.env.DB_Heroku,
      entities: [Book],
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([Book]),
    BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
