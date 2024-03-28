import { Controller, HttpStatus, HttpCode, Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public';
import { createAdminDto } from 'src/users/dto/create-user-dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    signUp(@Body() signUpDto: createAdminDto) {
      return this.authService.signUp(signUpDto);
    }
}
