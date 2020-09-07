import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
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
    firstName: attr('string'),
    lastName: attr('string'),
    createdAt: attr('date'),
    updatedAt: attr('date'),
});