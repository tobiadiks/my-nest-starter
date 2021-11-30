import { Company } from 'src/company/entity/company.entity';
export declare class CreateFeedbackDto {
    title: string;
    content: string;
    feedback_type: string;
    first_name: string;
    email: string;
    company: Company;
}
export declare class FeedBackDto {
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
