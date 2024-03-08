import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoriasService } from './categorias.service';
import { InpCategoria, OutCategoria } from 'src/models/categorias';

@Resolver()
export class CategoriasResolver {
    constructor(private CategoriasService: CategoriasService) { }


    @Query(() => OutCategoria)
    async getOneCategorias(@Args('categoria') categoria: string) {
        return this.CategoriasService.oneCategorias(categoria);
    }


    @Mutation(() => Boolean)
    async postCategorias(@Args('inpCategoria') inpCategoria: InpCategoria) {
        return this.CategoriasService.createCategorias(inpCategoria);
    }


    @Mutation(() => Boolean)
    async putCategorias(@Args('inpCategoria') inpCategoria: InpCategoria) {
        return this.CategoriasService.updateCategorias(inpCategoria);
    }


    @Mutation(() => Boolean)
    async deleteCategorias(@Args('inpCategoria') inpCategoria: InpCategoria) {
        return this.CategoriasService.deleteCategorias(inpCategoria);
    }



}