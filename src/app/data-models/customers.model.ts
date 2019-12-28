import { transactions } from "./transactions.model";
import { beneficiary } from "./beneficiary.model";

export class customers {
    name: string;
    dob: string;
    phone: Number;
    address: string;
    branch: string;
    IFSC: string;
    email: string;
    password: string;
    balance: Number;
    transaction : transactions;
    beneficiary : beneficiary;

    constructor(name: string, dob: string, phone: Number, address: string, branch: string, IFSC: string, email: string, password: string, balance: Number, transaction: transactions, beneficiary: beneficiary) {
        this.name = name;
        this.dob = dob;
        this.phone = phone;
        this.address = address;
        this.branch = branch;
        this.IFSC = IFSC;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this.transaction = transaction;
        this.beneficiary = beneficiary;
    }
}