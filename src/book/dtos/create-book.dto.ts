export class CreateBookDto {
  
    title: string;
    
    publisher: string;
  
    photo: string;
  
    authors: string[];

    description: string;
  
    released_at: Date;
}