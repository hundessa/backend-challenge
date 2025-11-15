import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>, // now 'repo' is a fully functional User repository
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.repo.find();
  }

  async findOneUser(id: number): Promise<User> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
  }): Promise<User> {
    const newUser = this.repo.create(userData);
    return this.repo.save(newUser);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    await this.repo.delete(id);
    return user;
  }
}
