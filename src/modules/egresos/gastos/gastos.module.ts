import { Module } from '@nestjs/common';
import { ApisModule } from 'src/global/apis/apis.module';
import { SqlModule } from 'src/global/sql/sql.module';
import { GastosService } from './gastos.service';
import { GastosResolver } from './gastos.resolver';


@Module({
    imports:[ApisModule,SqlModule],
    providers: [GastosService,GastosResolver],

})
export class GastosModule {}
