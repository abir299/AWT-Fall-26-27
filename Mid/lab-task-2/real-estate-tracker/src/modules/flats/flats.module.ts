
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flat } from './flat.entity';
import { Project } from '../projects/project.entity';
import { FlatsService } from './flats.service';
import { FlatsController } from './flats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Flat, Project])],
  providers: [FlatsService],
  controllers: [FlatsController],
})
export class FlatsModule {}
