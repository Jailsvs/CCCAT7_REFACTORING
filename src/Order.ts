import { CPFIsValid } from './refactored-cpf';

interface IOrderItem {
  description: string;
  price: number;
  amount: number;
}

interface IDiscountCoupon {
  description: string;
  perc: number;
}

class Order {

    private items: IOrderItem[] = [];
    code: number = 0;

    constructor(readonly customerCPF: string, readonly discountCoupon?: IDiscountCoupon){
      if (!CPFIsValid(customerCPF))
        throw new Error("Invalid CPF")
      
        this.code = Math.floor(Math.random() * 100);
    }

    addItem(item: IOrderItem){
      this.items.push(item);
    }

    getTotallItems(){
      return this.items.length;
    }

    getTotallAmount(){
      let totallItems: number = 0;
      this.items.forEach(element => {
        totallItems += element.amount * element.price
      });
      return (this.discountCoupon)? totallItems * 1- this.discountCoupon.perc/100: totallItems;
    }
}
export default Order;