import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> | null {
    console.log(id);
    return this.service.findOne(id);
  }

  @Post()
  save(@Body() user: User): any {
    console.log(user);
    return this.service.save(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User) {
    return this.service.update(id, user);
  }

  @Delete(':id')
  async delete(id: number): Promise<void> | null {
    return this.service.delete(id);
  }
}
