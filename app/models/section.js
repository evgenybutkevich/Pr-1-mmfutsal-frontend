import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    name: {
        description: 'Name',
        validators: [
            validator('presence', true),
            validator('length', {
                min: 5,
                max: 30
            })
        ]
    }
});

export default Model.extend(Validations, {
    news: hasMany('news'),

    name: attr('string'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});
