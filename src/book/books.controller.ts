import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './interfaces/book.entity';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.booksService.getAllBooks();
  }

  @Post()
  async create(@Body() book: Book) {
    await this.booksService.createBook(book);
  }

  @Get(':id')
  async getBook(@Param() params): Promise<Book> {
    return await this.booksService.getBook(params.id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() book: Book): Promise<any> {
    book.id = Number(id);
    return this.booksService.updateBook(book);
  }

  @Delete(':id')
  async delete(@Param() params) {
    this.booksService.deleteBook(params.id);
  }
}
