import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Documentation } from './documentation.entity';

@Entity()
export class DocumentationChild {
  @PrimaryGeneratedColumn('uuid')
  documentation_child_id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  date_created: string;

  @Column()
  date_updated: string;

  @ManyToOne(
    () => Documentation,
    (documentation: Documentation) => documentation.documentationChild,
  )
  documentation: Documentation;
}
