import { LightningElement, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/carSearchFormController.getCarTypes';
import { NavigationMixin } from 'lightning/navigation';

export default class CarSearchForm extends NavigationMixin (LightningElement) {

    /*carTypeList=[

        {label:"Compact" ,value:"Compact"},
        {label:"Van" ,value:"Van"},
        {label:"Luxury" ,value:"Luxury"},
        {label:"Sports" ,value:"Sports"},
    ];*/
    
    carTypeList;

    @wire(getCarTypes)
    processCarTypes({data,error})
    {
        if(data)
        {
            this.carTypeList =[{label:'All Type', value:''}];
            data.forEach(element =>
               {
                   const carType ={}
                   carType.label = element.Name;
                   carType.value = element.Id;
                   this.carTypeList.push(carType);
               })
            
        }
        else if(error)
        {
            console.log(error);
        }
    }
    handleCarTypeChangeEvent(event)
    {
        const carTypeId = event.detail.value;

        const carTypeChangeEvent =new CustomEvent('cartypeselect',{detail: carTypeId});
        this.dispatchEvent(carTypeChangeEvent);
    }
    NewButtonClick()
    {
        this[NavigationMixin.Navigate](
            {
                type:'standard__objectPage',
                attributes:{
                    objectApiName: 'Car_Type__c',
                    actionName:'new'
                }
            }
        );
    }
    NewButtonClickMe()
    {
        this[NavigationMixin.Navigate](
            {
                type:'standard__objectPage',
                attributes:{
                    objectApiName: 'Account',
                    actionName:'new'
                }
            }
        );
    }

}