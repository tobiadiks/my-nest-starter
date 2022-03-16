import { hash } from 'bcrypt';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: true })
  profile_url: string;

  @Column({ nullable: true })
  referred: string;

  @Column({ nullable: false })
  referral_code: string;

  @Column({ default: new Date().toLocaleString() })
  date_created: string;

  @Column({ default: new Date().toLocaleString() })
  date_updated: string;

  

  @BeforeInsert() async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @BeforeUpdate()
  updateDate() {
    this.date_updated = new Date().toLocaleString();
  }
}
