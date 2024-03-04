import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloConfig } from './apollo.config';


@Module({
    imports:[
        GraphQLModule.forRoot<ApolloDriverConfig>({... ApolloConfig})
    ],
})

export class ApolloModule {}
