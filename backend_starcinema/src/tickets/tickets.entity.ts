import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../roles/customer.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  purchaseDate: Date;

  @Column()
  functionDate: Date;

  @Column()
  theater: string;

  @Column()
  room: string;

  @Column()
  seat: string;

  @Column()
  price: number;

  @Column()
  format: string;

  @ManyToOne(() => Customer, customer => customer.tickets)
  customer: Customer;
}