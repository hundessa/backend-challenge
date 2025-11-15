import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  productPrice: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  quantity: number;
}
