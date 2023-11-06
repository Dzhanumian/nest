import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiResponse} from "@nestjs/swagger";

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiResponse({
    status: 201,
    description: "задание создано"
  })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @ApiResponse({
    status: 200,
    description: "список всех заданий"
  })
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: "получение задание по ид"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @ApiResponse({
    status: 201,
    description: "обновляет задание"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @ApiResponse({
    status: 204,
    description: "удаляет задание"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
