public with sharing class TotalNoOfActiveContacts {
    @InvocableMethod(label='Update Account')
    public static void TotalNoOfActiveContacts(List<Id> accIDs) {
        List <Account> acc = [Select Id,Name,
                             (Select Id,Name,Active_Status__c From Contacts Where Active_Status__c=true)
                             From Account Where Id IN:accIds];
            if(acc!=null){
                for(Account accValue:acc){
                    accValue.Total_No_of_Active_Contacts__c = accValue.Contacts.size();
                    system.debug(accValue.Contacts);
                }
            }
            if(!acc.isempty()){
                update acc;
            }

    }
}