import Ember from 'ember';

export default Ember.Controller.extend({
    employeeResult: null,
    pageNumber:0,
    pageSize: 2,
    pages: Ember.computed('content', 'pageSize',function() {
        var pages = [];
        var arrangedContent = this.get('model') || [];
        while(arrangedContent.length > 0) {
          pages.push(arrangedContent.sllice(0, this.get('pageSize')));
        }
        return pages;
    }),
    paginatedContent: Ember.computed('pages', 'pageNumber',function() {
      console.log(this.get('pages')[this.get('pageNumber')]);
        return this.get('pages')[this.get('pageNumber')];
    }),
    // actions: {
    //   employeeList() {
    //     console.log('actioncalled');
    //      let employeeList = this.get('store').findAll('employee').then((employeeList)=> {
    //        this.set('employeeResult', employeeList);
    //      });
    //   }
    // }
});
