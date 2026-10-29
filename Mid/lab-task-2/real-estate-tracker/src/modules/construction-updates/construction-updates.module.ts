
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructionUpdate } from './construction-update.entity';
import { Project } from '../projects/project.entity';
import { ConstructionUpdatesService } from './construction-updates.service';
import { ConstructionUpdatesController } from './construction-updates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConstructionUpdate, Project])],
  providers: [ConstructionUpdatesService],
  controllers: [ConstructionUpdatesController],
})
export class ConstructionUpdatesModule {}
