import { Company } from 'src/company/entity/company.entity';
export declare class Feedback {
    id: string;
    title: string;
    content: string;
    company: Company;
    status: string;
    processed: boolean;
    feedback_type: string;
    sentiment: number;
    likes: number;
    date_created: string;
    date_updated: string;
    first_name: string;
    email: string;
    updateDate(): void;
}
