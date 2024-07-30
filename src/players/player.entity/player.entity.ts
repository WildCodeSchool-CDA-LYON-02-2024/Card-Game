import { Card } from '../../cards/card.entity/card.entity';
import { Game } from '../../games/game.entity/game.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';


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
