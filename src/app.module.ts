import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { GamesModule } from './games/games.module';
import { CardsModule } from './cards/cards.module';
import { PlayersModule } from './players/players.module';







@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    GamesModule,
    CardsModule,
    PlayersModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
