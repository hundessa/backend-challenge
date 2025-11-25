import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get('/:userId')
  findOneUser(@Param('userId') userId: number) {
    return this.usersService.findOneUser(Number(userId));
  }

  @Post('register')
  createUser(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.register(userDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    const deletedUser = this.usersService.deleteUser(id);
    return {
      message: `User with id ${id} deleted successfully`,
      deleteUser: deletedUser,
    };
  }
}
