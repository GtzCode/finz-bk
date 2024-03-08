import { Module } from '@nestjs/common';
import { PagosModule } from './pagos/pagos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { GastosModule } from './gastos/gastos.module';



@Module({
    imports:[
        CategoriasModule,
        GastosModule,
        PagosModule
    ],

})
export class EgresosModule {}
