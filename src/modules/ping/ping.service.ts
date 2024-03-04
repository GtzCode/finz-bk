import { Injectable } from "@nestjs/common";
import { ApisService } from "src/global/apis/apis.service";
import { OutPing, InpPing } from "src/models/ping";
import {SqlService} from "src/global/sql/sql.service";


@Injectable()
export class PingService {
    constructor(
        private readonly SqlService: SqlService,
        private readonly ApisService: ApisService
    ) { }



    public async Ping(): Promise<string> {
        return `Hola Mundo!!!`;
    }


    public async DataBasePing(): Promise<OutPing> {

        const sql = `SELECT NOW()::DATE AS FECHA`;
        const vlResp:OutPing[] = await this.SqlService.query(sql);
        return vlResp[0];
    }

    public async WhoIsThisPokemon(): Promise<string> {
        const WhoIsThisPokemon: string = await this.ApisService.apiPokemon();
        return `Its's ${WhoIsThisPokemon}`;
    }


}
