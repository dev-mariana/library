import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/interfaces/book.entity';
import { BooksController } from './book/books.controller';
import { BooksService } from './book/books.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      entities: [Book],
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([Book])
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {
  constructor() {}
}
