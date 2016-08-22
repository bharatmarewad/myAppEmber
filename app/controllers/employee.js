import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      removeEmployee(employee) {
         this.get('store').findRecord('employee', employee.id).then((employee)=> {
           employee.destroyRecord();
         });
      },
    }
});
