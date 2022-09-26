import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieDto {
  @Field()
  readonly id?: number;

  @Field()
  readonly title!: string;

  @Field()
  readonly year!: number;

  @Field()
  readonly genre: string;
}
