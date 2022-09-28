import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

@InputType()
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
