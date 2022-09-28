import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './schema/movie.schema';
import { MoviesService } from './movies.service';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query(() => [Movie])
  async getAllMovies() {
    return await this.moviesService.getMany({});
    // return [
    //   { id: '1', title: 'test', year: 2022, genre: ['data', 'monsters'] },
    //   { id: '2', title: 'foobar', year: 2020 },
    // ];
  }

  @Mutation(() => Movie)
  async createMovie(@Args('input') data: CreateMovieDto) {
    console.log(data);
    return await this.moviesService.create(data);
  }
}
