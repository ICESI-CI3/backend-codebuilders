export class CreateTicketDto {
    readonly purchaseDate: Date;
    readonly functionDate: Date;
    readonly theater: string;
    readonly room: string;
    readonly seat: string;
    readonly price: number;
    readonly format: string;
    readonly customerId: number;
}

