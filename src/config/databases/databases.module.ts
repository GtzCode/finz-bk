import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './datas.source';

@Module({
    imports:[
        TypeOrmModule.forRoot({...DataSourceConfig})
    ],
})
export class DatabasesModule {}
