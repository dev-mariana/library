export class CreateBookDto {
  
    title: string;
    
    publisher: string;
  
    photo: string;
  
    authors: string[];
  
    released_at: Date;
}