import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Game } from 'src/game/game.entity/game.entity';
import { Card } from 'src/card/card.entity/card.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Game, (game) => game.players)
  game: Game;

  @OneToMany(() => Card, (card) => card.player)
  cards: Card[];
}
