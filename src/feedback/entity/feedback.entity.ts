import { Company } from 'src/company/entity/company.entity';
import { User } from 'src/user/entity/user.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Company, (company: Company) => company.feedback)
  company: Company;

  @Column({ default: 'open' })
  status: string;

  @Column({ default: false })
  processed: boolean;

  @Column({ default: 2 })
  sentiment: number;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: new Date().toLocaleString() })
  date_created: string;

  @Column({ default: new Date().toLocaleString() })
  date_updated: string;

  @ManyToOne(() => User, (user: User) => user.feedback)
  author: User;

  @BeforeUpdate() updateDate() {
    this.date_updated = new Date().toLocaleString();
  }
}
