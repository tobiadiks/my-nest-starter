import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompanyDto } from 'src/company/dto/company.dto';
import { CreateFeedbackDto, FeedBackDto } from './dto/feedback.dto';
import { Feedback } from './entity/feedback.entity';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  // @Get()
  // all(): Promise<FeedBackDto[]> {
  //   return this.feedbackService.all();
  // }

  @Get()
  @UseGuards(AuthGuard())
  allByCompany(
    @Req()
    req: any,
  ): Promise<FeedBackDto[]> {
    const user = <CompanyDto>req.user;
    return this.feedbackService.allByCompany(user);
  }

  @Post()
  // @UseGuards(AuthGuard())
  create(@Body() data: CreateFeedbackDto): Promise<FeedBackDto> {
    // const user = <UserDto>req.user;
    return this.feedbackService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Feedback) {
    this.feedbackService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.feedbackService.delete(id);
  }
}
