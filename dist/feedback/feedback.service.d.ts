import { CompanyDto } from 'src/company/dto/company.dto';
import { Company } from 'src/company/entity/company.entity';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateFeedbackDto, FeedBackDto } from './dto/feedback.dto';
import { Feedback } from './entity/feedback.entity';
export declare class FeedbackService {
    private readonly feedbackRepository;
    private readonly userRepository;
    private readonly companyRepository;
    constructor(feedbackRepository: Repository<Feedback>, userRepository: Repository<User>, companyRepository: Repository<Company>);
    allByCompany(user: CompanyDto): Promise<FeedBackDto[]>;
    create(data: CreateFeedbackDto): Promise<FeedBackDto>;
    delete(id: string): Promise<any>;
    update(id: string, data: Feedback): Promise<any>;
}
