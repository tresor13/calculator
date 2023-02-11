import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateHistoryItemDto } from './dto/create-historyitem.dto';
import { HistoryService } from './history.service';

@Controller('/history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  @Post()
  create(@Body() dto: CreateHistoryItemDto) {
    // const result = getResult(dto.expression);
    // const postDto = { expression: dto.expression, result };
    return this.historyService.create(dto);
  }

  @Get()
  getAll() {
    return this.historyService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.historyService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.historyService.delete(id);
  }
}
