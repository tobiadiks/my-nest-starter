import { Company } from 'src/company/entity/company.entity';
export declare class PrivateKey {
    id: string;
    privatekey: string;
    generated: string;
    company: Company;
    hashPassword(): Promise<void>;
    hashGenerate(): Promise<void>;
    updateDate(): Promise<void>;
}
