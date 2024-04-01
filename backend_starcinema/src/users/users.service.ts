import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { createEmployeeDto } from './dto/create-employee-dto';
import * as bcrypt from 'bcrypt';
import { createCustomerDto } from './dto/create-customer-dto';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<User>,
        @Inject('ADMINS_REPOSITORY')
        private adminsRepository: Repository<User>,
        @Inject('EMPLOYEES_REPOSITORY')
        private employeesRepository: Repository<User>,
        @Inject('CUSTOMERS_REPOSITORY')
        private customersRepository: Repository<User>,
    ) {}

    async findOne(email:string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ where: { email: email}});
        return user;
    }

    async create_employee(user: createEmployeeDto): Promise<createEmployeeDto> {
        const hashedPassword = await bcrypt.hashSync(user.password, 10);
        user.password = hashedPassword;        
        this.usersRepository.save(user);
        return this.employeesRepository.save(user); 
    }

    async create_customer(user): Promise<any> {
        const hashedPassword = await bcrypt.hashSync(user.password, 10);
        user.password = hashedPassword;        
        this.usersRepository.save(user);
        return this.customersRepository.save(user);
    }
}
