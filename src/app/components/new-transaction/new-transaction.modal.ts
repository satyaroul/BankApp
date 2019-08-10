export class newTransactionModal {
    public reference: string;
    public customer_number: number;
    public customer_name: string;
    public customer_address: string;
    public customer_phone_number: number;
    public transfer_amount: number;
    public transfer_currency: string;
    public beneficiary_bank: string
    public beneficiary_account_number: string;
    public payment_details: string;

    constructor(reference: string, customer_number: number, customer_name: string, customer_address: string,
        customer_phone_number: number, transfer_amount: number, transfer_currency: string, beneficiary_bank: string,
        beneficiary_account_number: string, payment_details: string) {
        this.reference = reference;
        this.customer_number = customer_number;
        this.customer_name = customer_name;
        this.customer_phone_number = customer_phone_number
        this.customer_address = customer_address;
        this.transfer_amount = transfer_amount;
        this.transfer_currency = transfer_currency;
        this.beneficiary_bank = beneficiary_bank;
        this.beneficiary_account_number = beneficiary_account_number;
        this.payment_details = payment_details;

    }

}