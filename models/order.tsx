import moment from "moment";
class Order {
  constructor(id: string, items: any[], totalAmount: number, date: Date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  id: string;
  items: any[];
  totalAmount: number;
  date: Date;

  public get readableDate(): string {
    return moment(this.date).format("MMMM Do YYYY, hh:mm");
  }
}

export default Order;
