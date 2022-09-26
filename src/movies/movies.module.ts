import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesResolver, PrismaService],
})
export class MoviesModule {}
