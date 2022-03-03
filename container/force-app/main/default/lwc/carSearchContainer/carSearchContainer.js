import { LightningElement } from 'lwc';

export default class CarSearchContainer extends LightningElement {

    carTypeIdValue = '';

    handlecartypeselect(event)
    {
        this.carTypeIdValue = event.detail;
    }
}