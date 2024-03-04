import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLError } from 'graphql';
import { join } from "path";




export const ApolloConfig: ApolloDriverConfig = {
    driver: ApolloDriver,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.gql'),
    sortSchema: true,

    formatError: (error: GraphQLError) => {
        const Error:any = error.extensions.originalError;
        const graphQLFormattedError =  JSON.parse(Error.message)
      return graphQLFormattedError;
    },

    //installSubscriptionHandlers: true,
}


