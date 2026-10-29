
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from '../projects/project.entity';

@Entity('flats')
export class Flat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  flatNumber: string;

  @Column({ type: 'int' })
  floor: number;

  @Column({ type: 'int' })
  sizeSqft: number;

  @Column({ length: 100 })
  customerName: string;

  @ManyToOne(() => Project, { nullable: false })
  project: Project;
}
