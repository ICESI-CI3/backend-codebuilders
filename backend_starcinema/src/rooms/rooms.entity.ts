import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Room {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	seats: number;

	@Column({ default: true })
	isAvailable: boolean;
}
