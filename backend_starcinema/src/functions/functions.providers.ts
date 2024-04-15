import { DataSource } from 'typeorm';
import { Function } from './functions.entity';

export const functionProviders = [
	{
		provide: 'function_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Function),
		inject: ['DATA_SOURCE'],
	},
];