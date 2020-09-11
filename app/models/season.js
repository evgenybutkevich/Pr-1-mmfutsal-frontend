import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        seasonName: {
            description: 'Season name',
            validators: [
                validator('length', {
                    min: 2,
                    max: 30,
                }),
                validator('presence', true),
            ],
        },
        startYear: {
            description: 'Start year',
            validators: [
                validator('date', {
                    after: '2010-01-01',
                    before: '2030-12-31',
                    format: 'YYYY-MM-DD',
                }),
                validator('presence', true),
            ],
        },
        endYear: {
            description: 'End year',
            validators: [
                validator('date', {
                    after: '2010-01-01',
                    before: '2030-12-31',
                    format: 'YYYY-MM-DD',
                }),
                validator('presence', true),
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