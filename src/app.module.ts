import { Module } from '@nestjs/common';
import { DatabasesModule } from './config/databases/databases.module';
import { ApolloModule } from './config/graphql/Apollo.module';
import { StaticModule } from './config/static/static.module';
import { DateScalar } from './core/graphql/scalartypes/DateScalar';
import { EgresosModule } from './modules/egresos/egresos.module';



@Module({
    imports: [
        DatabasesModule,
        ApolloModule,
        StaticModule,

        EgresosModule,



    ],
    providers: [DateScalar],
})
export class AppModule {}
