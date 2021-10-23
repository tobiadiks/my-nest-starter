import { hash } from 'bcrypt';
import { Feedback } from 'src/feedback/entity/feedback.entity';
import { PrivateKey } from 'src/thirdpartykey/entity/thirdparty.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  display_name: string;

  @Column({ nullable: true })
  logo_url: string;

  @Column({ nullable: true })
  website: string;

  @Column({ default: new Date().toLocaleString() })
  date_created: string;

  @Column({ default: new Date().toLocaleString() })
  date_updated: string;

  @OneToMany(() => Feedback, (feedback: Feedback) => feedback.company)
  feedback: Feedback[];

  @OneToOne(() => PrivateKey, (privatekey: PrivateKey) => privatekey.company)
  privatekey: PrivateKey;

  @BeforeInsert() async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @BeforeUpdate()
  updateDate() {
    this.date_updated = new Date().toLocaleString();
  }
}
