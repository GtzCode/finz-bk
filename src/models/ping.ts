import { Field, InputType, ObjectType, PartialType } from "@nestjs/graphql";

@ObjectType()
export class Ping {
   @Field() fecha :Date
}


@ObjectType()
export class OutPing extends PartialType(Ping,ObjectType) {}


@InputType()
export class InpPing extends PartialType(Ping,InputType) {}


