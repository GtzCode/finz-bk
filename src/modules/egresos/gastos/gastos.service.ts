import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/global/sql/sql.service';
import { ApisService } from 'src/global/apis/apis.service';
import { InpGasto, OutGasto } from 'src/models/gastos';


@Injectable()
export class GastosService {
    constructor(
        private readonly SqlService: SqlService,
        private readonly ApisService: ApisService
    ) { }


    public async oneGastos(vpGasto: string): Promise<OutGasto> {
        const sql = `SELECT * FROM GASTOS WHERE CLAVE = '${vpGasto}'`;
        const vlResp:OutGasto[] = await this.SqlService.query(sql);
        return vlResp[0];
    }


    public async createGastos(vpGasto: InpGasto): Promise<boolean> {
        const vlData: string = JSON.stringify(vpGasto);
        const sql: string = `CALL GPA_GASTOS_CRUD('${vlData}','C')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }


    public async updateGastos(vpGasto: InpGasto): Promise<boolean> {
        const vlData: string = JSON.stringify(vpGasto);
        const sql: string = `CALL GPA_GASTOS_CRUD('${vlData}','U')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }


    public async deleteGastos(vpGasto: InpGasto): Promise<boolean> {
        const vlData: string = JSON.stringify(vpGasto);
        const sql: string = `CALL GPA_GASTOS_CRUD('${vlData}','D')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }

}