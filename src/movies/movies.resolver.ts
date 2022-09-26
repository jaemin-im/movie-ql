import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Movie')
export class MoviesResolver {
  @Query()
  async getAllMovies() {
    return [
      { id: '1', title: 'test', year: 2022, genre: ['data', 'monsters'] },
      { id: '2', title: 'foobar', year: 2020 },
    ];
  }
}
