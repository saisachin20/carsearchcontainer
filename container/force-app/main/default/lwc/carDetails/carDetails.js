import { LightningElement ,api } from 'lwc';

export default class CarDetails extends LightningElement {

    @api car;

    renderedCallback()
    {
        console.log('value of car ::' + JSON.stringify(this.car));
    }

    //carName = this.car.data.fields.Name.value;
}