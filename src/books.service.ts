import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "./book.entity";

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

    // async updateBook(id: string, book: Book): Promise<[string, Book[]]> {
    //     const book_id = await this.booksRepository.findOne(book, { where : { id: book.id }});
    //     return this.booksRepository.save(book_id);
    // }

    async deleteBook(id: string): Promise<void> {
        await this.booksRepository.delete(id);
      }
}