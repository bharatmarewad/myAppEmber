import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // modelNameFromPayloadType (payloadType){
  //   return
  // }
  
  modelNameFromPayloadType(payloadType) {
    return payloadType.replace('customers', 'cust');
  }
});
