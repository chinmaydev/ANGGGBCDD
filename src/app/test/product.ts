export class Product{
    name : string;
    price: number;
    availability : boolean;

    constructor(name :string,price :number,availability : boolean){
        this.name = name;
        this.price = price;
        this.availability = availability;
    }
}