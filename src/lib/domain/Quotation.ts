export class Quotation {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  originId: number;
  destinationId: number;
  amountQuotedCents: number;
  etaDays: number;
  boxId: number;

  constructor(params: {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    originId: number;
    destinationId: number;
    amountQuotedCents: number;
    etaDays: number;
    boxId: number;
  }) {
    this.id = params.id;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
    this.originId = params.originId;
    this.destinationId = params.destinationId;
    this.amountQuotedCents = params.amountQuotedCents;
    this.etaDays = params.etaDays;
    this.boxId = params.boxId;
  }
}
