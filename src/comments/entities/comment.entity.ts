import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Task} from 'src/tasks/entities/task.entity'

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'datetime'
    })
    create_at: Date;

    @Column({
        type: 'datetime'
    })
    update_at: Date;

    @ManyToOne(type => Task, task => task.comments, {eager: true})
    task: Task[];
}