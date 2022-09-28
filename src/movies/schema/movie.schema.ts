import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => Number)
  year: number;

  @Field(() => String, { nullable: true })
  genre?: string;
}
