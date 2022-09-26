import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMovieDto {
  @Field()
  readonly title!: string;

  @Field()
  readonly year!: number;

  @Field()
  readonly genre: string;
}
