import {Body, Controller, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthService} from "./auth/auth.service";
import {ApiResponse, ApiTags} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private authService: AuthService
  ) {}

  @ApiResponse({
    status: 200,
    description: "авторизация успешна"
  })
  @Post('auth/login')
  async login(@Body() req) {
    return this.authService.login(req);
  }
}
