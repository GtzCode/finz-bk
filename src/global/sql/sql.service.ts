import { Injectable } from "@nestjs/common";
import { errorExceptionDB } from "src/core/exceptions/error.exception";
import { DataSource } from "typeorm";



@Injectable()
export class SqlService {
    constructor(private readonly dataSource: DataSource,) { }

    public async query(sql: string): Promise<any> {
        try {
            const vlResp: Promise<any> = await this.dataSource.query(sql);
            return vlResp;
        } catch (error) {
            errorExceptionDB(error);
        }
    }

    public async execute(sql: string): Promise<boolean> {
        try {
            await this.dataSource.query(sql);
            return true;
        } catch (error) {
            errorExceptionDB(error);
        }
    }



}
