import { hash } from 'bcrypt';
import { Company } from 'src/company/entity/company.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class PrivateKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  privatekey: string;

  @Column({ default: new Date().toLocaleString() })
  generated: string;

  @OneToOne(() => Company, (company: Company) => company.privatekey)
  @JoinColumn()
  company: Company;

  @BeforeInsert()
  async hashPassword() {
    this.privatekey = await hash(Math.random().toString(), 10);
  }

  @BeforeUpdate()
  async updateDate() {
    this.generated = await new Date().toLocaleString();
  }
}
