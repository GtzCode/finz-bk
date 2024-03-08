import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GastosService } from './gastos.service';
import { InpGasto, OutGasto } from 'src/models/gastos';

@Resolver()
export class GastosResolver {
    constructor(private GastosService: GastosService) { }


    @Query(() => OutGasto)
    async getOneGastos(@Args('gasto') gasto: string) {
        return this.GastosService.oneGastos(gasto);
    }


    @Mutation(() => Boolean)
    async postGastos(@Args('inpGasto') inpGasto: InpGasto) {
        return this.GastosService.createGastos(inpGasto);
    }


    @Mutation(() => Boolean)
    async putGastos(@Args('inpGasto') inpGasto: InpGasto) {
        return this.GastosService.updateGastos(inpGasto);
    }


    @Mutation(() => Boolean)
    async deleteGastos(@Args('inpGasto') inpGasto: InpGasto) {
        return this.GastosService.deleteGastos(inpGasto);
    }



}