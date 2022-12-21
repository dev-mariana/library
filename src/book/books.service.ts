import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { Book } from './interfaces/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const { title } = createBookDto;
    const found_book = await this.booksRepository.findOne({ title });

    if (found_book) {
      throw new BadRequestException(`${title} already exists!`);
    }

    return await this.booksRepository.save(createBookDto);
  }

  async getBook(id: string): Promise<Book> {
    const found_book = await this.booksRepository.findOne({ id });

    if (!found_book) {
      throw new NotFoundException(`Book with id ${id} doesn't exists.`);
    }

    return await this.booksRepository.findOne(id);
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<void> {
    const found_book = await this.booksRepository.findOne({ id });

    if (!found_book) {
      throw new NotFoundException(`Book with id ${id} doesn't exists.`);
    }

    await this.booksRepository.update(id, updateBookDto);
  }

  async deleteBook(id: string): Promise<any> {
    const found_book = await this.booksRepository.findOne({ id });

    if (!found_book) {
      throw new NotFoundException(`Book with id ${id} doesn't exists.`);
    }

    return await this.booksRepository.delete(id);
  }
}
