export class LogData {
    ID: Number
    display_name: String
    email: String
    password: String
    token: Number

    constructor(ID: Number, display_name: String, email: String, password: String, token: Number) {
        this.ID = ID;
        this.display_name=display_name;
        this.email = email;
        this.password=password;
        this.token = token;
    }
}