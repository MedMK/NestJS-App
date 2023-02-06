import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post()
  Add(@Body() body: UserDto) {
    return this.service.Add(body);
  }
  @Get()
  findall() {
    return this.service.findall();
  }
  @Get('/:id')
  findone(@Param('id') id: string) {
    return this.service.findone(id);
  }
  @Put('/:id')
  update(@Param('id') id: string, @Body() body: UserDto) {
    return this.service.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
  @Post('/search')
  search(@Query('key') key: string) {
    return this.service.search(key);
  }
}