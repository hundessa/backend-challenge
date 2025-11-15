import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(
    @Body() body: { firstName: string; lastName: string; email: string },
  ): Promise<User> {
    return this.usersService.createUser(body);
  }
}
