import { Module } from '@nestjs/common';
import { Player } from './player.entity/player.entity';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PlayerService],
  controllers: [PlayerController],
  imports: [TypeOrmModule.forFeature([Player])],
})
export class PlayerModule {}
