import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './interfaces/book.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.booksService.getAllBooks();
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<void> {
    await this.booksService.createBook(createBookDto);
  }

  @Get(':id')
  async getBook(@Param() params): Promise<Book> {
    return await this.booksService.getBook(params.id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<void> {
    // book.id = String(id);
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async delete(@Param() params) {
    this.booksService.deleteBook(params.id);
  }
}
