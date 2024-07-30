import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Player } from 'src/player/player.entity/player.entity';
import { Card } from 'src/card/card.entity/card.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Player, (player) => player.game)
  players: Player[];

  @OneToMany(() => Card, (card) => card.game)
  cards: Card[];
}
