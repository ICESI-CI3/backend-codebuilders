import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { createAdminDto } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';

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
        return this.usersRepository.findOne({ where: { email } });
    }

    async create(user: createAdminDto): Promise<User> {
        const hashedPassword = await bcrypt.hashSync(user.password, 10);
        user.password = hashedPassword;
        
        switch(user.role) {
            case 'admin':
                return this.adminsRepository.save(user);
            case 'employee':
                return this.employeesRepository.save(user);
            case 'customer':
                return this.customersRepository.save(user);
        }
    }
}
