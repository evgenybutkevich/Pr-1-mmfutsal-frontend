import Model, {attr} from '@ember-data/model';

export default Model.extend({
    userName: attr('string'),
    email: attr('string'),
    telephone: attr('string'),
    password: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});