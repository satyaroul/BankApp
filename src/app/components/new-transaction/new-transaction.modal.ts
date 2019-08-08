export class newTransactionModal{
    reference : string;
    customer_number : number;
    customer_name :string;
    customer_address: string;
    customer_phone_number: number;
    transfer_amount: number;
    transfer_currency : string;
    beneficiary_bank: string
    beneficiary_account_number: string;
    payment_details : string;
 
    constructor(reference, customer_number, customer_name,customer_address,
        customer_phone_number, transfer_amount, transfer_currency,  beneficiary_bank,
        beneficiary_account_number, payment_details){
            this.reference = reference;
            this.customer_number = customer_number;
            this.customer_name =customer_name;
            this.customer_phone_number = customer_phone_number
            this.customer_address= customer_address;
            this.transfer_amount=transfer_amount;
            this.transfer_currency=transfer_currency;
            this.beneficiary_bank=beneficiary_bank;
            this.beneficiary_account_number=beneficiary_account_number;
            this.payment_details=payment_details;

        }

}