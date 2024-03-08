import { Module } from '@nestjs/common';
import { ApisModule } from 'src/global/apis/apis.module';
import { SqlModule } from 'src/global/sql/sql.module';
import { PagosService } from './pagos.service';
import { PagosResolver } from './pagos.resolver';


@Module({
    imports:[ApisModule,SqlModule],
    providers: [PagosService,PagosResolver],

})
export class PagosModule {}
