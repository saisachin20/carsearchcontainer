import { LightningElement , wire} from 'lwc';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

import { getRecord } from 'lightning/uiRecordApi';

import CAR_ID from '@salesforce/schema/Car__c.Id';
import CAR_NAME from '@salesforce/schema/Car__c.Name';
import CAR_BUILDYEAR from '@salesforce/schema/Car__c.Build_Year__c';
import CAR_RENT from '@salesforce/schema/Car__c.Per_Day_Rent__c';
import CAR_PICTURE from '@salesforce/schema/Car__c.Picture__c';

const fieldtobefetched =[
    CAR_ID,CAR_NAME,CAR_BUILDYEAR,CAR_RENT,CAR_PICTURE
];

export default class CarDetailContainer extends LightningElement {


    selectedCarId;
    @wire(CurrentPageReference)
    pageRef;

    @wire(getRecord,{recordId: '$selectedCarId',fieldtobefetched})
    selectedcardata;

    connectedCallback()
    {
        registerListener('carSelect', this.callBackMethod,this);
    }
    callBackMethod(payload)
    {
        this.selectedCarId = payload.Id;
        //const ccarName = payload.Name;

    }
    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }
    get isCarSelected()
    {
        if(this.selectedcardata.data)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}