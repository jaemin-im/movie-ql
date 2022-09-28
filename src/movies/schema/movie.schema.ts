import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String)
  title: string;

  @Field(() => Number)
  year: number;

  @Field(() => String)
  genre: string;
}
