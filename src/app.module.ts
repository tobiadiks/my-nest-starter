import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './db.config';
import { FeedbackModule } from './feedback/feedback.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ThirdpartykeyModule } from './thirdpartykey/thirdpartykey.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig()),
    FeedbackModule,
    ReviewModule,
    UserModule,
    ProfileModule,
    AuthModule,
    CompanyModule,
    ThirdpartykeyModule,
  ],
})
export class AppModule {}
