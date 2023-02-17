import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateHistoryItemDto } from './dto/create.historyitem.dto';
import { HISTORY_SERVICE } from './constants';
import { IHistoryService } from './interfaces/interface';

@Controller('/history')
export class HistoryController {
  constructor(
    @Inject(HISTORY_SERVICE)
    private historyService: IHistoryService,
  ) {}

  @Post()
  create(@Body() dto: CreateHistoryItemDto) {
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
