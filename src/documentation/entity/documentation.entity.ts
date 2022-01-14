import { Company } from 'src/company/entity/company.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocumentationChild } from './documentationChild.entity';

@Entity()
export class Documentation {
  @PrimaryGeneratedColumn('uuid')
  documentation_id: string;

  @Column()
  title: string;

  @Column()
  hint: string;

  @Column({ default: 0 })
  views: number;

  @ManyToOne(() => Company, (company: Company) => company.documentation)
  company: Company;

  @OneToMany(
    () => DocumentationChild,
    (documentationChild: DocumentationChild) =>
      documentationChild.documentation,
  )
  documentationChild: DocumentationChild;
}
