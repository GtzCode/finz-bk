import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class Pago {
    @Field() control    :number
    @Field() gasto      :string
    @Field() fecha      :Date
    @Field() importe    :number
    @Field() detalle    :string


}


@ObjectType()
export class OutPago extends PartialType(Pago,ObjectType) {}


@InputType()
export class InpPago extends PartialType(Pago,InputType) {}

