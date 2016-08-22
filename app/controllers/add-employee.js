import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addEmployee() {
          let employee = this.get('model');
          employee.save().then(() => {
              this.transitionToRoute('employees');
          });
        }
    }
});
