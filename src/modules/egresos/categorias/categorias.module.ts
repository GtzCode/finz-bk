import { Module } from '@nestjs/common';
import { ApisModule } from 'src/global/apis/apis.module';
import { SqlModule } from 'src/global/sql/sql.module';
import { CategoriasService } from './categorias.service';
import { CategoriasResolver } from './categorias.resolver';


@Module({
    imports:[ApisModule,SqlModule],
    providers: [CategoriasService,CategoriasResolver],

})
export class CategoriasModule {}
