import { Controller, Post, Body, Put, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put('adjust')
  adjust(
    @Body() body: { productId: number; userId: number; quantityChange: number },
  ) {
    return this.productService.adjust(
      body.productId,
      body.userId,
      body.quantityChange,
    );
  }

  @Get('status/:productId')
  getStatus(@Param('productId') productId: string) {
    return this.productService.getStatus(Number(productId));
  }
}
