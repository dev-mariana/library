import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('books')
export class Book {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  photo: string;

  @Column('simple-array')
  authors: string[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}