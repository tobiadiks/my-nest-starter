import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/entity/company.entity';
import { UserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateFeedbackDto, FeedBackDto } from './dto/feedback.dto';
import { Feedback } from './entity/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async all(): Promise<FeedBackDto[]> {
    return this.feedbackRepository.find();
  }

  async create(user: UserDto, data: CreateFeedbackDto): Promise<FeedBackDto> {
    const getUser = await this.userRepository.findOne({
      where: { id: user.id },
    });
    const getCompany = await this.companyRepository.findOne({
      where: { id: data.company.id },
    });
    const feedback: CreateFeedbackDto = await this.feedbackRepository.create({
      author: getUser,
      company: getCompany,
      ...data,
    });
    return this.feedbackRepository.save(feedback);
  }

  async delete(id: string): Promise<any> {
    return this.feedbackRepository.delete(id);
  }

  async update(id: string, data: Feedback): Promise<any> {
    return this.feedbackRepository.update(id, { id: id, ...data });
  }
}
