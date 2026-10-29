
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConstructionUpdate } from './construction-update.entity';
import { Project } from '../projects/project.entity';
import { CreateConstructionUpdateDto } from './create-construction-update.dto';

@Injectable()
export class ConstructionUpdatesService {
  constructor(
    @InjectRepository(ConstructionUpdate)
    private readonly updateRepository: Repository<ConstructionUpdate>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(
    dto: CreateConstructionUpdateDto,
  ): Promise<ConstructionUpdate> {
    const project = await this.projectRepository.findOneBy({
      id: dto.projectId,
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    const update = this.updateRepository.create({
      project,
      stage: dto.stage,
      progressPercentage: dto.progressPercentage,
      description: dto.description,
    });

    return this.updateRepository.save(update);
  }

  async findAll(): Promise<ConstructionUpdate[]> {
    return this.updateRepository.find({
      relations: ['project'],
    });
  }
}
