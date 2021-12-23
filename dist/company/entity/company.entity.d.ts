import { Feedback } from 'src/feedback/entity/feedback.entity';
import { Project } from 'src/project/entity/project.entity';
import { PrivateKey } from 'src/thirdpartykey/entity/thirdparty.entity';
export declare class Company {
    company_id: string;
    email: string;
    password: string;
    display_name: string;
    logo_url: string;
    website: string;
    date_created: string;
    date_updated: string;
    feedback: Feedback[];
    project: Project;
    privatekey: PrivateKey;
    hashPassword(): Promise<void>;
    updateDate(): void;
}
