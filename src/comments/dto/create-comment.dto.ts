import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty({
        description: 'комментарий'
    })
    name: string;

    @ApiProperty({
        description: 'ид задачи'
    })
    taskId: number;
}
