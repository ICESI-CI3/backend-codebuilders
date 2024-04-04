import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { MoviesModule } from './movies/movies.module';
import { FunctionsModule } from './functions/functions.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, TicketsModule, MoviesModule, FunctionsModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
