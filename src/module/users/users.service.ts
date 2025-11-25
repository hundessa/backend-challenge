import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.repo.find();
  }

  async findOneUser(id: number): Promise<User> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async register(userDto: CreateUserDto): Promise<User> {
    try {
      const existingUser = await this.repo.findOne({
        where: { email: userDto.email },
      });
      if (existingUser) throw new BadRequestException('User already exists');

      const hashedPass = await bcrypt.hash(userDto.password, 10);

      const newUser = this.repo.create({ ...userDto, password: hashedPass });
      return this.repo.save(newUser);
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new InternalServerErrorException(err.message);
      }
      throw new InternalServerErrorException('Unexpected error occurred');
    }
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');

    await this.repo.delete(id);
    return user;
  }
}
