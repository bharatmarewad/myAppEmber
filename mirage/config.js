export default function() {

    this.get('/employees');
    this.get('/employees/:id');
    this.post('/employees');
    this.put('/employees/:id'); 
    this.del('/employees/:id');
}
