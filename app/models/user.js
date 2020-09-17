import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        userName: {
            description: 'User name',
            validators: [
                validator('length', {
                    min: 5,
                    max: 30,
                }),
                validator('presence', true),
            ],
        },
        email: {
            description: 'Email',
            validators: [
                validator('format', {
                    type: 'email',
                }),
                validator('presence', true),
            ],
        },
        telephone: {
            description: 'Telephone',
            validators: [
                validator('format', {
                    regex: /^\+375 (?:25|29|33|44) (?=.*\d).{3}-(?=.*\d).{2}-(?=.*\d).{2}$/,
                    message:
                        '{description} does not match, must be +375 XX XXX-XX-XX',
                }),
                validator('presence', true),
            ],
        },
        password: {
            description: 'Password',
            validators: [
                validator('format', {
                    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/,
                    message:
                        '{description} must include at least one upper case letter, one lower case letter, and a number',
                }),
                validator('length', {
                    min: 3,
                    max: 15,
                }),
                validator('presence', true),
            ],
        },
        firstName: {
            description: 'First name',
            validators: [
                validator('length', {
                    min: 2,
                    max: 30,
                }),
                validator('presence', true),
            ],
        },
        lastName: {
            description: 'Last name',
            validators: [
                validator('length', {
                    min: 2,
                    max: 30,
                }),
                validator('presence', true),
            ],
        },
    },
);

export default Model.extend(Validations, {
    userName: attr('string'),
    email: attr('string'),
    telephone: attr('string'),
    password: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    createdAt: attr('date'),
    updatedAt: attr('date'),
});
