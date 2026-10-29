
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from '../projects/project.entity';

@Entity('construction_updates')
export class ConstructionUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, { nullable: false })
  project: Project;

  @Column({ length: 100 })
  stage: string;

  @Column({ type: 'int' })
  progressPercentage: number;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn()
  updateDate: Date;
}
