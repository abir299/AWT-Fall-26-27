
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 200 })
  location: string;

  @Column({ type: 'int' })
  totalFloors: number;

  @Column({ length: 50, default: 'Planning' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
