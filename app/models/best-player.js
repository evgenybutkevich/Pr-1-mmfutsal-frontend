import Model, { attr } from '@ember-data/model';

export default Model.extend({
    teamName: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    avatar: attr('string'),
    quotient: attr('number')
});
