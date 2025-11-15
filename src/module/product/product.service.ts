import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/module/users/users.service';
import { TransactionsService } from 'src/transactions/transactions.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private transactionsService: TransactionsService,
    private usersService: UsersService,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async adjust(productId: number, userId: number, quantityChange: number) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product) throw new NotFoundException('Product not found');

    product.quantity += quantityChange;
    await this.productRepository.save(product);

    const user = await this.usersService
      .getAllUsers()
      .then((users) => users.find((u) => u.id === userId));
    if (!user) throw new NotFoundException('User not found');

    return this.transactionsService.create({
      product,
      user,
      quantityChanged: quantityChange,
      changeType: quantityChange > 0 ? 'increase' : 'decrease',
    });
  }

  async getStatus(productId: number) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }
}
