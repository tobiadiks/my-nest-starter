import { Company } from 'src/company/entity/company.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  project_id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  description: string;

  @Column()
  color: string;

  @ManyToOne(() => Company, (company: Company) => company.project)
  company: Company;

  @Column()
  date_created: string;

  @Column()
  date_updated: string;

}
