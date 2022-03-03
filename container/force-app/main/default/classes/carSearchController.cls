public with sharing class carSearchController {
    
    
    @AuraEnabled(cacheable=true)
    public static List<car__c> getCars(string carType){
        
        if(string.IsEmpty(carType))
        {
            return[SELECT Id, Name, Picture__c, Contact__r.Name , Car_Type__c FROM Car__c ];
        }
        else
        {
            return[SELECT Id, Name, Picture__c, Contact__r.Name , Car_Type__c FROM Car__c WHERE Car_Type__c=: carType];
        }
    }
}
