import { Field, InputType, ObjectType, PartialType } from "@nestjs/graphql";

@ObjectType()
export class Categoria {
    @Field() clave :string
    @Field() categoria :string
}


@ObjectType()
export class OutCategoria extends PartialType(Categoria,ObjectType) {}


@InputType()
export class InpCategoria extends PartialType(Categoria,InputType) {}

