import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    userName: {
        description: 'User name',
        validators: [validator('presence', true),
            validator('length', {
                min: 5,
                max: 20
            })]
    },
    email: {
        description: 'Email',
        validators: [validator('presence', true),
            validator('format', {
                type: 'email'
            })]
    },
    telephone: {
        description: 'Telephone',
        validators: [validator('presence', true),
            validator('format', {
                regex: /^\+375 (?:25|29|33|44) (?=.*\d).{3}-(?=.*\d).{2}-(?=.*\d).{2}$/,
                message:
                    '{description} does not match, must be +375 XX XXX-XX-XX'
            })]
    },
    password: {
        description: 'Password',
        validators: [validator('presence', true),
            validator('length', {
                min: 3,
                max: 15
            }),
            validator('format', {
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/,
                message:
                    '{description} must include at least one upper case letter, one lower case letter, and a number'
            })]
    },
    firstName: {
        description: 'First name',
        validators: [validator('presence', true),
            validator('length', {
                min: 2,
                max: 20
            })]
    },
    lastName: {
        description: 'Last name',
        validators: [validator('presence', true),
            validator('length', {
                min: 2,
                max: 30
            })]
    }
});

export default Model.extend(Validations, {
    news: hasMany('news'),

    userName: attr('string'),
    email: attr('string'),
    telephone: attr('string'),
    password: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});
