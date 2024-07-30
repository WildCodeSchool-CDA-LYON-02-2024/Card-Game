import { Game } from '../../games/game.entity/game.entity';
import { Player } from '../../players/player.entity/player.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


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
