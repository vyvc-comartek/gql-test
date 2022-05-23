import { Args, Field, InputType, Query, Resolver } from '@nestjs/graphql';

@InputType()
export class Obj {
  @Field(() => String)
  q: string;
}

@InputType()
export class Input {
  @Field(() => Obj, { nullable: true, defaultValue: {} })
  obj?: Obj;

  @Field(() => String, { nullable: true })
  str?: string;
}

@Resolver()
export class TestResolver {
  @Query(() => String)
  test(@Args('input') input: Input) {
    if (input.str) input.obj.q = input.str;

    return JSON.stringify(input);
  }
}
