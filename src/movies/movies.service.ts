import { Injectable } from '@nestjs/common';
import { Movie, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    movieWhereUniqueInput: Prisma.MovieWhereUniqueInput,
  ): Promise<Movie | null> {
    return this.prisma.movie.findUnique({
      where: movieWhereUniqueInput,
    });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MovieWhereUniqueInput;
    where?: Prisma.MovieWhereInput;
    orderBy?: Prisma.MovieOrderByWithRelationInput;
  }): Promise<Movie[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.movie.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
