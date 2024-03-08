import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/global/sql/sql.service';
import { ApisService } from 'src/global/apis/apis.service';
import { InpPago, OutPago } from 'src/models/pagos';


@Injectable()
export class PagosService {
    constructor(
        private readonly SqlService: SqlService,
        private readonly ApisService: ApisService
    ) { }


    public async onePagos(vpPago: number): Promise<OutPago> {
        const sql = `SELECT * FROM PAGOS WHERE CONTROL =  ${vpPago}`;
        const vlResp:OutPago[] = await this.SqlService.query(sql);
        return vlResp[0];
    }


    public async createPagos(vpPago: InpPago): Promise<boolean> {
        const vlData: string = JSON.stringify(vpPago);
        const sql: string = `CALL GPA_PAGOS_CRUD('${vlData}','C')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }


    public async updatePagos(vpPago: InpPago): Promise<boolean> {
        const vlData: string = JSON.stringify(vpPago);
        const sql: string = `CALL GPA_PAGOS_CRUD('${vlData}','U')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }


    public async deletePagos(vpPago: InpPago): Promise<boolean> {
        const vlData: string = JSON.stringify(vpPago);
        const sql: string = `CALL GPA_PAGOS_CRUD('${vlData}','D')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }

}