import {
  Controller,
  Post,
  Body,
  Put,
  Get,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
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

  @Get('/:productId')
  getStatus(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.getStatus(productId);
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Delete('/:productId')
  deleteProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.deleteProduct(productId);
  }
}
