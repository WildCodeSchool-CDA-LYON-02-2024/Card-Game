import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { Card } from './card.entity/card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardsService],
  controllers: [CardsController],
})
export class CardsModule {}
