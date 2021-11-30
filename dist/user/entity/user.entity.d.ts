export declare class User {
    id: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    photo_url: string;
    date_created: string;
    date_updated: string;
    hashPassword(): Promise<void>;
    updateDate(): void;
}
