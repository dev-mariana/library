import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { CreateBookDto } from "./dtos/create-book.dto";
import { UpdateBookDto } from "./dtos/update-book.dto";
import { Book } from "./interfaces/book.entity";

@Injectable()
export class BooksService {
    constructor(@InjectRepository(Book) private booksRepository: Repository<Book>) {}

    async getAllBooks(): Promise<Book[]> {
        return await this.booksRepository.find();
    }

    async createBook(createBookDto: CreateBookDto): Promise<void> {
        await this.booksRepository.save(createBookDto);
    }

    async getBook(id: string): Promise<Book> {
        return await this.booksRepository.findOne(id);
    }

    async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<void> {
        await this.booksRepository.update(id, updateBookDto);
    }

    async deleteBook(id: string): Promise<void> {
        await this.booksRepository.delete(id);
      }
}