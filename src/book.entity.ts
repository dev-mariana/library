import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('books')
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  photo: string;

  @Column('simple-array')
  authors: string[];

  @CreateDateColumn()
  released_at: Date;
}