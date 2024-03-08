import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/global/sql/sql.service';
import { ApisService } from 'src/global/apis/apis.service';
import { InpCategoria, OutCategoria } from 'src/models/categorias';


@Injectable()
export class CategoriasService {
    constructor(
        private readonly SqlService: SqlService,
        private readonly ApisService: ApisService
    ) { }


    public async oneCategorias(vpCategoria: string): Promise<OutCategoria> {
        const sql = `SELECT * FROM CATEGORIAS WHERE CLAVE = '${vpCategoria}'`;
        const vlResp:OutCategoria[] = await this.SqlService.query(sql);
        return vlResp[0];
    }


    public async createCategorias(vpCategoria: InpCategoria): Promise<boolean> {
        const vlData: string = JSON.stringify(vpCategoria);
        const sql: string = `CALL GPA_CATEGORIAS_CRUD('${vlData}','C')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }


    public async updateCategorias(vpCategoria: InpCategoria): Promise<boolean> {
        const vlData: string = JSON.stringify(vpCategoria);
        const sql: string = `CALL GPA_CATEGORIAS_CRUD('${vlData}','U')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }


    public async deleteCategorias(vpCategoria: InpCategoria): Promise<boolean> {
        const vlData: string = JSON.stringify(vpCategoria);
        const sql: string = `CALL GPA_CATEGORIAS_CRUD('${vlData}','D')`;
        const vlResp:boolean = await this.SqlService.execute(sql);
        return vlResp;
    }

}