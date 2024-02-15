import { Bag } from "../bags/Bag";
import { Wallet } from "../wallet/Wallet";

export class CartItem{
    constructor(bag:Bag){
        this.bag = bag;
        //  this.wallet = wallet; //t
        // this.priceB;
        // this.priceW;
    }
    bag:Bag;
    // wallet:Wallet;
    quantity:number =1;

    get price():number{
        return this.bag.price * this.quantity;
    }
    // get priceW():number{ 
    //     return this.wallet.price * this.quantity;
    // }
}
