import { Module } from '@nestjs/common';
import { PingService } from './ping.service';
import { PingResolver } from './ping.resolver';
import { ApisModule } from 'src/global/apis/apis.module';
import { SqlModule } from 'src/global/sql/sql.module';




@Module({
   imports:[ApisModule,SqlModule],
   providers: [PingService,PingResolver],

})
export class PingModule {}