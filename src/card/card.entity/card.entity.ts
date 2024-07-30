import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from 'src/game/game.entity/game.entity';
import { Player } from 'src/player/player.entity/player.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  suit: string;

  @Column()
  rank: string;

  @ManyToOne(() => Game, (game) => game.cards)
  game: Game;

  @ManyToOne(() => Player, (player) => player.cards)
  player: Player;
}
