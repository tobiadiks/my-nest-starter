import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CompanyModule } from 'src/company/company.module';
import { Company } from 'src/company/entity/company.entity';
import { User } from 'src/user/entity/user.entity';
import { UserModule } from 'src/user/user.module';
import { Feedback } from './entity/feedback.entity';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Feedback, User, Company]),
    UserModule,
    AuthModule,
    CompanyModule,
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
  exports: [FeedbackService],
})
export class FeedbackModule {}
