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

  @ManyToOne(() => Company, (company: Company) => company.project)
  company: Company;

  @Column({ default: new Date().toLocaleString() })
  date_created: string;

  @Column({ default: new Date().toLocaleString() })
  date_updated: string;

  @BeforeUpdate()
  updateDate() {
    this.date_updated = new Date().toLocaleString();
  }
}
