import { Company } from 'src/company/entity/company.entity';
import { User } from 'src/user/entity/user.entity';

export class CreateFeedbackDto {
  title: string;
  content: string;
  author: User;
  company: Company;
}

export class FeedBackDto {
  title: string;
  content: string;
  status: string;
  processed: boolean;
  sentiment: number;
  likes: number;
  date_created: string;
  date_updated: string;
}
