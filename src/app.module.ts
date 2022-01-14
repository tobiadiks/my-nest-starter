import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './db.config';
import { FeedbackModule } from './feedback/feedback.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ThirdpartykeyModule } from './thirdpartykey/thirdpartykey.module';
import { SentimentModule } from './sentiment/sentiment.module';
import { ProjectModule } from './project/project.module';
import { DocumentationModule } from './documentation/documentation.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig()),
    FeedbackModule,
    UserModule,
    ProfileModule,
    AuthModule,
    CompanyModule,
    ThirdpartykeyModule,
    SentimentModule,
    ProjectModule,
    DocumentationModule,
    DashboardModule,
  ],
})
export class AppModule {}
