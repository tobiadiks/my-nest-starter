import { Company } from 'src/company/entity/company.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class PrivateKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  privatekey: string;

  @Column()
  generated: string;

  @OneToOne(() => Company, (company: Company) => company.privatekey)
  @JoinColumn()
  company: Company;
}
