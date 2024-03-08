import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PagosService } from './pagos.service'
import { InpPago, OutPago } from 'src/models/pagos';

@Resolver()
export class PagosResolver {
    constructor(private PagosService: PagosService) { }


    @Query(() => OutPago)
    async getOnePagos(@Args('pago') pago: number) {
        return this.PagosService.onePagos(pago);
    }


    @Mutation(() => Boolean)
    async postPagos(@Args('inpPago') inpPago: InpPago) {
        return this.PagosService.createPagos(inpPago);
    }


    @Mutation(() => Boolean)
    async putPagos(@Args('inpPago') inpPago: InpPago) {
        return this.PagosService.updatePagos(inpPago);
    }


    @Mutation(() => Boolean)
    async deletePagos(@Args('inpPago') inpPago: InpPago) {
        return this.PagosService.deletePagos(inpPago);
    }



}