import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
  ) {}
  async getGames(): Promise<Game[]> {
    return await this.gamesRepository.find();
  }

  async getGameById(id: number): Promise<Game[]> {
    return await this.gamesRepository.find({
      select: ['id', 'name'],
      where: [{ id: id }],
    });
  }

  async updateName(id: number, newName: string): Promise<void> {
    await this.gamesRepository.update(id, { name: newName });
  }

  async addGame(game: Game): Promise<Game> {
    return await this.gamesRepository.save(game);
  }

  async removeGame(id: number): Promise<void> {
    await this.gamesRepository.delete(id);
  }
}
