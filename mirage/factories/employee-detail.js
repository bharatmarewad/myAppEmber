import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  middleName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  emailAddress() {
    return faker.internet.email();
  },
  phoneNumber() {
    return faker.phone.phoneNumber();
  }
});
