import { User } from './user';
import { Order } from './order';

export class Reservation {
    host: User;
    orders: Order[];

    constructor(input: any) {
        Object.assign(this, input);
        this.host = new User(input['host']);
        let orders = [];
        for (let o of input['orders']) {
            orders.push(new Order(o));
        }
        this.orders = orders;
        return this;
    }
}
