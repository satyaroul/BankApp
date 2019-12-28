export class beneficiary {
    name: string;
    accountNo: Number;
    phone: Number;
    ifsc: string;

    constructor(name: string, accountNo: Number, phone: Number, ifsc: string, ) {
        this.name = name;
        this.accountNo = accountNo;
        this.phone = phone;
        this.ifsc = ifsc;
    }
}