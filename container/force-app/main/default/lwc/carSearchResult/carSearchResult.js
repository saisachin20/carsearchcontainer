import { LightningElement, wire , api } from 'lwc';
import fetchCars from '@salesforce/apex/carSearchController.getCars';

export default class CarSearchResult extends LightningElement {

    @api carTypeId;
    Carslst;
    
    //@wire(fetchCars)
    //Carslst;

    @wire(fetchCars ,{carType : '$carTypeId'})
    processOutput({data,error})
    {
        if(data)
        {
            this.Carslst = data;
        }
        else if(error)
        {
            console.log('Something went wrong');
        }
    }



/*carInput = {
    Id:'1',
    Picture__c:"/resource/cars/luxury/mercedes_benz_gls.jpg",
    Owner__c:'Rajesh'
}*/



}