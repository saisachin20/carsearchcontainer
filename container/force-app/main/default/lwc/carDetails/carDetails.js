import { LightningElement ,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CarDetails extends NavigationMixin (LightningElement) {

    @api car;

   get carName(){
       try{
           return this.car.data.fields.Name.value;
       }catch(error){
           return 'NA';
       }
   }

   get PerDayRent(){
    try{
        return this.car.data.fields.Per_Day_Rent__c.value;
    }catch(error){
        return 'NA';
    }  
    }

    get BuildYear(){
        try{
            return this.car.data.fields.Build_Year__c.value;
        }catch(error){
            return 'NA';
        }
    }

    get Picture(){
        try{
            return this.car.data.fields.Picture__c.value;
        }catch(error){
            return 'NA';
        }
    }

    redirectToCarPage()
    {
        this[NavigationMixin.Navigate](
            {
                type:'standard__recordPage',
                attributes:{
                    recordId: this.car.data.fields.Id.value,
                    objectApiName: 'Car__c',
                    actionName:'view'
                }
            }
        );
    }
    //carName = this.car.data.fields.Name.value;
}