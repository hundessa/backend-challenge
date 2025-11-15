import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactions } from './entities/transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private transactionRepository: Repository<Transactions>,
  ) {}

  getAllTransaction() {
    return this.transactionRepository.find({ relations: ['user', 'product'] });
  }

  create(data: Partial<Transactions>) {
    const transaction = this.transactionRepository.create(data); // ✅ singular
    return this.transactionRepository.save(transaction); // ✅ singular
  }
}
