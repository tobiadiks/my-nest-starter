import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AbtestService } from './abtest.service';

@Controller('abtest')
export class AbtestController {
  constructor(private readonly abtestService: AbtestService) {}
  @Get('/:company_id/:project_id')
  @UseGuards(AuthGuard())
  async GetResult(
    @Param('company_id') company_id: string,
    @Param('project_id') project_id: string,
  ) {
    const result = await this.abtestService.GetResult(company_id, project_id);
    return result;
  }

  @Post('/:company_id/:project_id')
  @UseGuards(AuthGuard())
  async Edit(
    @Param('company_id') company_id: string,
    @Param('project_id') project_id: string,
    @Body('item_a_url') item_a_url: string,
    @Body('item_b_url') item_b_url: string,
  ) {
    const result = await this.abtestService.Edit(
      company_id,
      project_id,
      item_a_url,
      item_b_url,
    );
    return result;
  }

  @Post('/:project_id')
  async Vote(
    @Param('project_id') project_id: string,
    @Body('value') value: string,
  ) {
    const result = await this.abtestService.Vote(project_id, value);
    return result;
  }
}
