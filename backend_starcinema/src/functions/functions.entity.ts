import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Movie } from 'src/movies/movies.entity';
import { Room } from 'src/rooms/rooms.entity';

@Entity()
export class Function {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @ManyToOne(() => Movie, movie => movie.functions)
    movie: Movie;

    @ManyToOne(() => Room, room => room.functions)
    room: Room;

}
