import { Card } from "../../cards/card.entity/card.entity";
import { Player } from "../../players/player.entity/player.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";




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
