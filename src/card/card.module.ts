import { Module } from '@nestjs/common';
import { Card } from './card.entity/card.entity';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CardService],
  controllers: [CardController],
  imports: [TypeOrmModule.forFeature([Card])],
})
export class CardModule {}
