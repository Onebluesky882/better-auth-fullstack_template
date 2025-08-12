import { AuthModule } from '@mguay/nestjs-better-auth';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { betterAuth } from 'better-auth/*';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONNECTION } from './database/connection_database';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,

    AuthModule.forRootAsync({
      useFactory: (database: NodePgDatabase) => ({
        auth: betterAuth({
          database: drizzleAdapter(database, {
            provider: 'pg',
          }),
          emailAndPassword: {
            enabled: true,
          },
          trustedOrigins: ['http://localhost:3001'],
        }),
      }),
      inject: [DATABASE_CONNECTION],
    }),
    UsersModule,
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class AppModule {}
