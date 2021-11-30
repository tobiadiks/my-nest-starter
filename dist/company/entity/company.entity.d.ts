import { Feedback } from 'src/feedback/entity/feedback.entity';
import { PrivateKey } from 'src/thirdpartykey/entity/thirdparty.entity';
export declare class Company {
    id: string;
    email: string;
    password: string;
    display_name: string;
    logo_url: string;
    website: string;
    date_created: string;
    date_updated: string;
    feedback: Feedback[];
    privatekey: PrivateKey;
    hashPassword(): Promise<void>;
    updateDate(): void;
}
