import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './schema/movie.schema';
import { MoviesService } from './movies.service';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private moviesService: MoviesService) {}

  @Query(() => Movie)
  async getMovie(@Args('id') id: number) {
    return await this.moviesService.getOne({ id });
  }

  @Query(() => [Movie])
  async getAllMovies() {
    return await this.moviesService.getMany({});
  }

  @Mutation(() => Movie)
  async createMovie(@Args('input') data: CreateMovieDto) {
    return await this.moviesService.create(data);
  }

  @Mutation(() => Movie)
  async deleteMovie(@Args('id') id: number) {
    return await this.moviesService.delete({ id });
  }

  // @Mutation(() => Movie)
  // async updateMovie(
  //   @Args('id') id: number,
  //   @Args('input') data: UpdateMovieDto,
  // ) {
  //   console.log(data);
  //   return await this.moviesService.update({
  //     id,
  //     data,
  //   });
  // }
}
