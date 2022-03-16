import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: 'mysecret',
      signOptions: { expiresIn: '2h' },
    }),
  ],

  exports: [PassportModule, JwtModule],

  providers: [AuthService, JwtStrategy],

  controllers: [AuthController],
})
export class AuthModule {}
