import { ConfigModule } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    envFilePath:`.env`,
    isGlobal: true
});


export const DataSourceConfig: DataSourceOptions = {
    type: 'postgres' ,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA,
    database: process.env.DB_DATABASE,
}


export const AppDS = new DataSource(DataSourceConfig);