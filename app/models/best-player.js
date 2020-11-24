import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    // firstName: {
    //     description: 'First name',
    //     validators: [
    //         validator('presence', true),
    //         validator('length', {
    //             min: 2,
    //             max: 20
    //         })
    //     ]
    // },
    // lastName: {
    //     description: 'Last name',
    //     validators: [
    //         validator('presence', true),
    //         validator('length', {
    //             min: 2,
    //             max: 20
    //         })
    //     ]
    // }
});

export default Model.extend(Validations, {
    teamName: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    avatar: attr('string'),
    quotient: attr('number')
});
