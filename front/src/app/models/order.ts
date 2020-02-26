import { Plate } from './plate';

export class Order {

    plates: Plate[];
    constructor(input: any) {
        Object.assign(this, input);
        let plates = [];
        for (let p of input['plates']){
            plates.push(new Plate(p));
        }
        this.plates = plates;
        return this;
    }
}
