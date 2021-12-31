import { Company } from 'src/company/entity/company.entity';
import {
  BeforeInsert,
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

  @Column({ nullable: false })
  type_id: string;

  @Column({ nullable: false })
  type_string: string;

  @ManyToOne(() => Company, (company: Company) => company.project)
  company: Company;

  @Column()
  date_created: string;

  @BeforeInsert()
  async typeToString() {
    switch (this.type_id) {
      case 'abtest':
        this.type_string = 'A/B Test';
        break;
      case 'nps':
        this.type_string = 'NPS Survey';
        break;
      case 'csat':
        this.type_string = 'CSAT';
        break;

      default:
        break;
    }
  }
}
