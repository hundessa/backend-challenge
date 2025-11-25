import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './module/users/entities/user.entity';
import { Product } from './module/product/entities/product.entity';
import { Transactions } from './module/transactions/entities/transactions.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password123',
  database: process.env.DATABASE_NAME || 'nest_db',
  synchronize: false, // Always false for migrations
  logging: true,
  entities: [User, Product, Transactions],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
