import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PingService } from "./ping.service";
import { OutPing, InpPing } from "src/models/ping";

@Resolver()
export class PingResolver {

    constructor(private readonly PingService: PingService) { }

    @Query(() => String)
    async Ping() {
        return this.PingService.Ping();
    }

    @Mutation(() => OutPing)
    async DataBasePing() {
        return this.PingService.DataBasePing();
    }

    @Query(() => String)
    async WhoIsThisPokemon() {
        return this.PingService.WhoIsThisPokemon();
    }

}