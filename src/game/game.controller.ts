import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity/game.entity';

@Controller('game')
export class GameController {
  constructor(private service: GameService) {}
}
