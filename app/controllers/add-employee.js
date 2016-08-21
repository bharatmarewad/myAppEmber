import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addEmployee(model) {
          let employee = this.get('model');
          this.get('employee').save().then(() => {
              this.transitionToRoute('employees');
          });
        }
    }
});
