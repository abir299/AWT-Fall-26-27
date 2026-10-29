
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConstructionUpdatesService } from './construction-updates.service';
import { CreateConstructionUpdateDto } from './create-construction-update.dto';

@Controller('construction-updates')
export class ConstructionUpdatesController {
  constructor(
    private readonly constructionUpdatesService: ConstructionUpdatesService,
  ) {}

  @Post()
  create(@Body() dto: CreateConstructionUpdateDto) {
    return this.constructionUpdatesService.create(dto);
  }

  @Get()
  findAll() {
    return this.constructionUpdatesService.findAll();
  }
}
