export class transactions {
    type: string;
    amount: Number;
    date: string;
    to: string;
    from: string;

    constructor(type: string, amount: Number, date: string, to: string, from: string) {
        this.type = type;
        this.amount = amount;
        this.date = date;
        this.to = to;
        this.from = from;
    }
}