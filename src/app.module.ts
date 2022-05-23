import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      useFactory: () => ({
        context: (context) => {
          const { req } = context;
          if (req.body.operationName !== 'IntrospectionQuery')
            console.log('BODY <--', req.body);
          return context;
        },
        autoSchemaFile: true,
        debug: true,
      }),
      driver: ApolloDriver,
    }),

    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
