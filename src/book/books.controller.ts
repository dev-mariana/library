import { ValidationParameters } from './../common/pipes/validation-parameters.pipe';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
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
  @UsePipes(ValidationPipe)
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.booksService.createBook(createBookDto);
  }

  @Get(':id')
  async getBook(@Param('id', ValidationParameters) id: string): Promise<Book> {
    return await this.booksService.getBook(id);
  }

  @Put(':id')
  async update(@Param('id', ValidationParameters) id: string, @Body() updateBookDto: UpdateBookDto): Promise<void> {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async delete(@Param('id', ValidationParameters) id: string): Promise<any> {
    return this.booksService.deleteBook(id);
  }
}
