import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiResponse} from "@nestjs/swagger";

@Controller('comments')
@UseGuards(JwtAuthGuard)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiResponse({
    status: 201,
    description: "комментарий создан"
  })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @ApiResponse({
    status: 200,
    description: "список всех комментариев"
  })
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: "получение комментария по ид"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @ApiResponse({
    status: 201,
    description: "обновляет комментарий"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @ApiResponse({
    status: 204,
    description: "удаляет комментарий"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
