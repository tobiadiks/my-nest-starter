import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyDto } from 'src/company/dto/company.dto';
import { Company } from 'src/company/entity/company.entity';
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

  // async all(): Promise<FeedBackDto[]> {
  //   return this.feedbackRepository.find();
  // }

  async allByCompany(user: CompanyDto): Promise<FeedBackDto[]> {
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: user.company_id },
    });

    return this.feedbackRepository.find({ where: { company: getCompany } });
  }

  async create(data: CreateFeedbackDto): Promise<FeedBackDto> {
    // const getUser = await this.userRepository.findOne({
    //   where: { id: user.id },
    // });
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: data.company.company_id },
    });
    const feedback: CreateFeedbackDto = await this.feedbackRepository.create({
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
