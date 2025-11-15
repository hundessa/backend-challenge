import { forwardRef, Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { Transactions } from './entities/transactions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsService } from './transactions.service';
import { ProductModule } from 'src/product/product.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transactions]),
    forwardRef(() => ProductModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
