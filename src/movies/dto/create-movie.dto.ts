import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMovieDto {
  @Field(() => String)
  title: string;

  @Field(() => Number)
  year: number;

  @Field(() => String, { nullable: true })
  genre?: string;
}
