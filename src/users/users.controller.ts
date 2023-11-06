import { Controller, Request, Get, Post, UseGuards, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {CreateCommentDto} from "../comments/dto/create-comment.dto";
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "../auth/auth.service";

@Controller('users')
export class UsersController {
  constructor(
      private usersService: UsersService
  ) {}
}
