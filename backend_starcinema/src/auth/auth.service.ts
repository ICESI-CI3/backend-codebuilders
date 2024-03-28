import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createAdminDto } from 'src/users/dto/create-user-dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(email: string,pass: string,): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(email);
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.email, roles: user.role};
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(signUpDto: createAdminDto): Promise<createAdminDto> {
        const user = await this.usersService.create(signUpDto);
        return user;
    }
}
