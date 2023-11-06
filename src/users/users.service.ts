import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private repository: Repository<User>) {
  }

  findOne(email: string) {
    return this.repository.findOneBy({email});
  }
}
