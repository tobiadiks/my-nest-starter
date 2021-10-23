import { Feedback } from 'src/feedback/entity/feedback.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { hash } from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ nullable: false, default: 'Anonymous', type: 'varchar' })
  first_name: string;

  @Column({ nullable: false, default: 'Anonymous', type: 'varchar' })
  last_name: string;

  @Column({ nullable: true })
  photo_url: string;

  @Column({ default: new Date().toLocaleString(), update: false })
  date_created: string;

  @Column({ default: new Date().toLocaleString() })
  date_updated: string;

  @OneToMany(() => Feedback, (feedback: Feedback) => feedback.author)
  feedback: Feedback[];

  @BeforeInsert() async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @BeforeUpdate() updateDate() {
    this.date_updated = new Date().toLocaleString();
  }
}
