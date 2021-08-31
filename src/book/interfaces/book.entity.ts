import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'; 

@Entity('books')
export class Book {

  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  photo: string;

  @Column()
  description: string;
  
  @Column('simple-array')
  authors: string[];
  
  @CreateDateColumn()
  released_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}