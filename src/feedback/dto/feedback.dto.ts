import { Company } from 'src/company/entity/company.entity';
import { User } from 'src/user/entity/user.entity';

export class CreateFeedbackDto {
  title: string;
  content: string;
  feedback_type: string;
  first_name: string;
  email: string;
  company: Company;
}

export class FeedBackDto {
  title: string;
  content: string;
  status: string;
  feedback_type: string;
  first_name: string;
  email: string;
  processed: boolean;
  sentiment: number;
  likes: number;
  date_created: string;
  date_updated: string;
}
