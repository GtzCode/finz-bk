import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { errorException } from "src/core/exceptions/error.exception";
import { pokemonApi } from "./apis.config";


@Injectable()
export class ApisService {
    constructor(private readonly httpService: HttpService) { }

    public async apiPokemon(): Promise<string> {
        try {
            let resp = await firstValueFrom(
                this.httpService.get(`${pokemonApi.url}/${pokemonApi.pokemon}`),
            );

            return resp.data.forms[0].name;

        } catch (error) {
            errorException('ErroApi - Error en la Api Pokemon', 404)
        }

    }


}
