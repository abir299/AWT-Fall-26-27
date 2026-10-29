
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './modules/projects/projects.module';
import { FlatsModule } from './modules/flats/flats.module';
import { ConstructionUpdatesModule } from './modules/construction-updates/construction-updates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres' as const,
        host: config.get<string>('DB_HOST', 'localhost'),
        port: config.get<number>('DB_PORT', 5432),
        username: config.get<string>('DB_USERNAME', 'postgres'),
        password: config.get<string>('DB_PASSWORD', ''),
        database: config.get<string>(
          'DB_DATABASE',
          'real_estate_tracker',
        ),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    ProjectsModule,
    FlatsModule,
    ConstructionUpdatesModule,
  ],
})
export class AppModule {}
