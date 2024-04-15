import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	year: number;

	@Column()
	duration: number;

	@Column()
	genres: string[];
    functions: any;
}
