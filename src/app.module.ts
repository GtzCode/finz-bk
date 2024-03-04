import { Module } from '@nestjs/common';

import { DatabasesModule } from './config/databases/databases.module';
import { PingModule } from './modules/ping/ping.module';
import { ApolloModule } from './config/graphql/Apollo.module';
import { StaticModule } from './config/static/static.module';
import { DateScalar } from './core/graphql/scalartypes/DateScalar';



@Module({
    imports: [
        DatabasesModule,
        ApolloModule,
        StaticModule,

        PingModule

    ],
    providers: [DateScalar],
})
export class AppModule {}
