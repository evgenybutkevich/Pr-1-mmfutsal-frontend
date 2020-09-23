import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        seasonName: {
            description: 'Season name',
            validators: [
                validator('presence', true),
                validator('length', {
                    min: 2,
                    max: 20,
                }),
            ],
        },
        startYear: {
            description: 'Start year',
            validators: [
                validator('presence', true),
                validator('date', {
                    after: '2010-01-01',
                    before: '2030-12-31',
                    format: 'YYYY-MM-DD',
                }),
            ],
        },
        endYear: {
            description: 'End year',
            validators: [
                validator('presence', true),
                validator('date', {
                    after: '2010-01-01',
                    before: '2030-12-31',
                    format: 'YYYY-MM-DD',
                }),
            ],
        },
    },
);

export default Model.extend(Validations, {
    players: hasMany('player'),
    teams: hasMany('team'),

    seasonName: attr('string'),
    startYear: attr('date'),
    endYear: attr('date'),
    createdAt: attr('date'),
    updatedAt: attr('date'),
});
