import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class UpdateBookDto {
  
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    publisher: string;
  
    @IsString()
    photo: string;
  
    @IsString()
    description: string;

    @IsArray()
    @ArrayMinSize(1)
    authors: string[];

    @IsDateString()
    released_at: Date;
}