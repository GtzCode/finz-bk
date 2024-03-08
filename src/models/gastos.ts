import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class Gasto {
    @Field() clave      :string
    @Field() categoria  :string
    @Field() gasto      :string
    @Field() necesario  :boolean


}


@ObjectType()
export class OutGasto extends PartialType(Gasto,ObjectType) {}


@InputType()
export class InpGasto extends PartialType(Gasto,InputType) {}

