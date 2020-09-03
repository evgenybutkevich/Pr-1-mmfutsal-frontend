import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        userName: {
            description: 'User name',
            validators: [
                validator('presence', true),
                validator('length', {
                    min: 5,
                    max: 30,
                }),
            ],
        },
        email: {
            description: 'Email',
            validators: [
                validator('presence', true),
                validator('format', {
                    type: 'email',
                }),
            ],
        },
        emailConfirmation: validator('confirmation', {
            on: 'email',
            message: 'Email addresses do not match',
        }),
        telephone: {
            description: 'Telephone',
            validators: [
                validator('presence', true),
                validator('format', {
                    type: 'phone',
                }),
            ],
        },
        password: {
            description: 'Password',
            validators: [
                validator('presence', true),
                validator('length', {
                    min: 3,
                    max: 15,
                }),
                validator('format', {
                    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/,
                    message:
                        '{description} must include at least one upper case letter, one lower case letter, and a number',
                }),
            ],
        },
        firstName: {
            description: 'First name',
            validators: [
                validator('presence', true),
                validator('length', {
                    min: 2,
                    max: 30,
                }),
            ],
        },
        lastName: {
            description: 'Last name',
            validators: [
                validator('presence', true),
                validator('length', {
                    min: 2,
                    max: 30,
                }),
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
