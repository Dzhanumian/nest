import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "./auth/auth.service";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private authService: AuthService
  ) {}

  @Post('auth/login')
  async login(@Body() req) {
    return this.authService.login(req);
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return req;
  //   return this.authService.login(req.user);
  // }
}
