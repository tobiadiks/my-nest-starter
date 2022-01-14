import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from './dashboard.service';
import { DashboardDto } from './dto/dashboard.dto';

@Controller('/:company_id/dashboard')
@UseGuards(AuthGuard())
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async DashboardMetric(
    @Param('company_id') company_id: string,
  ): Promise<DashboardDto> {
    const response = this.dashboardService.DashboardMetric(company_id);
    return response;
  }
}
