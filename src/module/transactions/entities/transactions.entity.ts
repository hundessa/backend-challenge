import { Product } from '../../product/entities/product.entity';
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

  @ManyToOne(() => Product, (product) => product.transactions, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  product: Product;

  @ManyToOne(() => User, (user) => user.transactions, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  user: User;

  @Column()
  changeType: 'increase' | 'decrease';

  @Column()
  quantityChanged: number;

  @CreateDateColumn()
  createdAt: Date;
}
