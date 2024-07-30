import { Module } from '@nestjs/common';
import { Game } from './game.entity/game.entity';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [GameService],
  controllers: [GameController],
  imports: [TypeOrmModule.forFeature([Game])],
})
export class GameModule {}
