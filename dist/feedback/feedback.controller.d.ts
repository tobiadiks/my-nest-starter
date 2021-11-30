import { CreateFeedbackDto, FeedBackDto } from './dto/feedback.dto';
import { Feedback } from './entity/feedback.entity';
import { FeedbackService } from './feedback.service';
export declare class FeedbackController {
    private feedbackService;
    constructor(feedbackService: FeedbackService);
    allByCompany(req: any): Promise<FeedBackDto[]>;
    create(data: CreateFeedbackDto): Promise<FeedBackDto>;
    update(id: string, data: Feedback): void;
    delete(id: string): void;
}
