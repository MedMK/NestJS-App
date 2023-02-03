import { Controller, Delete, Get, Param, Post,Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post()
  Add() {
    return 'Add';
  }
  @Get()
  findall() {
    return 'all users';
  }
  @Get('/:id')
  findone(@Param('id') id: string) {
    return id; }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return id;
  }
  @Post('/search')
    search(@Query('key') key ) {
        return key;
}

}