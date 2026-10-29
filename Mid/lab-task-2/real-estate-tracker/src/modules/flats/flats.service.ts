
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flat } from './flat.entity';
import { Project } from '../projects/project.entity';
import { CreateFlatDto } from './create-flat.dto';

@Injectable()
export class FlatsService {
  constructor(
    @InjectRepository(Flat)
    private readonly flatRepository: Repository<Flat>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(dto: CreateFlatDto): Promise<Flat> {
    const project = await this.projectRepository.findOneBy({
      id: dto.projectId,
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    const flat = this.flatRepository.create({
      flatNumber: dto.flatNumber,
      floor: dto.floor,
      sizeSqft: dto.sizeSqft,
      customerName: dto.customerName,
      project,
    });

    return this.flatRepository.save(flat);
  }

  async findAll(): Promise<Flat[]> {
    return this.flatRepository.find({
      relations: ['project'],
    });
  }
}
