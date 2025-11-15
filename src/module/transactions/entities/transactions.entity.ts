import { Product } from '../../module/product/entities/product.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.transactions)
  product: Product;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Column()
  changeType: 'increase' | 'decrease';

  @Column()
  quantityChanged: number;

  @CreateDateColumn()
  createdAt: Date;
}
