import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    firstName: {
        description: 'First name',
        validators: [
            validator('presence', true),
            validator('length', {
                min: 2,
                max: 20
            })
        ]
    },
    lastName: {
        description: 'Last name',
        validators: [
            validator('presence', true),
            validator('length', {
                min: 2,
                max: 20
            })
        ]
    }
});

export default Model.extend(Validations, {
    results: hasMany('result'),
    seasons: hasMany('season'),
    teams: hasMany('team'),

    firstName: attr('string'),
    lastName: attr('string'),
    avatar: attr('string'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});
