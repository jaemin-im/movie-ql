import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieDto } from './dto/movie.dto';
import { MoviesService } from './movies.service';

@Resolver('Movie')
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query()
  async getAllMovies() {
    return await this.moviesService.getMany({});
    // return [
    //   { id: '1', title: 'test', year: 2022, genre: ['data', 'monsters'] },
    //   { id: '2', title: 'foobar', year: 2020 },
    // ];
  }

  @Mutation(() => MovieDto)
  async createMovie(@Args('data') data: CreateMovieDto) {
    console.log(data);
    return await this.moviesService.create(data);
  }
}
