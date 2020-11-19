import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    seasonName: {
        description: 'Season name',
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
    players: hasMany('player'),
    teams: hasMany('team'),

    seasonName: attr('string'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});
