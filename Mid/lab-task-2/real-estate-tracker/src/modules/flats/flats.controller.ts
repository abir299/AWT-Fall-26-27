
import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlatsService } from './flats.service';
import { CreateFlatDto } from './create-flat.dto';

@Controller('flats')
export class FlatsController {
  constructor(private readonly flatsService: FlatsService) {}

  @Post()
  create(@Body() createFlatDto: CreateFlatDto) {
    return this.flatsService.create(createFlatDto);
  }

  @Get()
  findAll() {
    return this.flatsService.findAll();
  }
}
