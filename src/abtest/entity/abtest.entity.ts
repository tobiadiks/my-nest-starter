import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ABTest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  for_project: string;

  @Column({ nullable: true })
  item_a_url: string;

  @Column({ nullable: true })
  item_b_url: string;

  @Column({ default: 0 })
  item_a_vote: number;

  @Column({ default: 0 })
  item_b_vote: number;

  @Column({ nullable: true })
  date_created: string;

  @Column({ nullable: true })
  date_updated: string;
}
