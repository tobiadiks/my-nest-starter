
import { DocumentationChild } from '../entity/documentationChild.entity';

export class CreateDocumentationDto {
  title: string;
  hint: string;
}

export class DocumentationDto {
  documentation_id: string;
  title: string;
  hint: string;
  documentationChild: DocumentationChild;
}
