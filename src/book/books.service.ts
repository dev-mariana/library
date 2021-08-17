import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Book } from "./interfaces/book.entity";

@Injectable()
export class BooksService {
    constructor(@InjectRepository(Book) private booksRepository: Repository<Book>) {}

    async getAllBooks(): Promise<Book[]> {
        return await this.booksRepository.find();
    }

    async createBook(book: Book) {
        await this.booksRepository.save(book);
    }

    async getBook(id: string): Promise<Book> {
        return await this.booksRepository.findOne(id);
    }

    async updateBook(book: Book): Promise<UpdateResult> {
        return await this.booksRepository.update(book.id, book);
    }

    async deleteBook(id: string): Promise<void> {
        await this.booksRepository.delete(id);
      }
}