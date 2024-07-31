import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity/game.entity';

// interface Params {
//   id: number;
// }
@Controller('game')
export class GameController {
  constructor(private service: GameService) {}

  @Get()
  get() {
    return this.service.getGames();
  }

  @Get(':id')
  getGameById(@Param('id') id: number) {
    return this.service.getGameById(id);
  }

  @Put(':id')
  @HttpCode(204)
  updateById(@Param('id') id: number, @Body('name') newName: string) {
    this.service.updateName(id, newName);
  }

  @Post()
  addGame(@Body() game: Game) {
    return this.service.addGame(game);
  }

  @Delete(':id')
  removeGame(@Param('id') id: number) {
    this.service.removeGame(id);
    return;
  }
}
