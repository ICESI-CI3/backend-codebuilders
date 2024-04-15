import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FunctionsController } from './functions.controller';
import { FunctionsService } from './movies.service';
import { functionProviders } from './functions.providers';

@Module({
	imports: [DatabaseModule],
	controllers: [FunctionsController],
	providers: [...functionProviders, FunctionsService],
})
export class FunctionModule {}
